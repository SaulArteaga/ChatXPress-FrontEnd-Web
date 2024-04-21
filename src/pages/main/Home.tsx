import React from "react";
import style from "./Home.module.css";

function Home() {
  return (
    <div className={style.mainContainer}>
      <div className={style.optionContainer}>
        <h2>ChatXpress </h2>
        <h2>admin dashboard</h2>
        <hr />
        <div className={style.buttonContainer}>
          <button className={style.buttonOption}>Principal Page</button>
          <button className={style.buttonOption}>Consult Users</button>
          <button className={style.buttonOption}>Create User</button>
        </div>
      </div>
      <div className={style.userMainContainer}>
        <div className={style.userInfoContainer}>ALgo</div>
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
      </div>
    </div>
  );
}

export default Home;
