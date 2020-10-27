import React, { useState } from "react";
import { Transition } from "react-transition-group";
import Style from "./chaintransition.module.scss";

//アニメーションのスタイル4種類を定義(使わないものは省略可能)
const transitionStyle = {
  entering: {
    transition: "all 1s ease",
    transform: "translateY(220px) ",
    backgroundColor:"red"
  },
  entered: {
    transition: "all 1s ease",
    transform: "translateY(220px) ",
    backgroundColor:"green"
  },
  exiting: {
    transition: "all 1s ease",
    transform: "translateY(0)",
    backgroundColor: "blue",
  },
  exited: {
    transition: "all 1s ease",
    transform: "translateY(0)",
    backgroundColor: "gray",
  },
};

//ChainTransitionコンポーネント
const ChainTransition = () => {

  //マウントの状態を管理
  const [firstCircle, setFirstCircle] = useState(false);
  const [secondCircle, setSecondCircle] = useState(false);
  const [thirdCircle, setThirdCircle] = useState(false);
  const [fourthCircle, setFourthCircle] = useState(false);
  const [fifthCircle, setFifthCircle] = useState(true);
  const [sixthCircle, setSixthCircle] = useState(true);
  const [seventhCircle, setSeventhCircle] = useState(true);

  //マウントのオンオフを切り替える
  const changer = () => {
    setFirstCircle(!firstCircle);
  };

  const callBacks = {

    onEnter: () => {
      setSecondCircle(true);
    },
    onEntering: () =>{
      setThirdCircle(true);
    },
    onEntered: () => {
      setFourthCircle(true);
    },
    onExit: () => {
      setFifthCircle(false);
    },
    onExiting: () => {
      setSixthCircle(false);
    },
    onExited: () => {
      setSeventhCircle(false);
    },

  };

  return (
    <div className={Style.wrapper}>

      <button onClick={changer}>inの切り替え</button>

      <div className={Style.circleGroup}>

        <div className={Style.circleMember}>
        <p>(trigger)</p>
        <Transition in={firstCircle} timeout={1000} {...callBacks}>
          {(state) => <div className={Style.circleShape} style={transitionStyle[state]} >
            <div>
              <p className={Style.circleText}> {firstCircle ? "in=true" : "in=false"}</p>
              <p className={Style.circleText}> {state}</p>
            </div>
          </div>}
        </Transition>
      </div>

      <div className={Style.circleMember}>
        <p>onEnter</p>
        <Transition in={secondCircle} timeout={1000}  >
          {(state) => <div className={Style.circleShape} style={transitionStyle[state]} >
            <div>
              <p className={Style.circleText}> {secondCircle ? "in=true" : "in=false"}</p>
              </div>
            </div>}
        </Transition>
      </div>

      <div className={Style.circleMember}>
        <p>onEntering</p>
        <Transition in={thirdCircle} timeout={1000}>
          {(state) => <div className={Style.circleShape} style={transitionStyle[state]} >
            <div>
              <p className={Style.circleText}> {thirdCircle ? "in=true" : "in=false"}</p>
            </div>
          </div>}
        </Transition>
      </div>

      <div className={Style.circleMember}>
        <p>onEntered</p>
        <Transition in={fourthCircle} timeout={1000} >
          {(state) => <div className={Style.circleShape} style={transitionStyle[state]} >
            <div>
              <p className={Style.circleText}> {fourthCircle ? "in=true" : "in=false"}</p>
            </div>
          </div>}
        </Transition>
      </div>

      <div className={Style.circleMember}>
        <p>onExit</p>
        <Transition in={fifthCircle} timeout={1000}  >
          {(state) => <div className={Style.circleShape} style={transitionStyle[state]} >
            <div>
              <p className={Style.circleText}> {fifthCircle ? "in=true" : "in=false"}</p>
              </div>
            </div>}
        </Transition>
      </div>

      <div className={Style.circleMember}>
        <p>onExiting</p>
        <Transition in={fifthCircle} timeout={1000} >
          {(state) => <div className={Style.circleShape} style={transitionStyle[state]} >
            <div>
              <p className={Style.circleText}> {sixthCircle ? "in=true" : "in=false"}</p>
            </div>
          </div>}
        </Transition>
      </div>


      <div className={Style.circleMember}>
        <p>onExited</p>
          <Transition in={seventhCircle} timeout={1000} >
            {(state) => <div className={Style.circleShape} style={transitionStyle[state]} >
              <div>
                <p className={Style.circleText}> {seventhCircle ? "in=true" : "in=false"}</p>
              </div>
            </div>}
          </Transition>
      </div>

    </div>

  </div>

  );
}

export default ChainTransition;
