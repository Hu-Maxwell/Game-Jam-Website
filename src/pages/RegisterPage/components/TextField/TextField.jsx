import styles from "./text-field.module.css"

import speechBubble from "@assets/speechBubble.png";

const TextField = () => {
    return (
        <div className={styles.speechBubbleContainer}> 
            <img className={styles.speechBubble} src={speechBubble} alt="speech bubble" /> 

            <div className={styles.textFieldContainer}>
                <p className={styles.textField }>Enter your name. </p>
            </div>
        </div> 
    );
};

export default TextField; 