import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './landingpage.module.css';

const LandingPage = () => {
  return (
    <section className={styles.wrapper}>
      <h3 className={styles.disclamer}>Welcome to Random Countries App</h3>
      <h4 className={styles.disclamer}>About this Application</h4>
      <p>
        I have used Rest countries API to get data from. With this data we randomly pick a country
        and display it on UI. you can check my other works on GitHub or through my Portfolio site.
        Enjoy!
      </p>
      <button className={styles.btn}>
        <NavLink to="/random-country">Get Started</NavLink>
      </button>
    </section>
  );
};

export default LandingPage;
