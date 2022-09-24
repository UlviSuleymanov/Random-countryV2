import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/random-country">Random Country</NavLink>
    </nav>
  );
};

export default NavBar;
