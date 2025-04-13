import styles from './sound-tools.module.css';

const Fmod = () => {
  return (
    <main className={styles.container}>
      <div className={styles.fmod_icon} />
      <div className={styles.text_container}>
        <h1 className={styles.title}>Fmod Sound Tool</h1>
        <ul className={styles.list}>
          <li className={styles.fmod_list_item}>Simplifies the process of integrating audio into game engines such as Unity</li>
          <li className={styles.fmod_list_item}>Support for adaptive audio which allows for audio to change based on game conditions</li>
          <li className={styles.fmod_list_item}>Optimized for real time performance</li>
        </ul>
        
        <a className={styles.button} href="https://www.fmod.com/" target="_blank" rel="noreferrer">
          Learn More!
        </a>
      </div>
    </main>
  );
};

export default Fmod;
