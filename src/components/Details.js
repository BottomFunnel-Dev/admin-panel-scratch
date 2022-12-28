import React, { useEffect, useState } from "react";
import "./details.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./details.css";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { RiArrowDropDownLine } from "react-icons/ri";

const Details = () => {
  const [logindata, setLoginData] = useState([]);
  const [expand, setexpand] = useState(false);

  const handledrop = () => {
    expand ? setexpand(false) : setexpand(true);
  };

  const history = useNavigate();

  const [show, setShow] = useState(false);

  var todayDate = new Date().toISOString().slice(0, 10);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Birthday = () => {
    const getuser = localStorage.getItem("user_login");
    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);

      setLoginData(user);

      const userbirth = logindata.map((el, k) => {
        return el.date === todayDate;
      });

      if (userbirth) {
        setTimeout(() => {
          console.log("ok");
          handleShow();
        }, 3000);
      }
    }
  };

  const userlogout = () => {
    localStorage.removeItem("user_login");
    history("/");
  };

  useEffect(() => {
    Birthday();
  }, []);

  return (
    <>
      {logindata.length === 0 ? (
        "errror"
      ) : (
        <div>
          <div className="logout-button">
            <button onClick={userlogout}>Logout</button>
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

            <div className="sidenaveItem">
              ERP Solutions drop <RiArrowDropDownLine />
            </div>
            <div className="sidenaveItem">API Sourcing and </div>
            <div className="sidenaveItem">Dashboard</div>
            <div className="sidenaveItem">Dashboard</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
