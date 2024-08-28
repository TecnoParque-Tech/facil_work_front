/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Styled from 'styled-components';

function Navbar() {
  return (
    <>
      <NavContiner>
        <h2>
          Facil <span>work</span>
          </h2>
          <div>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
          </div>
      </NavContiner>
    </>
  );
}

export default Navbar;

const NavContiner = Styled.nav`
h2 {
color: white;
font-weight: 400;
span{
  font-weight: bold;
  }
}
  padding: .4rem ;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between; 

  a{
  color: white;
  text-decoration: none;
  margin-right: 1rem;
  }
`