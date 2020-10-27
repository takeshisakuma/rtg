import React, { useState } from "react";
import { SwitchTransition, Transition } from "react-transition-group";
import Style from "./transitionSwitching.module.scss";

//トランジションのスタイル4種類を定義(使わないものは省略可能)
const transitionStyle = {
  entering: {
    transition: "all 0.5s ease",
    transform: "translateX(-150px) ",
    backgroundColor:"red",
    opacity:"0",
  },
  entered: {
    transition: "all 0.5s ease",
    transform: "translateX(150px)",
    backgroundColor:"green",
    opacity:"1",
  },
  exiting: {
    transition: "all 0.5s ease",
    transform: "translateX(-150px)",
    backgroundColor: "blue",
    opacity:"1",
  },
  exited: {
   transition: "all 0.5s ease",
    transform: "translateX(150px)",
    backgroundColor: "gray",
    opacity:"0",
  },
};

const TransitionSwitch=()=> {
  const [name, setName] = useState(false);

  return (
    <div>
      <button onClick={() => setName(!name)}>Switching</button>
      <div className={Style.squareWrapper}>
      <SwitchTransition mode="in-out">

        <Transition
          key={name ? "aaa" : "bbb"}
          timeout={500}
          unmountOnExit
          mountOnEnter
          >

          {state => <div state={state} style={transitionStyle[state]} className={Style.square}>
  {name ? <p>AAA</p> : <p>BBB</p>}
          </div>}

        </Transition>

      </SwitchTransition>
      </div>

    </div>

  );
}

export default TransitionSwitch;
