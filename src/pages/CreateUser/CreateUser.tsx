import React from "react";
import OptionContainer from "../../components/optionContainer/OptionContainer";
import UserDropdownContainer from "../../components/userDropdownContainer/LogoutButton";
import style from "./CreateUser.module.css";
import CreateUserContainer from "../../components/createUserContainer/CreateUserContainer";
function CreateUser() {
  return (
    <div className={style.mainContainer}>
      <OptionContainer />
      <div className={style.createUserMainContainer}>
        <div className={style.createUserInfoContainer}>
          <CreateUserContainer />
          <UserDropdownContainer />
        </div>
      </div>
    </div>
  );
}

export default CreateUser;
