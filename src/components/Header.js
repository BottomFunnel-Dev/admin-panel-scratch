import React from "react";
import "./Header.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar className="amdinMainNavParentDiv" bg="dark" variant="dark">
        <Container className="adminContainerMainDiv">
          <img src="Images/" alt=""/>
          <p style={{color:"white",}}>Welcome to the Bottom Funnel Admin panel</p>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
