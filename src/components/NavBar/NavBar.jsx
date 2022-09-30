import React from 'react';

import styles from './navbar.module.css';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

import Links from './Links';
import { AiFillCloseCircle } from 'react-icons/ai';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const hamburgerIcon = (
    <FiMenu
      onClick={() => {
        setOpen(!open);
      }}
      className={styles.hamburger}
    />
  );
  const closeIcon = (
    <AiFillCloseCircle
      onClick={() => {
        setOpen(!open);
      }}
      className={styles.hamburger}
    />
  );
  return (
    <nav className={styles.nav}>
      {open ? closeIcon : hamburgerIcon}
      {open && <Links />}
    </nav>
  );
};

export default NavBar;
