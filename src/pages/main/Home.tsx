import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import style from "./Home.module.css";
import { LiaUserPlusSolid } from "react-icons/lia";
import { FaCommentDots } from "react-icons/fa6";
import { FaUser, FaUserCheck } from "react-icons/fa";

/**
 * This function creates the main page with some mocked data
 * @returns The main page
 */
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
          <div className={style.adminUserDropdown}>
            Admin user <IoMdArrowDropdown size={45} />
          </div>
        </div>
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
