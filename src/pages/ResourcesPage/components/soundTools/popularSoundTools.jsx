import styles from "./popular-sound-tools.module.css";
import Audacity from "@assets/resources/audacity.png";
import Bfxr from "@assets/resources/bfxr.png";
import Chiptone from "@assets/resources/chiptone.png";
import Sound from "@assets/resources/sound.png"

const PopularSoundTools = ({ DisplayProps }) => {
    const {
        setDisplayWorkshopInfo,
        setGameEngineInfo,
        setSoundToolsInfo,
        setArtToolsInfo
    } = DisplayProps

    function handleClick() {
        setDisplayWorkshopInfo(false)
        setGameEngineInfo(false)
        setSoundToolsInfo(true)
        setArtToolsInfo(false)
    }

    return (
        <section className={styles.Container}>
            <div className={styles.titlecontainer}>
                <img className={styles.sound} src={Sound}/> 
                <span className={styles.title}>Popular Sound Tools</span>
                <img className={styles.soundtwo} src={Sound}/> 
            </div>
            <div className={styles.soundToolsSectionContainer}>
                <div className={styles.soundToolsContainer}>
                    <button className={styles.infobutton} onClick={handleClick}>
                        <img className={styles.soundToolsIcon} src={Chiptone} />
                    </button>   
                    <div className={styles.soundToolsDescContainer}>
                        <span className={styles.soundToolsTitle}>ChipTone</span>
                        <span className={styles.SoundToolsDesc}>Chiptone is a popular tool because of reason 1</span>
                        <span className={styles.SoundToolsDesc}>Chiptone offers these &quot;functionality&quot;</span>
                        <span className={styles.SoundToolsDesc}>You may want to use Chiptone because of reason 1</span>
                    </div>
                </div>
                <div className={styles.soundToolsContainer}>
                <button className={styles.infobutton} onClick={handleClick}>
                        <img className={styles.soundToolsIcon} src={Audacity} />
                    </button> 
                    <div className={styles.soundToolsDescContainer}>
                        <span className={styles.soundToolsTitle}>Audacity</span>
                        <span className={styles.SoundToolsDesc}>Audacity is a popular tool because of reason 1</span>
                        <span className={styles.SoundToolsDesc}>Audacity offers these &quot;functionality&quot;</span>
                        <span className={styles.SoundToolsDesc}>You may want to use Audacity because of reason 1</span>
                    </div>
                </div>
                <div className={styles.soundToolsContainer}>
                <button className={styles.infobutton} onClick={handleClick}>
                        <img className={styles.bfxricon} src={Bfxr} />
                    </button> 
                    <div className={styles.soundToolsDescContainer}>
                        <span className={styles.soundToolsTitle}>Bfxr</span>
                        <span className={styles.SoundToolsDesc}>Bfxr is a popular tool because of reason 1</span>
                        <span className={styles.SoundToolsDesc}>Bfxr offers these &quot;functionality&quot;</span>
                        <span className={styles.SoundToolsDesc}>You may want to use Bfxr because of reason 1</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopularSoundTools;
