import styles from './game-engines.module.css';

const Unity = () => {
  return (
    <main className={styles.container}>
      <div className={styles.unity_icon} />
      <div className={styles.text_container}>
        <h1 className={styles.title}>Unity Game Engine</h1>
        <ul className={styles.list}>
          <li className={styles.list_item}>A large ecosystem of Assets Ready to be used</li>
          <li className={styles.list_item}>Support for Terrain modeling and advanced Rendering Techniques</li>
          <li className={styles.list_item}>User Friendly interface</li>
        </ul>

        <a className={styles.godot_button} href="https://unity.com/products/unity-engine#engine-features" target="_blank" rel="noreferrer">
          Learn More!
        </a>
      </div>
    </main>
  );
};

export default Unity;
