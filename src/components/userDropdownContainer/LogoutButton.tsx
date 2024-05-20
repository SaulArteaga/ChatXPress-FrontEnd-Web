import React from "react";
import style from "./LogoutButton.module.css";
import { IoMdExit } from "react-icons/io";
import { useNavigate } from "react-router";

/**
 * This function creates a button for logout, then
 * if you press it, it erases the token and
 * sends you to the login page
 * @returns A button for logout
 */
function LogoutButtonComponent() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("JWT");
    navigate("/");
  };

  return (
    <div className={style.logoutDropdown}>
      <div className={style.logoutUser} onClick={handleLogout}>
        <p>Exit</p> <IoMdExit size={30} />
      </div>
    </div>
  );
}

export default LogoutButtonComponent;
