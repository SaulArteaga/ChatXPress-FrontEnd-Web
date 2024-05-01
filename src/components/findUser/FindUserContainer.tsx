import React from "react";
import style from "./FindUserContainer.module.css";

function FindUserContainer() {
  return (
    <div className={style.findUserContainer}>
      <div className={style.findUserSubContainers}>
        <div className={style.findUser}>
          <h1>Find Users</h1>
        </div>
        <div className={style.subContainer}>
          <div className={style.findInputContainer}>
            <input className={style.customInput} placeholder="ID"></input>
            <button className={style.buttonStyle}>FIND</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindUserContainer;
