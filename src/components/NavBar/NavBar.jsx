import styles from "./navbar.module.css";

const NavBar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.websiteName}>
                Game Jam Website
            </div>
            <nav className={styles.navbar}>
                <a className={styles.navbutton} href="/">Home</a>
                <a className={styles.navbutton} href="/about">About</a>
                <a className={styles.navbutton} href="/contact">Contact</a>
                <a className={styles.navbutton} href="/schedule">Schedule</a>
                <a className={styles.navbutton} href="/resources">Resources</a>
                <a className={styles.navbutton} href="https://itch.io/jam/uc-merced-gdc-game-jam-2025" rel="noopener noreferrer">Itch.io</a>
                <a className={styles.navbutton} href="https://docs.google.com/forms/d/e/1FAIpQLScV5XxcHgJc_ZHQEq5q7YzskoiEoo5BLV_hGB2vhNicPs-QBg/viewform">Register</a>
            </nav>
        </header>
    );
};

export default NavBar;
