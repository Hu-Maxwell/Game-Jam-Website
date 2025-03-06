import styles from "./game-jam-workshops.module.css";
import Hammer from "@assets/resources/hammer.png"

const GameJamWorkshops = ({ DisplayProps }) => {
    const {
        setDisplayWorkshopInfo,
        setGameEngineInfo,
        setSoundToolsInfo,
        setArtToolsInfo
    } = DisplayProps

    function handleClick() {
        setDisplayWorkshopInfo(true)
        setGameEngineInfo(false)
        setSoundToolsInfo(false)
        setArtToolsInfo(false)
    }

    return (
        <section className={styles.container}>
             <div className={styles.titlecontainer}>
                <img className={styles.hammer} src={Hammer}/> 
                <span className={styles.title}>Workshops</span>
                <img className={styles.hammertwo} src={Hammer}/> 
            </div>
            <div className={styles.workshopSectionContainer}>
                <div className={styles.workshopContainer}>  
                    <button className={styles.workshopIcon} onClick={handleClick}/>
                    <div className={styles.workshopDescContainer}>
                        <span className={styles.workshopTitle}>Workshop Name</span>
                        <span className={styles.workshopDesc}> Important Workshop Fact 1</span>
                        <span className={styles.workshopDesc}> Important Workshop Fact 2</span>
                        <span className={styles.workshopDesc}> Important Workshop Fact 3</span>
                    </div>
                </div>
                <div className={styles.workshopContainer}>
                    <button className={styles.workshopIcon} onClick={handleClick}/>
                    <div className={styles.workshopDescContainer}>
                        <span className={styles.workshopTitle}>Workshop Name</span>
                        <span className={styles.workshopDesc}> Important Workshop Fact 1</span>
                        <span className={styles.workshopDesc}> Important Workshop Fact 2</span>
                        <span className={styles.workshopDesc}> Important Workshop Fact 3</span>
                    </div>
                </div>
                <div className={styles.workshopContainer}>
                <button className={styles.workshopIcon} onClick={handleClick}/>
                    <div className={styles.workshopDescContainer}>
                        <span className={styles.workshopTitle}>Workshop Name</span>
                        <span className={styles.workshopDesc}> Important Workshop Fact 1</span>
                        <span className={styles.workshopDesc}> Important Workshop Fact 2</span>
                        <span className={styles.workshopDesc}> Important Workshop Fact 3</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GameJamWorkshops;
