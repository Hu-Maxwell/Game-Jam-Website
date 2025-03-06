import PropTypes from "prop-types";

import styles from "./back-submit-button.module.css" 

const BackSubmitButton = ({ onQuestionChange, questionIndex, questionLength }) => {
    const updateQuestionIndex = (increment) => {

        let newIndex = questionIndex; 

        // can this be simplified? 
        if (increment == -1) {
            if (questionIndex <= 0) {
                return; 
            }
            newIndex = newIndex - 1; 
        } else { 
            if (questionIndex >= questionLength - 1) {
                return; 
            }
            newIndex = newIndex + 1; 
        }

        onQuestionChange(newIndex); 
    }

    // TODO: have backButton be not visible when questionIndex <= 0 
    const backButtonVisibility = true; 

    // TODO: have nextButtonText change to "Submit" depending on whether or not it's the last 
    const nextButtonText = "Next"; 

    // AVOID THIS:
        // onClick={updateQuestionIndex(-1)}
            // this will set onClick's value to the return value of updateQuestionIndex
            // passes the function call
    // do this instead
        // onClick={() => updateQuestionIndex(-1)}
            // passes it as a function reference
            // anonymous functions are basically function references 
    
    return (
        <div>
            {/* short circuit evaluation */}
            {backButtonVisibility && (
                <button className={styles.backButton} onClick={() => updateQuestionIndex(-1)}>Back</button>)
            }

            <button className={styles.nextButton} onClick={() => updateQuestionIndex(1)}>{nextButtonText}</button>
        </div>
    );
};


// prop-types are best practice and ESLint requires it 
BackSubmitButton.propTypes = {
    onQuestionChange: PropTypes.func.isRequired,
    questionIndex: PropTypes.number.isRequired, 
    questionLength: PropTypes.number.isRequired, 
};


export default BackSubmitButton; 