import React from "react";
import style from "./FindUser.module.css";
import OptionContainer from "../../components/optionContainer/OptionContainer";
import UserDataContainer from "../../components/userDataContainer/UserDataContainer";
import UserDropdownContainer from "../../components/userDropdownContainer/LogoutButton";
import FindUserContainer from "../../components/findUser/FindUserContainer";
import UserModal from "../../components/userModal/UserModal";
import { isVisibleContext } from "../../contexts/isVisibleContext";

/**
 * This function creates the FindUser page with the needed modules.
 * @returns FindUser page
 */
function FindUser() {
  const { isVisible } = React.useContext(isVisibleContext);

  return (
    <div className={style.mainContainer}>
      {isVisible ? <UserModal /> : null}
      <OptionContainer />
      <div className={style.userMainContainer}>
        <div className={style.userInfoContainer}>
          <FindUserContainer />
          <UserDropdownContainer />
        </div>
        <UserDataContainer />
      </div>
    </div>
  );
}

export default FindUser;
