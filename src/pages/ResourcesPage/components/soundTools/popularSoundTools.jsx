import styles from "./popular-sound-tools.module.css";
import Audacity from "@assets/audacity.png";
import Bfxr from "@assets/bfxr.png";
import Chiptone from "@assets/chiptone.png";

const PopularSoundTools = () => {
    return (
        <section className={styles.soundToolsContainer}>
            <span className={styles.title}>Popular Sound Tools</span>
            <div className={styles.soundToolsSectionContainer}>
                <div className={styles.soundToolsContainerItem}>
                    <img className={styles.soundToolsIcon} src={Chiptone} />
                    <div className={styles.soundToolsDescContainer}>
                        <span className={styles.soundToolsTitle}>ChipTone</span>
                        <span className={styles.soundToolsDesc}>Chiptone is a popular tool because of reason 1</span>
                        <span className={styles.soundToolsDesc}>Chiptone offers these &quot;functionality&quot;</span>
                        <span className={styles.soundToolsDesc}>You may want to use Chiptone because of reason 1</span>
                    </div>
                </div>
                <div className={styles.soundToolsContainerItem}>
                    <img className={styles.soundToolsIcon} src={Audacity} />
                    <div className={styles.soundToolsDescContainer}>
                        <span className={styles.soundToolsTitle}>Audacity</span>
                        <span className={styles.soundToolsDesc}>Audacity is a popular tool because of reason 1</span>
                        <span className={styles.soundToolsDesc}>Audacity offers these &quot;functionality&quot;</span>
                        <span className={styles.soundToolsDesc}>You may want to use Audacity because of reason 1</span>
                    </div>
                </div>
                <div className={styles.soundToolsContainerItem}>
                    <img className={styles.soundToolsIcon} src={Bfxr} />
                    <div className={styles.soundToolsDescContainer}>
                        <span className={styles.soundToolsTitle}>Bfxr</span>
                        <span className={styles.soundToolsDesc}>Bfxr is a popular tool because of reason 1</span>
                        <span className={styles.soundToolsDesc}>Bfxr offers these &quot;functionality&quot;</span>
                        <span className={styles.soundToolsDesc}>You may want to use Bfxr because of reason 1</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopularSoundTools;
