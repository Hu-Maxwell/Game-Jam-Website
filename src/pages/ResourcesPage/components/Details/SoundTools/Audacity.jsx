import styles from './sound-tools.module.css';

const Audacity = () => {
  return (
    <main className={styles.container}>
      <div className={styles.audacity_icon} />
      <div className={styles.text_container}>
        <h1 className={styles.title}>Audacity Sound Tool</h1>
        <ul className={styles.list}>
          <li className={styles.list_item}>Support for multi-track editing</li>
          <li className={styles.list_item}>Supports the use of third party plugins</li>
          <li className={styles.list_item}>Support for a wide range of audio formats such as WAV, AIFF, MP3, FLAC, and Ogg Vorbis</li>
        </ul>
        
        <a className={styles.button} href="https://www.audacityteam.org/" target="_blank" rel="noreferrer">
          Learn More!
        </a>
      </div>
    </main>
  );
};

export default Audacity;
