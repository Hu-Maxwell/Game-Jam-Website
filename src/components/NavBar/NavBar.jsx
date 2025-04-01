import styles from "./navbar.module.css";

const NavBar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.websiteName}>
                Game Jam Website
            </div>
            <nav className={styles.navbar}>
                <a className={styles.navButton} href="/">Home</a>
                <a className={styles.navButton} href="/about">About</a>
                <a className={styles.navButton} href="/contact">Contact</a>
                <a className={styles.navButton} href="/schedule">Schedule</a>
                <a className={styles.navButton} href="/resources">Resources</a>
                <a className={styles.navButton} href="https://itch.io/jam/uc-merced-gdc-game-jam-2025" rel="noopener noreferrer">Itch.io</a>
                <a className={styles.navButton} href="https://docs.google.com/forms/d/e/1FAIpQLScV5XxcHgJc_ZHQEq5q7YzskoiEoo5BLV_hGB2vhNicPs-QBg/viewform">Register</a>
            </nav>
        </header>
    );
};

export default NavBar;
