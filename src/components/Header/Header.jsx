import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.nav}>
      <h4 className={styles.logo}>
        <NavLink to="/random-country">Random country</NavLink>
      </h4>
      <NavBar />
    </header>
  );
};

export default Header;
