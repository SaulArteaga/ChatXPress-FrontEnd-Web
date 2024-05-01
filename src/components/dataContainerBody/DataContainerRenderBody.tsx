import React from "react";
import { usersContext } from "../../contexts/usersContext";

function DataContainerRenderBody() {
  const { users } = React.useContext(usersContext);

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
              <button>P</button>
            </td>
          </tr>
        ))}
      </table>
    )
  );
}

export default DataContainerRenderBody;
