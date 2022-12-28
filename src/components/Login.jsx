import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./FirebaseConfigs/FirebaseConfigs";

const Login = () => {
  const history = useNavigate();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      history("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="login-form">
      <h3>Log In</h3>
      <div className="loginForm">
        <input
          className="inputs_class"
          type="text"
          placeholder="Enter Email"
          onChange={(e) => setLoginEmail(e.target.value)}
        />
        <input
          className="inputs_class"
          type="password"
         placeholder="Enter Password"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button className="button_class" onClick={login}>
          Log In
        </button>
      </div>
    </div>
  );
};

export default Login;
