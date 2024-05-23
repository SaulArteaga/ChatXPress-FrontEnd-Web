import React, { useState } from "react";
import styles from "./UserModal.module.css";
import { isVisibleContext } from "../../contexts/isVisibleContext";
import { currentUserDataContext } from "../../contexts/currentUserDataContext";
import { HiOutlineX } from "react-icons/hi";
import { IUsersRequest } from "../../interfaces/IUsersRequest";
import {
  deleteUserByEmail,
  modifyUserByEmail,
} from "../../services/users.services";
import { useNavigate } from "react-router-dom";

/**
 * This function creates a modal for update and
 * delete the users on the database
 * @returns The modal for delete and update
 */
function UserModal() {
  const { currentUser } = React.useContext(currentUserDataContext);
  const userToChange: IUsersRequest = {
    name: currentUser.name,
    lastname: currentUser.lastname,
    email: currentUser.email,
    department: currentUser.department,
    password: "",
  };
  const { isVisible, setIsVisible } = React.useContext(isVisibleContext);
  const [userModified, setUserModified] = useState(userToChange);

  const navigate = useNavigate();

  const handleVisibleChange = () => {
    setIsVisible(!isVisible);
  };

  const handleUpdateUser = async () => {
    const confirmChoice = window.confirm("Do you want to modify the data?");
    if (confirmChoice) {
      if (userModified.password.length < 6) {
        window.alert(
          "Password is too short. Password must have 6 or more characters"
        );
      } else {
        await modifyUserByEmail(userModified, currentUser?.email!);
        handleVisibleChange();
        navigate(0);
        navigate("/home");
      }
    } else {
      window.alert("You didn't want to change data, redirecting to main page");
      handleVisibleChange();
      navigate("/home");
    }
  };

  const handleDeleteUser = async () => {
    const confirmChoice = window.confirm("Do you want to delete the data?");
    if (confirmChoice) {
      await deleteUserByEmail(currentUser?.email!);
      handleVisibleChange();
      navigate(0);
      navigate("/home");
    } else {
      window.alert("Redirecting to main page");
      handleVisibleChange();
      navigate("/home");
    }
  };

  const handleInputChange = (e: any) => {
    setUserModified({
      ...userModified,
      [e.target.name]: e.target.value,
    });
    console.log(userModified.name);
  };

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modal}>
        <div className={styles.headerContainer}>
          <div className={styles.headerModal}>
            <h1>USER</h1>
          </div>
          <div className={styles.exitButtonContainer}>
            <HiOutlineX
              onClick={handleVisibleChange}
              size={30}
              className={styles.closeButton}
            />
          </div>
        </div>
        <div className={styles.dataModal}>
          <div className={styles.labelsModal}>
            <label>Name</label>
            <label>Surname</label>
            <label>Email</label>
            <label>Department</label>
            <label>Password</label>
          </div>
          <div className={styles.inputsModal}>
            <input
              id="name"
              name="name"
              className={styles.inputData}
              onChange={handleInputChange}
              value={userModified?.name}
            ></input>
            <input
              id="lastname"
              name="lastname"
              className={styles.inputData}
              onChange={handleInputChange}
              value={userModified?.lastname}
            ></input>
            <input
              id="email"
              name="email"
              className={styles.inputData}
              onChange={handleInputChange}
              value={userModified?.email}
            ></input>
            <input
              id="department"
              name="department"
              className={styles.inputData}
              onChange={handleInputChange}
              value={userModified?.department}
            ></input>
            <input
              id="password"
              name="password"
              type="password"
              className={styles.inputData}
              onChange={handleInputChange}
            ></input>
          </div>
        </div>
        <div className={styles.buttonsModal}>
          <button className={styles.updateButton} onClick={handleUpdateUser}>
            Update
          </button>
          <button className={styles.cancelButton} onClick={handleDeleteUser}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserModal;
