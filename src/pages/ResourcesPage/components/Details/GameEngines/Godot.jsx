import styles from './game-engines.module.css';

const Godot = () => {
  return (
    <main className={styles.container}>
      <div className={styles.godot_icon} />
      <div className={styles.text_container}>
        <h1 className={styles.title}>Godot Game Engine</h1>
        <ul className={styles.list}>
          <li className={styles.list_item}>Dedicated 2D engine makes Godot a great choice for 2D games</li>
          <li className={styles.list_item}>Lightweight and portable executable runs well on any machine</li>
          <li className={styles.list_item}>Dedicated Python-like Language GDScript makes programming easier</li>
        </ul>

        <a className={styles.godot_button} href="https://godotengine.org/features/" target="_blank" rel="noreferrer">
          Learn More!
        </a>
      </div>
    </main>
  )
}

export default Godot;