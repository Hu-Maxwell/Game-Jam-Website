import styles from "./scroll-input.module.css"; 

import AnimatedScroll from "../AnimatedScroll/AnimatedScroll";
import InputField from "../InputField/InputField";

const ScrollInput = () => {
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

export default ScrollInput;