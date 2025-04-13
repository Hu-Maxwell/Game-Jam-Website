import styles from './sound-tools.module.css';

const Bfxr = () => {
  return (
    <main className={styles.container}>
      <div className={styles.bfxr_icon} />
      <div className={styles.text_container}>
        <h1 className={styles.title}>Bfxr Sound Tool</h1>
        <ul className={styles.list}>
          <li className={styles.list_item}>Support for generating random sound effects</li>
          <li className={styles.list_item}>Focus on 8 bit and retro inspired sounds</li>
          <li className={styles.list_item}>Customization options for controlling parameters such as attack, sustain, and release times</li>
        </ul>

        <a className={styles.button} href="https://www.bfxr.net/" target="_blank" rel="noreferrer">
          Learn More!
        </a>
      </div>
    </main>
  );
};

export default Bfxr;
