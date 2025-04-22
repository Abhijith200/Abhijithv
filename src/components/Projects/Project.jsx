import React from "react";
import styles from "./Project.module.css";
import projects from "../../data/projects.json";
import Projectcard from "./Projectcard";

const Project = () => {
    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                {
                    projects.map((project, id) => {
                        return (
                            <Projectcard key={id} project={project} />
                        );
                    })
                }
            </div>
        </section>
    )
};

export default Project;