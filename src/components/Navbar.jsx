/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./../style/Navbar.css";

function Navbar() {
  return (
    <>
      <h2>
        Facil <span>work</span>
      </h2>
      <div>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>
    </>
  );
}

export default Navbar;