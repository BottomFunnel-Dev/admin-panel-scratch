import React from "react";
import "./Header.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <p style={{ color: "white", margin: 0, padding:"10px 0" }}>
            Welcome to the Bottom Funnel Admin panel
          </p>
          {/* <Button className="">Logout</Button> */}
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
