import styles from "./loading-screen.module.css";

const LoadingScreen = () => {
  return (
    <div className={styles.loadingContainer}> 
      <div className={styles.loader}></div>
    </div>
  );
};

export default LoadingScreen;