import React from "react";
import style from "./UserDataContainer.module.css";

function UserDataContainer() {
  return (
    <div className={style.userDataContainer}>
      <table>
        <tr>
          <th></th>
          <th>Name</th>
          <th>ID</th>
          <th>Department</th>
          <th>Creation Date</th>
        </tr>
        <tr>
          <td>#1</td>
          <td>Joselito Pérez Almenara</td>
          <td>123456789</td>
          <td>IT</td>
          <td>13/02/9999</td>
        </tr>
        <tr>
          <td>#2</td>
          <td>Alghien</td>
          <td>someones number</td>
          <td>some dep</td>
          <td>13/02/9999</td>
        </tr>
      </table>
    </div>
  );
}

export default UserDataContainer;
