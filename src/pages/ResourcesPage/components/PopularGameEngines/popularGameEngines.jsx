import styles from "./populargameengines.module.css";
import UnityIcon from "@assets/unity.png";
import GodotIcon from "@assets/godot.png";

const PopularGameEngines = () => {
    return (
        <section className={styles.container}>
            <span className={styles.title}>Popular Game Engines!</span>
            <div className={styles.gameEngineContainer}>
                <img className={styles.gameEngineIcon} src={UnityIcon} />
                <div className={styles.gameEngineDescContainer}>
                    <span className={styles.gameEngineTitle}>Unity Engine</span>
                    <span className={styles.gameEngineReason}>The Unity Game Engine is popular because of reason 1</span>
                    <span className={styles.gameEngineReason}>The Unity Game Engine is popular because of reason 2</span>
                    <span className={styles.gameEngineReason}>The Unity Game Engine is popular because of reason 3</span>
                    <span className={styles.gameEngineReason}>The Unity Game Engine is popular because of reason 4</span>
                </div>
            </div>
            <div className={styles.gameEngineContainer}>
                <img className={styles.gameEngineIcon} src={GodotIcon} />
                <div className={styles.gameEngineDescContainer}>
                    <span className={styles.gameEngineTitle}>Godot Engine</span>
                    <span className={styles.gameEngineReason}>The Godot Game Engine is popular because of reason 1</span>
                    <span className={styles.gameEngineReason}>The Godot Game Engine is popular because of reason 2</span>
                    <span className={styles.gameEngineReason}>The Godot Game Engine is popular because of reason 3</span>
                    <span className={styles.gameEngineReason}>The Godot Game Engine is popular because of reason 4</span>
                </div>
            </div>
        </section>
    );
};

export default PopularGameEngines;
