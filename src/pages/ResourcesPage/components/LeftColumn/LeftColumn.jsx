import styles from "./left-column.module.css";

import discordIcon from "@assets/discord.png";
import instagramIcon from "@assets/instagram.png";

const LeftColumn = () => {
    return (
        <div className={styles.leftColumn}>
            <div className={styles.boxLeft}>
                <div className={styles.imageContainer}>
                    <img className={styles.leftImagePlaceholder} src={discordIcon} alt="Discord"/>
                    <img className={styles.leftImagePlaceholder} src={instagramIcon} alt="Placeholder"/>
                </div>
                <span className={styles.leftTitle}>Placeholder title</span>
                <p className={styles.paragraph}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <hr className={styles.horizontalLine} />
        </div>
    );
};

export default LeftColumn;
