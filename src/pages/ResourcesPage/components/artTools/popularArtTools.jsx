import Aesprite from "@assets/resourcespage/aesprite.png";
import Procreate from "@assets/resourcespage/procreate.png";
import styles from "./populararttools.module.css";
import Paintbrush from "@assets/resourcespage/paintbrush.png"

const PopularArtTools = ({ DisplayProps }) => {
    const {
        setDisplayWorkshopInfo,
        setGameEngineInfo,
        setSoundToolsInfo,
        setArtToolsInfo
    } = DisplayProps

    function handleClick() {
        setDisplayWorkshopInfo(false)
        setGameEngineInfo(false)
        setSoundToolsInfo(false)
        setArtToolsInfo(true)
    }

    return (
        <section className={styles.container}>
            <div className={styles.titlecontainer}>
                <img className={styles.paintbrush} src={Paintbrush}/> 
                <span className={styles.title}>Popular Art Tools!</span>
                <img className={styles.paintbrushtwo} src={Paintbrush}/> 
            </div>
            <button onClick={handleClick} className={styles.artToolContainer}>
                <img className={styles.artToolIcon} src={Aesprite} />
                <div className={styles.artToolDescContainer}>
                    <span className={styles.artToolTitle}>Aesprite</span>
                    <span className={styles.artToolReason}>Aesprite is a popular tool because of reason 1</span>
                    <span className={styles.artToolReason}>Aesprite offers these &quot;functionality&quot;</span>
                    <span className={styles.artToolReason}>You may want to use Aesprite because of reason 1</span>
                    <span className={styles.artToolReason}>You may want to use Aesprite because of reason 2</span>
                </div>
            </button>
            <button onClick={handleClick} className={styles.artToolContainer}>
                <img className={styles.artToolIcon} src={Procreate} />
                <div className={styles.artToolDescContainer}>
                    <span className={styles.artToolTitle}>Procreate</span>
                    <span className={styles.artToolReason}>Procreate is a popular tool because of reason 1</span>
                    <span className={styles.artToolReason}>Procreate offers these &quot;functionality&quot;</span>
                    <span className={styles.artToolReason}>You may want to use Procreate because of reason 1</span>
                    <span className={styles.artToolReason}>You may want to use Procreate because of reason 2</span>
                </div>
            </button>
        </section>
    );
};

export default PopularArtTools;
