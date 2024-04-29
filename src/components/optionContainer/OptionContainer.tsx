import style from "./OptionContainer.module.css";

function OptionContainer() {
  return (
    <div className={style.optionContainer}>
      <h2>ChatXpress </h2>
      <h2>admin dashboard</h2>
      <hr />
      <div className={style.buttonContainer}>
        <button className={style.buttonOption}>Principal Page</button>
        <button className={style.buttonOption}>Consult Users</button>
        <button className={style.buttonOption}>Create User</button>
      </div>
    </div>
  );
}

export default OptionContainer;
