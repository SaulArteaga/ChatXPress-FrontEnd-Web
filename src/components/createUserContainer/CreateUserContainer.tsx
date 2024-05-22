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

  const checkValuesInForm = (): boolean => {
    let option =
      initUser.name === userCreated.name ||
      initUser.lastname === userCreated.lastname ||
      initUser.email === userCreated.email ||
      initUser.department === userCreated.department ||
      initUser.password === userCreated.password;
    if (option) {
      return false;
    }
    return true;
  };

  const createUserHandler = async () => {
    const confirmChoice = window.confirm("Do you want to create the user?");

    if (!checkValuesInForm()) {
      window.alert("Canceling operation. There are empty values on the form.");
    } else if (userCreated.password.length < 6) {
      window.alert("Password must have more than 6 characters");
    } else if (confirmChoice) {
      const result = await createUser(userCreated);
      if (result) {
        navigate("/home");
      } else {
        window.alert(
          "User was not created because it was already in the database."
        );
        setUserCreated(initUser);
      }
    }
  };

  const handleCancelCreate = async () => {
    setUserCreated(initUser);
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
                id="password"
                name="password"
                value={userCreated.password}
                onChange={handleInputChange}
              ></input>
            </div>
          </div>
          <div className={style.buttonsModal}>
            <button className={style.createButton} onClick={createUserHandler}>
              Create
            </button>
            <button className={style.cancelButton} onClick={handleCancelCreate}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateUserContainer;
