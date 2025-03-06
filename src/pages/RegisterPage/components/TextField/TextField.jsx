import PropTypes from "prop-types";

import styles from "./text-field.module.css"

import speechBubble from "@assets/speechBubble.png";

const TextField = ({ question }) => {
    return (
        <div className={styles.speechBubbleContainer}> 
            <img className={styles.speechBubble} src={speechBubble} alt="speech bubble" /> 

            <div className={styles.textFieldContainer}>
                <p className={styles.textField }>{question}</p>
            </div>
        </div> 
    );
};

TextField.propTypes = {
    question: PropTypes.string.isRequired,
};

export default TextField; 