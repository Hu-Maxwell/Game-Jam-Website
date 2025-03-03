import styles from "./question.module.css"; 

import AnimatedScroll from "../AnimatedScroll/AnimatedScroll";
import InputField from "../InputField/InputField";

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