import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

import TextField from "./components/TextField/TextField";
import InputField from "./components/InputField/InputField";

import "./register-page.css";

const RegisterPage = () => {
    return (
        <>
            <NavBar />
            
            <TextField/>
            <InputField/>

            <Footer />
        </>
    );
};

export default RegisterPage;
