import styles from "./hero.module.css"

const Hero = () => {
    return (
        <section className={styles.hero}>
            <h1>UC Merced GDC Game Jam 2025</h1>
            <p>Starts in HH:MM:SS</p>
        </section>
    );
};

export default Hero;
