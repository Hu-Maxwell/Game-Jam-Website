import styles from "./question.module.css"; 

import TextField from "../TextField/TextField";
import InputField from "../InputField/InputField";
import SubmitButton from "../SubmitButton/SubmitButton";

import AnimatedScroll from "../AnimatedScroll/AnimatedScroll";

const Question = () => {
    return (
        <>
            <div className={styles.scrollContainer}> 
                <AnimatedScroll />

                <div className={styles.inputContainer}>
                    <InputField />
                </div>
            </div> 
        </> 
    );
}

export default Question;