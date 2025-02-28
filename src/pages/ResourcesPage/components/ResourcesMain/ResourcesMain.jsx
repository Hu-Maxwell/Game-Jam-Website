import styles from "./resources-main.module.css";

import pixelTree from "@assets/pixeltree2.png"

import GameJamWorkshops from "../Workshops/gamejamworkshops";
import PopularGameEngines from "../PopularGameEngines/popularGameEngines";
import PopularArtTools from "../artTools/popularArtTools";
import PopularSoundTools from "../soundTools/popularSoundTools";

const ResourcesBody = () => {
    return (
        <section className={styles.resourcesMain}>
            <h1 className={styles.resourcesTitle}>Resources</h1>
            <div className={styles.bodyContainer}>
                <GameJamWorkshops/>
                <PopularGameEngines />
            </div>
            <div className={styles.bodyContainer}>
                <PopularSoundTools />
                <PopularArtTools />
            </div>
            <div className="resourcesfooter">
                <img src={pixelTree} className={styles.img}/>
                <img src={pixelTree} className={styles.img}/>
            </div>
        </section>
    );
};

export default ResourcesBody;
