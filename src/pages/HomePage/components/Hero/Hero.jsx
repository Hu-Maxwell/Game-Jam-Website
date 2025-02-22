import styles from "./hero.module.css"

const Hero = () => {
    return (
        <section className={styles.hero}>
            <h1>MercedJam 2025</h1>
            <p>Starts in HH:MM:SS</p>
        </section>
    );
};

export default Hero;
