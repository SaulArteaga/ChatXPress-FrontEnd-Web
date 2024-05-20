import React, { useState } from "react";
import style from "./CreateUserContainer.module.css";
import { IUsersRequest } from "../../interfaces/IUsersRequest";
import { createUser } from "../../services/users.services";
import { useNavigate } from "react-router";

/**
 * This function sets up a page to create a new user into the database.
 * @returns The create user container
 */
function CreateUserContainer() {
  const navigate = useNavigate();

  const [userModified, setUserModified] = useState<IUsersRequest>({});

  const handleInputChange = (e: any) => {
    setUserModified({
      ...userModified,
      [e.target.name]: e.target.value,
    });
  };

  const createUserHandler = async () => {
    console.log(userModified);
    await createUser(userModified);
    navigate("/home");
  };

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
                onChange={handleInputChange}
                value={userModified.name}
              ></input>
              <input
                id="lastname"
                name="lastname"
                className={style.inputData}
                onChange={handleInputChange}
                value={userModified.lastname}
              ></input>
              <input
                id="email"
                name="email"
                className={style.inputData}
                value={userModified.email}
                onChange={handleInputChange}
              ></input>
              <input
                id="department"
                name="department"
                className={style.inputData}
                value={userModified.department}
                onChange={handleInputChange}
              ></input>
              <input
                className={style.inputData}
                name="password"
                value={userModified.password}
                onChange={handleInputChange}
              ></input>
            </div>
          </div>
          <div className={style.buttonsModal}>
            <button className={style.createButton} onClick={createUserHandler}>
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateUserContainer;
