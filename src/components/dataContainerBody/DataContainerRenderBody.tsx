import React, { useEffect } from "react";
import { getUsers } from "../../services/users.services";
import { usersContext } from "../../contexts/usersContext";

function DataContainerRenderBody() {
  const { users, setUsers } = React.useContext(usersContext);

  useEffect(() => {
    async function retrieveUsers() {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {}
    }
    retrieveUsers();
  }, [setUsers, users]);

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
        {users.map((user) => (
          <tr>
            <td>#1</td>
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
