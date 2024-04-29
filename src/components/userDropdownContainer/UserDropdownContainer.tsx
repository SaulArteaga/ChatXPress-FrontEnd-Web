import React from "react";
import style from "./UserDropdownContainer.module.css";
import { IoMdArrowDropdown } from "react-icons/io";

function UserDropdownComponent() {
  return (
    <div className={style.adminUserDropdown}>
      Admin user <IoMdArrowDropdown size={45} />
    </div>
  );
}

export default UserDropdownComponent;
