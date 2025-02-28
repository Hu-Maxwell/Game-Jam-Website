import styles from "./contact-info.module.css";
import team from "@assets/white_square_1.png";

const ContactInfo = () => {
    return (
        <section className={styles.contactInfo}>
            <div className={styles.contactImages}>
               <img src={team} height="200px" width="200px" id={styles.contactImg1}>
               </img>
            </div>
            <div className={styles.contactText}>
                <p className="connect" id={styles.connect}>
                    To keep up to date with all the latest club news, follow our Twitter and Discord at XXX.
                </p>
            </div>
        </section>
    );
};

export default ContactInfo;
