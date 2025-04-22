import React from "react";

import styles from "./about.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("assets/about/aboutImage.png")} 
                alt="me sitting with a laptop" 
                className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("assets/about/cursorIcon.png")}
                        alt="Cursor Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>I'm a frontend developer with experience in building responsive 
                                and optimized sites.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("assets/about/serverIcon.png")}
                        alt="Server Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>I have a experience developing fast and optimised back-end systems 
                                and APIs</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("assets/about/serverIcon.png")}
                        alt="UI Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>UI Designer</h3>
                            <p>I have designed multiple landing pages and have  
                                systems as well</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
};