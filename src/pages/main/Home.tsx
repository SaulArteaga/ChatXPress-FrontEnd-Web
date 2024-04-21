import React from "react";
import style from "./Home.module.css";

function Home() {
  return (
    <div className={style.mainContainer}>
      <div className={style.optionContainer}>
        <h2>ChatXpress </h2>
        <h2>admin dashboard</h2>
        <hr />
        <div className={style.buttonContainer}>
          <button>Principal Page</button>
          <button>Consult Users</button>
          <button>Create User</button>
        </div>
      </div>
      <div>
        <div>ALgo</div>
        <div>Algo</div>
      </div>
    </div>
  );
}

export default Home;
