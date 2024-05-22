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

  function isEmpty(value: any): boolean {
    return (
      value == null ||
      value === false ||
      value === 0 ||
      isNaN(value) ||
      value === "" ||
      (Array.isArray(value) && value.length === 0) ||
      (typeof value === "object" && Object.keys(value).length === 0)
    );
  }

  function hasAnyEmptyProperty(obj: Record<string, any>): boolean {
    return Object.values(obj).some(isEmpty);
  }

  const initUser: IUsersRequest = {
    name: "",
    department: "",
    email: "",
    password: "",
    lastname: "",
  };

  const [userCreated, setUserCreated] = useState<IUsersRequest>(initUser);

  const handleInputChange = (e: any) => {
    setUserCreated({
      ...userCreated,
      [e.target.name]: e.target.value,
    });
  };

  const createUserHandler = async () => {
    const confirmChoice = window.confirm("Do you want to create the user?");
    if (hasAnyEmptyProperty(userCreated)) {
      window.alert("Canceling operation");
      setUserCreated(initUser);
    }
    if (confirmChoice) {
      await createUser(userCreated);
      navigate("/home");
    }
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
                value={userCreated.name}
              ></input>
              <input
                id="lastname"
                name="lastname"
                className={style.inputData}
                onChange={handleInputChange}
                value={userCreated.lastname}
              ></input>
              <input
                id="email"
                name="email"
                className={style.inputData}
                value={userCreated.email}
                onChange={handleInputChange}
              ></input>
              <input
                id="department"
                name="department"
                className={style.inputData}
                value={userCreated.department}
                onChange={handleInputChange}
              ></input>
              <input
                className={style.inputData}
                name="password"
                type="password"
                value={userCreated.password}
                onChange={handleInputChange}
              ></input>
            </div>
          </div>
          <div className={style.buttonsModal}>
            <button className={style.createButton} onClick={createUserHandler}>
              Create
            </button>
            <button className={style.cancelButton} onClick={createUserHandler}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateUserContainer;
