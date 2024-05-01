import { useNavigate } from "react-router-dom";
import style from "./OptionContainer.module.css";

function OptionContainer() {
  const navigate = useNavigate();

  return (
    <div className={style.optionContainer}>
      <h2>ChatXpress </h2>
      <h2>admin dashboard</h2>
      <hr />
      <div className={style.buttonContainer}>
        <button
          className={style.buttonOption}
          onClick={() => navigate("/home")}
        >
          Principal Page
        </button>
        <button
          className={style.buttonOption}
          onClick={() => navigate("/findUser")}
        >
          Consult Users
        </button>
        <button
          className={style.buttonOption}
          onClick={() => navigate("/createUser")}
        >
          Create User
        </button>
      </div>
    </div>
  );
}

export default OptionContainer;
