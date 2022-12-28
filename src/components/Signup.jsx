import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./login.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./FirebaseConfigs/FirebaseConfigs";
export const Signup = () => {
  const history = useNavigate();
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const signup = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      history("/login");
    } catch (error) {
      console.log(error.message);
    }
  };



  return (
    <div className="login-form">
      <h3>Sign Up</h3>
      <div className="loginForm">
        <input
          className="inputs_class"
          type="text"
          placeholder="Enter Email"
          onChange={(e) => setRegisterEmail(e.target.value)}
        />
        <input
          className="inputs_class"
          type="password"
          placeholder="Enter password"
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <button className="button_class" onClick={signup}>
          Sign Up
        </button>
      </div>
    </div>
  );
};
