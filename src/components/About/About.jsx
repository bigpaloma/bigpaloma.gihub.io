import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Über Mich</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("history/avatar.png")}
          alt="me in cartoon"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Entwickler</h3>
              <p>
                Erfahrung mit Responsive Design mit statischen wie auch dynamischen Webseiten
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Entwickler</h3>
              <p>
                Erstellen von REST APIs, CRUD Operations, Authorisierung so wie Authentifizierung und Datenbank Management
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Design Umsetzungen</h3>
              <p>
                Kommunikativ im Umgang nach der Suche von Lösungen im ganzen Team, sodass der Kunde immer zufrieden ist.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
