import React, { useState,useRef } from "react";
import {TransitionGroup,Transition} from 'react-transition-group';
import Style from "./transitionList.module.scss";

//トランジションのスタイル4種類を定義(使わないものは省略可能)
const transitionStyle = {

  entering: {
    transition: "all 0.2s ease",
    opacity:"0"
  },
  entered: {
    transition: "all 0.2s ease",
    opacity:"1"
  },
  exiting: {
    transition: "all 0.2s ease",
    opacity:"0"
  },
  exited: {
    transition: "all 0.2s ease",
    opacity:"0"
  },

};

//TransitionGroupコンポーネント
const TransitionList = () => {

  //inputに入力中の文字
  const [inputting,setInputting]=useState("");

  //input関連付け用のref
  const inputRef =useRef();

  //最後のID番号管理用
  const [lastId,setLastId]=useState(3);

  //初期アイテムリスト
  const initialList=[
    {id:0,word:"React"},
    {id:1,word:"Hooks"},
    {id:2,word:"Transition"},
  ];

  //アイテムリストに初期アイテムをセット
  const [items,setItems]=useState(initialList);

  //アイテムの追加処理
  const adder = () => {
    if(inputting){
      setItems(
      items=>[
        ...items,
       {id:lastId,
        word:inputting}
      ]
    )};

    //IDのインクリメント
    setLastId(prevId=>prevId+1);

    //inputのクリア
    setInputting("");
    inputRef.current.value="";
  };

  //リセット
  const reseter=()=>{
    setInputting("");
    inputRef.current.value="";
    setItems(initialList);
  }

  //form送信防止
  const stopSubmit=(e)=>{
    e.preventDefault();
  }

  return (

    <div className={Style.wrapper}>

      <form action=""
        onSubmit={stopSubmit}
        className={Style.controller}
      >

        <div className={Style.controllerAddGroup}>
          <input
            className={Style.controllerInput}
            ref={inputRef}
            type="text"
            onChange={
              (e)=>setInputting(e.target.value)
            }
          />

          <button
            className={Style.button}
            onClick={adder}
            disabled={!inputting ? true:false}
          >追加</button>
        </div>

        <button
          className={Style.button}
          onClick={reseter}>
          初期化
        </button>

      </form>

      <div className={Style.cardGroup}>

        <TransitionGroup className={Style.cardInner}>

          {items.map(({id,word})=>(

            <Transition key={id} timeout={200} >
              {(state) =>
                <div className={Style.cardShape} style={transitionStyle[state]} >
                  <button
                    className={Style.button}
                     onClick={() =>
                      setItems(items =>
                        items.filter(item => item.id !== id)
                      )
                    }
                  >
                  削除
                  </button>

                  <p className={Style.cardWord}> {word}</p>
                  <p className={Style.cardTransition}> {state}</p>
             </div>}

          </Transition>
              )
            )
          }
        </TransitionGroup>

      </div>

    </div>

  );

}

export default TransitionList;
