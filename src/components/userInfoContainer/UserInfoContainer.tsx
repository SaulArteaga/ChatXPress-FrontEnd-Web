import React from "react";
import style from "./UserInfoContainer.module.css";
import { LiaUserPlusSolid } from "react-icons/lia";
import { FaCommentDots } from "react-icons/fa6";
import { FaUser, FaUserCheck } from "react-icons/fa";

function UserInfoContainer() {
  return (
    <div className={style.userInfoContainer}>
      <div className={style.userInfoSubContainers}>
        <div className={style.subContainers}>
          <div className={style.usersContainer}>
            <div className={style.usersData}>
              <h4 className={style.usersText}>New Users this week</h4>
              <h4 className={style.usersQuantity}>2034</h4>
            </div>
            <div>
              <LiaUserPlusSolid size={90} />
            </div>
          </div>
        </div>
        <div className={style.subContainers}>
          <div className={style.usersContainer}>
            <div className={style.usersData}>
              <h4 className={style.usersText}>All Messages</h4>
              <h4 className={style.usersQuantity}>33120</h4>
            </div>
            <div>
              <FaCommentDots size={90} style={{ color: "white" }} />
            </div>
          </div>
        </div>
        <div className={style.subContainers}>
          <div className={style.usersContainer}>
            <div className={style.usersData}>
              <h4 className={style.usersText}>Total Users</h4>
              <h4 className={style.usersQuantity}>4056</h4>
            </div>
            <div>
              <FaUser size={90} style={{ color: "white" }} />
            </div>
          </div>
        </div>
        <div className={style.subContainers}>
          <div className={style.usersContainer}>
            <div className={style.usersData}>
              <h4 className={style.usersText}>Active Users</h4>
              <h4 className={style.usersQuantity}>305</h4>
            </div>
            <div>
              <FaUserCheck size={90} style={{ color: "white" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfoContainer;
