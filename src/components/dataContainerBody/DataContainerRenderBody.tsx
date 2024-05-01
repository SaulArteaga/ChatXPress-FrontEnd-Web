import React, { useEffect, useState } from "react";
import { IUsersResponse } from "../../interfaces/IUsersResponse";
import { getUsers } from "../../services/users.services";

function DataContainerRenderBody() {
  const [users, setusers] = useState<IUsersResponse[]>([]);

  useEffect(() => {
    async function retrieveUsers() {
      try {
        const data = await getUsers();
        setusers(data);
      } catch (error) {}
    }
    retrieveUsers();
  }, []);

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
