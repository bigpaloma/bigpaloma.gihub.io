import React from "react";

import styles from "./Experience.module.css";
import projectStyles from "../Projects/ProjectCard.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import projects from "../../data/projects.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <h2 id="project" className={styles.title}>Projekte</h2>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}`}</h3>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                  <div style={{ marginTop: "20px" }}>
                    <ul className={projectStyles.skills}>
                      {historyItem.skills.map((skill, id) => {
                        return <li className={projectStyles.skill} key={id}>{skill}</li>;
                      })}
                    </ul>
                  </div>
                  <div className={projectStyles.links}>
                    <a href={historyItem.demo} className={projectStyles.link}>
                      Demo
                    </a>
                    <a href={historyItem.source} className={projectStyles.link}>
                      Source
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
