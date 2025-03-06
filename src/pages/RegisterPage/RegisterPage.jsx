import { useState, useEffect } from "react";

import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
// change to @ later

import AnimatedCat from "./components/AnimatedCat/AnimatedCat";
import ScrollInput from "./components/ScrollInput/ScrollInput";
import TextField from "./components/TextField/TextField";
import BackSubmitButton from "./components/BackSubmitButton/BackSubmitButton";

import styles from "./register-page.module.css";

const questions = [ 
    "what is your name", 
    "what is your major", 
    "question 3 ayayayay", 
    "question 4 nnonoon"
];

// when buttons is clicked, move the questionIndex up one
    // if first question, back button is gone 
    // if last question, next becomes "submit"

// pass these props to button: questions.length and questionIndex 
    // in button: have useEffect 
        // this adjusts the button text / if its clickable or not according to the question array

const RegisterPage = () => {
    const [questionIndex, setQuestionIndex]= useState(0); 

    const onQuestionChange = (newIndex) => {
        setQuestionIndex(newIndex)
    }

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
                    <TextField question={questions[questionIndex]} /> 
                </div>

                {/* right */}
                <div className={styles.scrollInputContainer}>
                    <ScrollInput />
                    <BackSubmitButton 
                        onQuestionChange={onQuestionChange}
                        questionIndex={questionIndex}
                        questionLength={questions.length}
                    />
                </div>
            </div> 
    
            <Footer />
        </div>
    );
};

export default RegisterPage;