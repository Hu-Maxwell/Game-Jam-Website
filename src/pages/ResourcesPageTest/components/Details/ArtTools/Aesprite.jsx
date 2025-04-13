import styles from "./art-tools.module.css";

const Aesprite = () => {
  return (
    <main className={styles.container}>
      <div className={styles.aespriteIcon} />
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Aesprite</h1>
        <ul className={styles.list}>
          <li className={styles.listItem}>Features such as Onion Skin and Playback make animation easier</li>
          <li className={styles.listItem}>Optimized for Pixel Art </li>
          <li className={styles.listItem}>Support for conversion of pixel art to other formats like PNG, GIF, etc through the command line</li>
        </ul>

        <a className="button" href="http://aseprite.org/" target="_blank">
          Learn More!
        </a>
      </div> 
    </main>
  )
};

export default Aesprite;