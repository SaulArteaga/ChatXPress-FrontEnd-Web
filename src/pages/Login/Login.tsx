import { useState } from "react";
import style from "./Login.module.css";
// import { adminUser } from "../../data/data";
import { useNavigate } from "react-router-dom";
import loginUser from "../../services/login.user.service";
import React from "react";
import { userLoggedContext } from "../../contexts/isUserLoggedContext";

/**
 * This function creates a Login page with two basic inputs
 * and two buttons.
 * @returns The Login page
 */
function Login() {
  const userData = React.useContext(userLoggedContext);

  /**
   * We made an empty user to use in the useState
   */
  const initUser = {
    email: "",
    password: "",
    nameRole: "user",
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
    const fetchData = async () => {
      console.log("Aqui");
      const data = await loginUser(user);
      console.log(data);

      if (data != null) {
        window.alert("Hola tonoto");
        setuser(initUser);
        userData.userIsLogged();
        userData.setUser(data.username);
        userData.setUserEmail(data.email);
        navigate("/home");
      } else {
        window.alert("Usuario incorrecto");
      }
    };
    fetchData();
  }

  return (
    <div className={style.mainContainer}>
      <div>
        <h1>Welcome!!</h1>
        <h3>Introduce your account</h3>
        <div className={style.inputs}>
          <input
            type="text"
            id="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            placeholder="email"
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
