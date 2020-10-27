import React, { useState } from "react";
import { Transition } from "react-transition-group";
import Style from "./otherProps.module.scss";

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


const OtherProps = () => {

  //マウントの状態を管理
  const [mount, setMount] = useState(false);

  //マウントのオンオフを切り替える
  const changer = () => {
    setMount(!mount);
  };

  return (
    <div className={Style.wrapper}>

      <button onClick={changer}>inの切り替え</button>

      <div className={Style.circleGroup}>

        <div className={Style.circleMember}>
          <p>Normal</p>
          <Transition in={mount} timeout={1000} >
            {(state) => <div className={Style.circleShape} style={transitionStyle[state]} >
              <div>
                <p className={Style.circleText}> {mount ? "in=true" : "in=false"}</p>
                <p className={Style.circleText}> {state}</p>
              </div>
            </div>}
          </Transition>
        </div>

        <div className={Style.circleMember}>
          <p>mountOnEnter</p>
          <Transition in={mount} timeout={1000} mountOnEnter >
            {(state) => <div className={Style.circleShape} style={transitionStyle[state]} >
              <div>
                <p className={Style.circleText}> {mount ? "in=true" : "in=false"}</p>
                <p className={Style.circleText}> {state}</p>
              </div>
            </div>}
          </Transition>
        </div>

        <div className={Style.circleMember}>
          <p>unmountOnExit</p>
          <Transition in={mount} timeout={1000} unmountOnExit >
            {(state) => <div className={Style.circleShape} style={transitionStyle[state]} >
              <div>
                <p className={Style.circleText}> {mount ? "in=true" : "in=false"}</p>
                <p className={Style.circleText}> {state}</p>
              </div>
              </div>}
          </Transition>
        </div>

        <div className={Style.circleMember}>
          <p>enter=false</p>
          <Transition in={mount} timeout={1000} enter={false} >
            {(state) => <div className={Style.circleShape} style={transitionStyle[state]} >
              <div>
                <p className={Style.circleText}> {mount ? "in=true" : "in=false"}</p>
                <p className={Style.circleText}> {state}</p>
              </div>
            </div>}
          </Transition>
        </div>

        <div className={Style.circleMember}>
          <p>exit=false</p>
          <Transition in={mount} timeout={1000} exit={false} >
            {(state) => <div className={Style.circleShape} style={transitionStyle[state]} >
              <div>
                <p className={Style.circleText}> {mount ? "in=true" : "in=false"}</p>
                <p className={Style.circleText}> {state}</p>
              </div>
            </div>}
          </Transition>
        </div>

        <div className={Style.circleMember}>
          <p>nodeRef</p>
          <Transition in={mount} timeout={1000} nodeRef >
            {(state) => <div className={Style.circleShape} style={transitionStyle[state]} >
              <div>
                <p className={Style.circleText}> {mount ? "in=true" : "in=false"}</p>
                <p className={Style.circleText}> {state}</p>
              </div>
            </div>}
          </Transition>
        </div>

      </div>

    </div>

  );

}

export default OtherProps;
