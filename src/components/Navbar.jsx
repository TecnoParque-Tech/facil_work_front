/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-undef */
import React from "react";
import "./../style/Navbar.css";
import BurguerButton from "./BurguerButton";

function Navbar() {
  return (
    <>
      <NavContainer>
        <h1>
          Facil <span>work</span>
        </h1>
        <div>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
        <BurguerButton />
      </NavContainer>
    </>
  );
}

export default Navbar;