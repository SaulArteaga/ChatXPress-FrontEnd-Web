import style from "./UserDataContainer.module.css";
import DataContainerRenderBody from "../dataContainerBody/DataContainerRenderBody";

function UserDataContainer() {
  return (
    <div className={style.userDataContainer}>
      <DataContainerRenderBody />
    </div>
  );
}

export default UserDataContainer;
