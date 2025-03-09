import styles from "./contact.module.css";
import greyRect from "@assets/dark-pixel-rect-box.png";

const Contact = () => {
    return (
        <div className={styles.contactContainer}>
            <h1 className={styles.contactTitle}>ABOUT GAME JAM</h1>
            <img src={greyRect} alt="background rectangle" className={styles.contactImage} />
        </div>  
    );
};

export default Contact;
