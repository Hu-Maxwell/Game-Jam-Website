import { useState } from "react";

import GameJamWorkshops from "../Workshops/gamejamworkshops";
import PopularGameEngines from "../PopularGameEngines/popularGameEngines";
import PopularArtTools from "../artTools/popularArtTools";
import PopularSoundTools from "../soundTools/popularSoundTools";

import styles from "./resources-main.module.css";

import pixelTree from "@assets/resources/pixeltree2.png"
import logs from "@assets/resources/logs.png"
import test from "@assets/resources/test.png"

const ResourcesBody = () => {
    const [displayWorkshopInfo, setDisplayWorkshopInfo] = useState(false);
    const [displayGameEngineInfo, setGameEngineInfo] = useState(false);
    const [displaySoundToolsInfo, setSoundToolsInfo] = useState(false);
    const [displayArtToolsInfo, setArtToolsInfo] = useState(false);

    function handleExit() {
        setDisplayWorkshopInfo(false);
        setGameEngineInfo(false);
        setSoundToolsInfo(false);
        setArtToolsInfo(false);
    }

    const DisplayProps = {
        setDisplayWorkshopInfo,
        setGameEngineInfo,
        setSoundToolsInfo,
        setArtToolsInfo
    }

    return (
        <section className={styles.resourcesMain}>
            {displayWorkshopInfo ? (
                <div className={styles.infocontainer}>
                    <div className={styles.info}>

                    </div>
                    <button className={styles.button} onClick={handleExit}>X</button>
                </div>
            ) : displayGameEngineInfo ? (
                <div className={styles.infocontainer}>
                    <div className={styles.info}>

                    </div>
                    <button className={styles.button} onClick={handleExit}>X</button>
                </div>
            ) : displaySoundToolsInfo ? (
                <div className={styles.infocontainer}>
                    <div className={styles.info}>

                    </div>
                    <button className={styles.button} onClick={handleExit}>X</button>
                </div>
            ) :  displayArtToolsInfo && (
                <div className={styles.infocontainer}>
                    <div className={styles.info}>

                    </div>
                    <button className={styles.button} onClick={handleExit}>X</button>
                </div>
            )}
            <div className={styles.resourcesTitleContainer}>
                <img className={styles.logs} src={logs}/>
                <h1 className={styles.resourcesTitle}>Resources</h1>
                <img className={styles.logs} src={logs}/>
            </div>
            <div className={styles.bodyContainer}>
                <GameJamWorkshops DisplayProps={DisplayProps}/>
                <PopularGameEngines DisplayProps={DisplayProps}/>
            </div>
            <div className={styles.bodyContainer}>
                <PopularSoundTools DisplayProps={DisplayProps}/>
                <PopularArtTools DisplayProps={DisplayProps}/>
            </div>
            <div className={styles.resourcesFooter}>
                <img src={pixelTree} className={styles.img}/>
                <img src={pixelTree} className={styles.img}/>
            </div>
        </section>
    );
};

export default ResourcesBody;
