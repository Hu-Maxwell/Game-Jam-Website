import styles from "./navbar.module.css";

const NavBar = () => {
    return (
        <header className={styles.header}>
          <div className={styles.websiteName}>
            <span>mercedjam </span>
            <span className={styles.glitchText}>2025</span>
          </div>
            <nav className={styles.navbar}>
                <a className={styles.navbutton} href="/">home</a>
                <a className={styles.navbutton} href="/about">about</a>
                <a className={styles.navbutton} href="/schedule">schedule</a>
                <a className={styles.navbutton} href="/resources">resources</a>
                <a className={styles.navbutton} href="https://itch.io/jam/uc-merced-gdc-game-jam-2025" rel="noopener noreferrer">itch.io</a>
                <a className={styles.navbutton} href="https://docs.google.com/forms/d/e/1FAIpQLScV5XxcHgJc_ZHQEq5q7YzskoiEoo5BLV_hGB2vhNicPs-QBg/viewform">register</a>
            </nav>
        </header>
    );
};

export default NavBar;
