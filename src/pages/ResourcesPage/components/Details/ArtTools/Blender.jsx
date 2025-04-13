import styles from "./art-tools.module.css";

const Blender = () => {
  return (
    <main className={styles.container}>
      <div className={styles.blenderIcon} />
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Blender</h1>
        <ul className={styles.list}>
          <li className={styles.blenderListItem}>Excels at creating 3D game assets</li>
          <li className={styles.blenderListItem}>Allows for the creation of textures and meshes for 3D models</li>
          <li className={styles.blenderListItem}>Support for animating 3D models</li>
        </ul>

        <a className={styles.button} href="https://www.blender.org/" target="_blank">
          Learn More!
        </a>
      </div> 
    </main>
  )
};

export default Blender;