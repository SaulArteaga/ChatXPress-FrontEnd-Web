import React from "react";
import { usersContext } from "../../contexts/usersContext";
import { isVisibleContext } from "../../contexts/isVisibleContext";
import { IUsersResponse } from "../../interfaces/IUsersResponse";
import { currentUserDataContext } from "../../contexts/currentUserDataContext";

function DataContainerRenderBody() {
  const { users } = React.useContext(usersContext);
  const { isVisible, setIsVisible } = React.useContext(isVisibleContext);
  const { setCurrentUser } = React.useContext(currentUserDataContext);

  const handleVisibleChange = (user: IUsersResponse) => {
    setCurrentUser(user);
    setIsVisible(!isVisible);
  };

  return (
    users && (
      <table>
        <tr>
          <th></th>
          <th>Name</th>
          <th>ID</th>
          <th>Department</th>
          <th>Email</th>
          <th></th>
        </tr>
        {users.map((user, index) => (
          <tr>
            <td># {index + 1}</td>
            <td>{user.name}</td>
            <td>{user._id}</td>
            <td>{user.department}</td>
            <td>{user.email}</td>
            <td>
              <button onClick={() => handleVisibleChange(user)}>P</button>
            </td>
          </tr>
        ))}
      </table>
    )
  );
}

export default DataContainerRenderBody;
