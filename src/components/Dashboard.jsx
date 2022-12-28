import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./details.css";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { RiArrowDropDownLine } from "react-icons/ri";
import { signOut } from "firebase/auth";
import { auth } from "./FirebaseConfigs/FirebaseConfigs";

export const Dashboard = () => {
  const [expand, setexpand] = useState(false);

  const handledrop = () => {
    expand ? setexpand(false) : setexpand(true);
  };

  const history = useNavigate();

  const logout = async () => {
    await signOut(auth);
    history("/");
  };

  return (
    <div>
      <div className="logout-button">
        <button onClick={logout}>Logout</button>
      </div>
      <div className="sidenav">
        <div className="sidenaveItem">Dashboard</div>
        <div className="sidenaveItem innerside" onClick={handledrop}>
          <p>Modules</p>
          <div className="dropImage">
            <img src="Images/down.png" alt="" />
          </div>
        </div>
        {expand && (
          <div className="modules">
            <div className="sidenaveItem">Module 1</div>
            <div className="sidenaveItem">Module 2</div>
          </div>
        )}

<div className="sidenaveItem innerside" >
          <p>ERP</p>
          <div className="dropImage">
            <img src="Images/down.png" alt="" />
          </div>
        </div>
        <div className="sidenaveItem">API Sourcing and </div>
        <div className="sidenaveItem">Dashboard</div>
        <div className="sidenaveItem">Dashboard</div>
      </div>
    </div>
  );
};
