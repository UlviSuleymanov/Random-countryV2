import React from 'react';
import styles from './footer.module.css';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.menu}>
        <li> Contacts :</li>
        <li>
          <a href="https://github.com/UlviSuleymanov">GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/%C3%BClvi-s%C3%BCleymanov-9a96a5247/">Linkedin</a>
        </li>
        <li>
          <a href="https://t.me/UlviSuleymanov">Telegram</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
