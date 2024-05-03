import React from "react";
import styles from "./UserModal.module.css";
import { isVisibleContext } from "../../contexts/isVisibleContext";
import { currentUserDataContext } from "../../contexts/currentUserDataContext";
import { HiOutlineX } from "react-icons/hi";

function UserModal() {
  const { isVisible, setIsVisible } = React.useContext(isVisibleContext);
  const { currentUser } = React.useContext(currentUserDataContext);

  const handleVisibleChange = () => {
    setIsVisible(!isVisible);
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
              className={styles.inputData}
              value={currentUser?.name}
            ></input>
            <input
              className={styles.inputData}
              value={currentUser?.lastname}
            ></input>
            <input
              className={styles.inputData}
              value={currentUser?._id}
              readOnly
            ></input>
            <input
              className={styles.inputData}
              value={currentUser?.email}
            ></input>
            <input
              className={styles.inputData}
              value={currentUser?.department}
            ></input>
            <input className={styles.inputData}></input>
          </div>
        </div>
        <div className={styles.buttonsModal}>
          <button className={styles.updateButton}>Update</button>
          <button className={styles.cancelButton}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default UserModal;
