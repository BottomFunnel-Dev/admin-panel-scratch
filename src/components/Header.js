import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <img src="Images/" alt=""/>
          <p style={{color:"white" , margin:0}}>Welcome to the Bottom Funnel Admin panel</p>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
