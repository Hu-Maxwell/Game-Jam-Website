import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

import TextField from "./components/TextField/TextField";
import InputField from "./components/InputField/InputField";
import SubmitButton from "./components/SubmitButton/SubmitButton";
import Dragon from "./components/Dragon/Dragon";

import styles from "./register-page.module.css";

const RegisterPage = () => {
    return (
        <div className={styles.page}>
            <NavBar />

            <div className={styles.questionContainer}>
                <div className={styles.dragon}>
                    <Dragon/>
                </div>

                <div className={styles.formContainer}>
                    <TextField/>
                    <InputField/>
                    <SubmitButton/>
                </div>
            </div> 

            <Footer />
        </div>
    );
};

export default RegisterPage;
