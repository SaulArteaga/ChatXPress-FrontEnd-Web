import React, { useEffect, useState } from "react";
import style from "./UserInfoContainer.module.css";
import { LiaUserPlusSolid } from "react-icons/lia";
import { FaCommentDots } from "react-icons/fa6";
import { FaUser, FaUserCheck } from "react-icons/fa";
import { getActiveUsers, getTotalUsers } from "../../services/users.services";
import { ITotalActiveUsersResponse } from "../../interfaces/ITotalActiveUsersResponse";
import { ITotalUsersResponse } from "../../interfaces/ITotalUsersResponse";
import { ITotalActiveChatsResponse } from "../../interfaces/ITotalActiveChatsResponse";
import { getTotalActiveChats } from "../../services/chats.services";

function UserInfoContainer() {
  const [totalActiveUsers, setTotalActiveUsers] =
    useState<ITotalActiveUsersResponse>({} as ITotalActiveUsersResponse);
  const [totalUsers, setTotalUsers] = useState<ITotalUsersResponse>(
    {} as ITotalUsersResponse
  );
  const [totalActiveChats, setTotalActiveChats] =
    useState<ITotalActiveChatsResponse>({} as ITotalActiveChatsResponse);

  useEffect(() => {
    async function getTotalActiveUsers() {
      const total = await getActiveUsers();
      setTotalActiveUsers({ activeUsers: total.activeUsers });
    }
    async function getAllUsers() {
      const total = await getTotalUsers();
      setTotalUsers({ totalUsers: total.totalUsers });
    }
    async function getTotalChats() {
      const totalChat = await getTotalActiveChats();
      setTotalActiveChats({ chatsActive: totalChat.chatsActive });
    }
    getTotalChats();
    getAllUsers();
    getTotalActiveUsers();
  }, []);
  return (
    <div className={style.userInfoContainer}>
      <div className={style.userInfoSubContainers}>
        <div className={style.subContainers}>
          <div className={style.usersContainer}>
            <div className={style.usersData}>
              <h4 className={style.usersText}>Active Users</h4>
              <h4 className={style.usersQuantity}>
                {totalActiveUsers.activeUsers}
              </h4>
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
              <h4 className={style.usersQuantity}>Todo</h4>
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
              <h4 className={style.usersQuantity}>{totalUsers.totalUsers}</h4>
            </div>
            <div>
              <FaUser size={90} style={{ color: "white" }} />
            </div>
          </div>
        </div>
        <div className={style.subContainers}>
          <div className={style.usersContainer}>
            <div className={style.usersData}>
              <h4 className={style.usersText}>Total Chats</h4>
              <h4 className={style.usersQuantity}>
                {totalActiveChats.chatsActive}
              </h4>
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
