import styles from "./right-column.module.css";

import catTutor from "@assets/cat-1.jpg"

const RightColumn = () => {
    return (
        <div className={styles.rightColumn}>
            <span className={styles.mentorsTitle}>Mentors</span>
            <div className={styles.boxRight}>
                <img className={styles.imagePlaceholder} src={catTutor} alt="Mentor"/>
                <div className={styles.boxText}>
                    <span className={styles.boxTitle}>Placeholder mentor name</span>
                    <p>Some information about mentors: Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
            </div>
            <div className={styles.boxRight}>
                <img className={styles.imagePlaceholder} src={catTutor} alt="Mentor"/>
                <div className={styles.boxText}>
                    <span className={styles.boxTitle}>Placeholder mentor name</span>
                    <p>Some information about mentors: Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
            </div>
        </div>
    );
};

export default RightColumn;
