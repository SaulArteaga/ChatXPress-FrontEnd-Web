import React, { useState } from "react";
import styles from "./UserModal.module.css";
import { isVisibleContext } from "../../contexts/isVisibleContext";
import { currentUserDataContext } from "../../contexts/currentUserDataContext";
import { HiOutlineX } from "react-icons/hi";
import { IUsersRequest } from "../../interfaces/IUsersRequest";
import { modifyUserByEmail } from "../../services/users.services";

function UserModal() {
  const { currentUser } = React.useContext(currentUserDataContext);
  const userToChange: IUsersRequest = {
    name: currentUser?.name,
    lastname: currentUser?.lastname,
    email: currentUser?.email,
    department: currentUser?.department,
    password: currentUser?.password,
  };
  const { isVisible, setIsVisible } = React.useContext(isVisibleContext);
  const [userModified, setUserModified] = useState(userToChange);

  const handleVisibleChange = () => {
    setIsVisible(!isVisible);
  };

  const handleUpdateUser = async () => {
    await modifyUserByEmail(userModified, currentUser?.email!);
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
            <label>ID</label>
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
              className={styles.inputData}
              onChange={handleInputChange}
              // value={currentUser?._id}
              readOnly
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
              className={styles.inputData}
              onChange={handleInputChange}
            ></input>
          </div>
        </div>
        <div className={styles.buttonsModal}>
          <button className={styles.updateButton} onClick={handleUpdateUser}>
            Update
          </button>
          <button className={styles.cancelButton}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default UserModal;
