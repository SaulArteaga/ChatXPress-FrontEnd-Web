import React from "react";
import style from "./Home.module.css";
import OptionContainer from "../../components/optionContainer/OptionContainer";
import UserInfoContainer from "../../components/userInfoContainer/UserInfoContainer";

/**
 * This function creates the main page with some mocked data
 * @returns The main page
 */
function Home() {
  return (
    <div className={style.mainContainer}>
      <OptionContainer />
      <div className={style.userMainContainer}>
        <UserInfoContainer />
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
