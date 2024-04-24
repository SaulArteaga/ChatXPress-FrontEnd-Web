import { useState } from "react";
import style from "./Login.module.css";
import { adminUser } from "../../data/data";
import { useNavigate } from "react-router-dom";

/**
 * This function creates a Login page with two basic inputs
 * and two buttons.
 * @returns The Login page
 */
function Login() {
  /**
   * We made an empty user to use in the useState
   */
  const initUser = {
    username: "",
    password: "",
  };

  /**
   * The useState initialized with the empty user data
   */
  const [user, setuser] = useState(initUser);

  /**
   * We instantiate the useNavigate() to redirect to a specific
   * page when the code does certain things.
   */
  const navigate = useNavigate();

  /**
   * This function changes the useState content if the imputs
   * are changed.
   * @param e Input data
   */
  const handleInputChange = (e: any) => {
    setuser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * This function checks if a user is suitable to enter the
   * application. If it meets the specific parameters it is
   * redirected to the main page, if not it shows an alert with a message.
   */
  function checkLogin() {
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
    <div className={style.mainContainer}>
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
    </div>
  );
}

export default Login;
