import React from "react";
import style from "./UserDropdownContainer.module.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { userLoggedContext } from "../../contexts/isUserLoggedContext";
import { useNavigate } from "react-router";

function UserDropdownComponent() {
  const navigate = useNavigate();
  const userData = React.useContext(userLoggedContext);

  const handleLogout = () => {
    localStorage.removeItem("JWT");
    navigate("/");
  };

  return (
    <div className={style.adminUserDropdown}>
      <div className={style.dropdown}>
        <div className={style.infoUser}>
          {userData.name} Logged <IoMdArrowDropdown size={45} />
        </div>
        <div className={style.content}>
          <div className={style.dropdownInfo} onClick={handleLogout}>
            Logout
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDropdownComponent;
