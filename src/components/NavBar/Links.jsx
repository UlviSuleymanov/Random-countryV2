import React from 'react';
import styles from './navbar.module.css';
import { NavLink } from 'react-router-dom';

const Links = () => {
  return (
    <ul className={styles.menu}>
      <li>
        <NavLink className={styles.link} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={styles.link} to="/random-country">
          Random Country
        </NavLink>
      </li>
    </ul>
  );
};

export default Links;
