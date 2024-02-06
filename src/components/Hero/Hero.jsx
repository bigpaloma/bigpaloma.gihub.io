import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Halli Hallo!</h1>
        <p className={styles.description}>
          Mein Name ist Furkan Sengün.
          Ich bin ein angehender Web Entwickler mit einer Leidenschaft für
          Herausforderungen.
        </p>
        <a href="#contact" className={styles.contactBtn}>
          Kontakieren sie mich!
        </a>
      </div>
      <img
        src={getImageUrl("hero/pcHero.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
