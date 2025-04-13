import styles from "./art-tools.module.css";

const Procreate = () => {
  return (
    <main className={styles.container}>
        <div className={styles.procreateIcon} />
        <div className={styles.textContainer}>   
          <h1 className={styles.title}>Procreate</h1>
          <ul className={styles.list}>
            <li className={styles.listItem}>A wide selection of different brushes and customization options</li>
            <li className={styles.listItem}>Intuitive interface allow for ease of use</li>
            <li className={styles.listItem}>Supports animations through the Procreate Dreams extension allowing for frame by frame animations</li>
          </ul>

          <a className={styles.button} href="https://procreate.com/" target="_blank">
            Learn More!
          </a>
      </div> 
    </main>
  )
}

export default Procreate