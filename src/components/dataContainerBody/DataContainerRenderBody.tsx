import React, { useEffect, useState } from "react";
import { usersContext } from "../../contexts/usersContext";
import { isVisibleContext } from "../../contexts/isVisibleContext";
import { IUsersResponse } from "../../interfaces/IUsersResponse";
import { currentUserDataContext } from "../../contexts/currentUserDataContext";
import { FaRegEdit } from "react-icons/fa";
import Loader from "../loader/Loader";
import { getUsers } from "../../services/users.services";
import style from "./DataContainerRenderBody.module.css";

/**
 * This fucntion returns the data of the users straight
 * from the database into a table.
 * @returns The list of users into a table
 */
function DataContainerRenderBody() {
  const { users } = React.useContext(usersContext);
  const { isVisible, setIsVisible } = React.useContext(isVisibleContext);
  const { setCurrentUser } = React.useContext(currentUserDataContext);
  const [loading, setLoading] = useState(false);

  const { setUsers } = React.useContext(usersContext);

  useEffect(() => {
    async function retrieveUsers() {
      const data = await getUsers();
      setUsers(data);
    }
    setLoading(true);
    setTimeout(() => {
      retrieveUsers();
      setLoading(false);
    }, 1000);
  }, []);

  const handleVisibleChange = (user: IUsersResponse) => {
    setCurrentUser(user);
    setIsVisible(!isVisible);
  };

  const renderBody = () => {
    return (
      users &&
      users.map((user, index) => (
        <tr key={index}>
          <td># {index + 1}</td>
          <td>{user.name}</td>
          <td>{user._id}</td>
          <td>{user.department}</td>
          <td>{user.email}</td>
          <td>
            <FaRegEdit onClick={() => handleVisibleChange(user)} size={18} />
          </td>
        </tr>
      ))
    );
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={style.tableStyle}>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>ID</th>
                <th>Department</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            {renderBody()}
          </table>
        </div>
      )}
      {/* {renderBody()} */}
    </>
  );
}

export default DataContainerRenderBody;
