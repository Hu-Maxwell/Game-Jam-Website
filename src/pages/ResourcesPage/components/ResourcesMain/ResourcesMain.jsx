import LeftColumn from "./../LeftColumn/LeftColumn";
import RightColumn from "./../RightColumn/RightColumn";

import styles from "./resources-main.module.css";

const Resources = () => {
    return (
        <section className={styles.resourcesMain}>
            <h1 className={styles.resourcesTitle}>Resources</h1>
            <div className={styles.resourcesBody}>
                <LeftColumn />
                <RightColumn />
            </div>
        </section>
    );
};

export default Resources;
