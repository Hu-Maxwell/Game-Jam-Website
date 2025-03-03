import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
// change to @ later

import AnimatedCat from "./components/AnimatedCat/AnimatedCat";
import Question from "./components/Question/Question";
import TextField from "./components/TextField/TextField";

import styles from "./register-page.module.css";

const RegisterPage = () => {
    return (
        <div className={styles.page}>
            <NavBar />

            {/* styling using containers instead of container itself to center on 
                left and right half easier */}

            <div className={styles.contentContainer}> 
                {/* left */}
                <div className={styles.animatedCatContainer}> 
                    <AnimatedCat />
                </div>

                {/* middle (this has absolute positioning) */}
                <div className={styles.textFieldContainer}> 
                    <TextField /> 
                </div>

                {/* right */}
                <div className={styles.questionContainer}>
                    <Question />
                </div>
            </div> 
    
            <Footer />
        </div>
    );
};

export default RegisterPage;
