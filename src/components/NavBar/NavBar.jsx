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
                <a className={styles.navButton}  target="_blank" rel="noopener noreferrer">Itch.io</a>
                <a className={styles.navButton} href="/register">Register</a>
            </nav>
        </header>
    );
};

export default NavBar;
