import React from "react";
import styles from "./hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () =>{
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Abhirami</h1>
            <p className={styles.description}>I'm a Frontend Developer with 1.5 years of experience using React. Reach out if you'd like to learn more!
            </p>
            <a href="mailto:myemail@email.com" className={styles.contactBtn}>
            Contact Me
            </a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of her" className={styles.heroImage} />
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
}