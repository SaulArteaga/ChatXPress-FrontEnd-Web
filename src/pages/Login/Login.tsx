import style from "./Login.module.css";

function Login() {
  return (
    <div>
      <h1>Welcome!!</h1>
      <h3>Introduce your account</h3>
      <div className={style.inputs}>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="username"
        />
      </div>
      <div className={style.buttons}>
        <button className={style.button1}>Log In</button>
        <button className={style.button2}>Cancel</button>
      </div>
    </div>
  );
}

export default Login;
