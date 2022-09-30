import React from 'react';
import styles from './content.module.css';

const Content = () => {
  return (
    <div className={styles.content}>
      <h3 className={styles.content_disclaimer}>This project are made by Ulvi Suleymanov.</h3>
      <p className={styles.content_paragraph}>
        Initially i had built this project while i was learning Javascript. initial project can be
        found on my GitHub page. I decided to migrate this project to React, so i can test new
        technologies i have learnt so far.
      </p>
      <h4 className={styles.content_disclaimer}>Click Randomize button to start. Enjoy!</h4>
    </div>
  );
};

export default Content;
