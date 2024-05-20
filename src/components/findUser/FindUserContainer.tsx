import { useState } from "react";
import style from "./FindUserContainer.module.css";
import { getUserByEmail } from "../../services/users.services";
import React from "react";
import { usersContext } from "../../contexts/usersContext";

/**
 * This function checks the email and sets up the array of users with
 * only the user with the email. If it is not in the db, it sets up an empty array.
 * @returns The container to find the user
 */
function FindUserContainer() {
  const [email, setEmail] = useState("");
  const { setUsers } = React.useContext(usersContext);

  /**
   * This function finds the user by the given email and stores it in the
   * context users, then sets the email to empty string.
   */
  const findUser = async () => {
    const data = await getUserByEmail(email);
    console.log(data);
    setUsers(data);
    setEmail("");
  };

  const handleInputChange = (e: any) => {
    setEmail(e.target.value);
  };

  return (
    <div className={style.findUserContainer}>
      <div className={style.findUserSubContainers}>
        <div className={style.findUser}>
          <h1>Find Users</h1>
        </div>
        <div className={style.subContainer}>
          <div className={style.findInputContainer}>
            <input
              className={style.customInput}
              placeholder="EMAIL"
              value={email}
              onChange={handleInputChange}
            ></input>
            <button className={style.buttonStyle} onClick={() => findUser()}>
              FIND
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindUserContainer;
