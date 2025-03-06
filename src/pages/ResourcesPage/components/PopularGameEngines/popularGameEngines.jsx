import styles from "./populargameengines.module.css";

import UnityIcon from "@assets/resources/unity.png";
import GodotIcon from "@assets/resources/godot.png";
import Gear from "@assets/resources/gear.png"

const PopularGameEngines = ({ DisplayProps }) => {
    const {
        setDisplayWorkshopInfo,
        setGameEngineInfo,
        setSoundToolsInfo,
        setArtToolsInfo
    } = DisplayProps

    function handleClick() {
        setDisplayWorkshopInfo(false)
        setGameEngineInfo(true)
        setSoundToolsInfo(false)
        setArtToolsInfo(false)
    }

    return (
        <section className={styles.container}>
            <div className={styles.titlecontainer}>
                <img className={styles.gear} src={Gear}/> 
                <span className={styles.title}>Popular Game Engines!</span>
                <img className={styles.gear} src={Gear}/> 
            </div>
            <button onClick={handleClick} className={styles.gameEngineContainer}>
                <img className={styles.gameEngineIcon} src={UnityIcon} />
                <div className={styles.gameEngineDescContainer}>
                    <span className={styles.gameEngineTitle}>Unity Engine</span>
                    <span className={styles.gameEngineReason}>The Unity Game Engine is popular because of reason 1</span>
                    <span className={styles.gameEngineReason}>The Unity Game Engine is popular because of reason 2</span>
                    <span className={styles.gameEngineReason}>The Unity Game Engine is popular because of reason 3</span>
                    <span className={styles.gameEngineReason}>The Unity Game Engine is popular because of reason 4</span>
                </div>
            </button>
            <button onClick={handleClick} className={styles.gameEngineContainer}>
                <img className={styles.gameEngineIcon} src={GodotIcon} />
                <div className={styles.gameEngineDescContainer}>
                    <span className={styles.gameEngineTitle}>Godot Engine</span>
                    <span className={styles.gameEngineReason}>The Godot Game Engine is popular because of reason 1</span>
                    <span className={styles.gameEngineReason}>The Godot Game Engine is popular because of reason 2</span>
                    <span className={styles.gameEngineReason}>The Godot Game Engine is popular because of reason 3</span>
                    <span className={styles.gameEngineReason}>The Godot Game Engine is popular because of reason 4</span>
                </div>
            </button>
        </section>
    );
};

export default PopularGameEngines;
