import styles from "./location.module.css";

import locationImage from "@assets/white_square_1.png";

const Location = () => {
    return (
        <section className={styles.locationSection}>
            <h3 className={styles.header}>Jam Location</h3>
            <img src={locationImage} alt="Placeholder" width="400px" />
        </section>
    );
};

export default Location;
