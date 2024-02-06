import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Kontakt</h2>
        <p>Zögern sie nicht mich zu kontaktieren!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")}
            alt="Email icon" />
          <a href="mailto:senguenfurkan@gmail.com">senguenfurkan@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/phoneIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="tel:0788130799">+41 78 813 07 99</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/bigpaloma">github.com/bigpaloma</a>
        </li>
      </ul>
    </footer>
  );
};
