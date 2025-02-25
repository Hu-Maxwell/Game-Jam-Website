import Aesprite from "@assets/aesprite.png";
import Procreate from "@assets/procreate.png";
import styles from "./populararttools.module.css";

const PopularArtTools = () => {
    return (
        <section className={styles.container}>
            <span className={styles.title}>Popular Art Tools!</span>
            <div className={styles.artToolContainer}>
                <img className={styles.artToolIcon} src={Aesprite} />
                <div className={styles.artToolDescContainer}>
                    <span className={styles.artToolTitle}>Aesprite</span>
                    <span className={styles.artToolReason}>Aesprite is a popular tool because of reason 1</span>
                    <span className={styles.artToolReason}>Aesprite offers these &quot;functionality&quot;</span>
                    <span className={styles.artToolReason}>You may want to use Aesprite because of reason 1</span>
                    <span className={styles.artToolReason}>You may want to use Aesprite because of reason 2</span>
                </div>
            </div>
            <div className={styles.artToolContainer}>
                <img className={styles.artToolIcon} src={Procreate} />
                <div className={styles.artToolDescContainer}>
                    <span className={styles.artToolTitle}>Procreate</span>
                    <span className={styles.artToolReason}>Procreate is a popular tool because of reason 1</span>
                    <span className={styles.artToolReason}>Procreate offers these &quot;functionality&quot;</span>
                    <span className={styles.artToolReason}>You may want to use Procreate because of reason 1</span>
                    <span className={styles.artToolReason}>You may want to use Procreate because of reason 2</span>
                </div>
            </div>
        </section>
    );
};

export default PopularArtTools;
