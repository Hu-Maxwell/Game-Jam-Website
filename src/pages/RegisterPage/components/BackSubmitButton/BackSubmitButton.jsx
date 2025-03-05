import styles from "./back-submit-button.module.css" 

const BackSubmitButton = () => {
    return (
        <div>
            <button className={styles.backButton}>Back</button>
            <button className={styles.nextButton}>Next</button>
        </div>
    );
};

export default BackSubmitButton; 