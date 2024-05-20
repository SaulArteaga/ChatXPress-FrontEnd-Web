import style from "./UserDataContainer.module.css";
import DataContainerRenderBody from "../dataContainerBody/DataContainerRenderBody";

/**
 * This function sets the data container with some styles.
 * @returns The formated data container body
 */
function UserDataContainer() {
  return (
    <div className={style.userDataContainer}>
      <DataContainerRenderBody />
    </div>
  );
}

export default UserDataContainer;
