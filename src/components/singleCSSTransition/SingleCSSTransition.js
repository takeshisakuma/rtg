import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Style from "./singleCSSTransition.module.scss";


//SingleCSSTransitionコンポーネント
const SingleCSSTransition = () => {

  //マウントの状態を管理
  const [mount, setMount] = useState(false);

  //マウントのオンオフを切り替える
  const changer = () => {
    setMount(!mount);
  };

  return (

    <div className={Style.wrapper}>

      <button onClick={changer}>inの切り替え</button>

      <div className={Style.circleGroup} >

        <div className={Style.circleMember} >

          <CSSTransition
            in={mount}
            timeout={1000}
            classNames={{
              appear:Style.testAppear,
              appearActive:Style.testAppearActive,
              appearDone:Style.testAppearDone,
              enter:Style.testEnter,
              enterActive: Style.testEnterActive,
              enterDone:Style.testEnterDone,
              exit:Style.testExit,
              exitActive: Style.testExitActive,
              exitDone: Style.testExitDone,
            }}
            >

            {(state) =>
              <div className={Style.circleShape} >
                <div>
                  <p className={Style.circleText} > {mount ? "in=true" : "in=false"}</p>
                  <p className={Style.circleText} > {state}</p>

              </div>
             </div>}

          </CSSTransition>

        </div>

      </div>

    </div>

  );

}

export default SingleCSSTransition;
