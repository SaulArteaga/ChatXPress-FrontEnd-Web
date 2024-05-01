import React, { useEffect } from "react";
import style from "./Home.module.css";
import OptionContainer from "../../components/optionContainer/OptionContainer";
import UserInfoContainer from "../../components/userInfoContainer/UserInfoContainer";
import UserDataContainer from "../../components/userDataContainer/UserDataContainer";
import UserDropdownContainer from "../../components/userDropdownContainer/UserDropdownContainer";
import { getUsers } from "../../services/users.services";
import { usersContext } from "../../contexts/usersContext";

/**
 * This function creates the main page with some mocked data
 * @returns The main page
 */
function Home() {
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
    <div className={style.mainContainer}>
      <OptionContainer />
      <div className={style.userMainContainer}>
        <div className={style.userInfoContainer}>
          <UserInfoContainer />
          <UserDropdownContainer />
        </div>
        <UserDataContainer />
      </div>
    </div>
  );
}

export default Home;
