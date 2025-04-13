import styles from "./contact.module.css";
import textSmallScreen from "@assets/text-s.png";
import textLargeScreen from "@assets/text-l.png";

import FAQ from './../FAQ/FAQ';

const Contact = () => {
    return (
        <div className={styles.contactContainer}>
            <h1 className={styles.contactTitle}>about</h1>
            <div className={styles.textContainer}>

            <picture>
              <source media="(max-width: 900px)" srcSet={textSmallScreen} />
              <img src={textLargeScreen} alt="background rectangle" className={styles.contactImage} />
            </picture>

            <FAQ />
          </div>
        </div>  
    );
};

export default Contact;
