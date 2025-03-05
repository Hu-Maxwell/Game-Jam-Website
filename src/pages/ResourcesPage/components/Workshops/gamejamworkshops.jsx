import styles from "./game-jam-workshops.module.css";

const GameJamWorkshops = () => {
    return (
        <section className={styles.container}>
            <span className={styles.title}>Workshops</span>
            <div className={styles.workshopSectionContainer}>
                <div className={styles.workshopContainer}>
                    <img className={styles.workshopIcon} />
                    <div className={styles.workshopDescContainer}>
                        <span className={styles.workshopTitle}>Workshop Name</span>
                        <span className={styles.workshopDesc}> Important Workshop Fact 1</span>
                        <span className={styles.workshopDesc}> Important Workshop Fact 2</span>
                        <span className={styles.workshopDesc}> Important Workshop Fact 3</span>
                    </div>
                </div>
                <div className={styles.workshopContainer}>
                    <img className={styles.workshopIcon} />
                    <div className={styles.workshopDescContainer}>
                        <span className={styles.workshopTitle}>Workshop Name</span>
                        <span className={styles.workshopDesc}> Important Workshop Fact 1</span>
                        <span className={styles.workshopDesc}> Important Workshop Fact 2</span>
                        <span className={styles.workshopDesc}> Important Workshop Fact 3</span>
                    </div>
                </div>
                <div className={styles.workshopContainer}>
                    <img className={styles.workshopIcon} />
                    <div className={styles.workshopDescContainer}>
                        <span className={styles.workshopTitle}>Workshop Name</span>
                        <span className={styles.workshopDesc}> Important Workshop Fact 1</span>
                        <span className={styles.workshopDesc}> Important Workshop Fact 2</span>
                        <span className={styles.workshopDesc}> Important Workshop Fact 3</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GameJamWorkshops;
