import styles from "./schedule-page.module.css";

import ThreeScene from "./ThreeScene/ThreeScene";
import NavBar from "@/components/NavBar/NavBar";

const SchedulePage = () => {
    return (
      <>
        <div className={styles.navBar}>
          <NavBar />
        </div>

        <div className="threeContainer">
          <ThreeScene className="threeScene"/>
        </div>
      </>
    );
};

export default SchedulePage;