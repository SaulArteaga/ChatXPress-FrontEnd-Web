import { useState } from "react";
import style from "./Login.module.css";
import { adminUser } from "../../data/data";
import { useNavigate } from "react-router-dom";

function Login() {
  const initUser = {
    username: "",
    password: "",
  };

  const [user, setuser] = useState(initUser);

  const navigate = useNavigate();

  const handleInputChange = (e: any) => {
    setuser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  function checkLogin() {
    console.log(user.username);
    console.log(user.password);
    if (
      user.username === adminUser.name &&
      user.password === adminUser.password
    ) {
      setuser(initUser);
      navigate("/home");
    } else {
      window.alert("Usuario incorrecto");
    }
  }

  return (
    <div>
      <h1>Welcome!!</h1>
      <h3>Introduce your account</h3>
      <div className={style.inputs}>
        <input
          type="text"
          id="username"
          name="username"
          value={user.username}
          onChange={handleInputChange}
          placeholder="username"
        />
        <input
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={handleInputChange}
          placeholder="password"
        />
      </div>
      <div className={style.buttons}>
        <button className={style.button1} onClick={checkLogin}>
          Log In
        </button>
        <button className={style.button2} onClick={() => setuser(initUser)}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Login;
