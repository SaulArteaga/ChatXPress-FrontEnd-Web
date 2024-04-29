import React from "react";
import style from "./Home.module.css";
import OptionContainer from "../../components/optionContainer/OptionContainer";
import UserInfoContainer from "../../components/userInfoContainer/UserInfoContainer";
import UserDataContainer from "../../components/userDataContainer/UserDataContainer";
import UserDropdownContainer from "../../components/userDropdownComponent/UserDropdownContainer";

/**
 * This function creates the main page with some mocked data
 * @returns The main page
 */
function Home() {
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
