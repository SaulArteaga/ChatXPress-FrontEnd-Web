import React from "react";
import style from "./CreateUserContainer.module.css";

function CreateUserContainer() {
  return (
    <div className={style.createUserContainer}>
      <div className={style.modalContainer}>
        <div className={style.modal}>
          <div className={style.headerContainer}>
            <div className={style.headerModal}>
              <h1>CREATE USER</h1>
            </div>
          </div>
          <div className={style.dataModal}>
            <div className={style.labelsModal}>
              <label>Name</label>
              <label>Lastname</label>
              <label>Email</label>
              <label>Department</label>
              <label>Password</label>
            </div>
            <div className={style.inputsModal}>
              <input
                id="name"
                name="name"
                className={style.inputData}
                onChange={() => console.log("a")}
              ></input>
              <input
                className={style.inputData}
                onChange={() => console.log("a")}
                readOnly
              ></input>
              <input
                id="email"
                name="email"
                className={style.inputData}
                onChange={() => console.log("a")}
              ></input>
              <input
                id="department"
                name="department"
                className={style.inputData}
                onChange={() => console.log("a")}
              ></input>
              <input
                className={style.inputData}
                onChange={() => console.log("a")}
              ></input>
            </div>
          </div>
          <div className={style.buttonsModal}>
            <button
              className={style.createButton}
              onChange={() => console.log("a")}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateUserContainer;
