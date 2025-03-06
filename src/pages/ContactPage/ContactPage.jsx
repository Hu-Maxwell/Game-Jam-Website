import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";


import styles from "./contact-page.module.css";

const ContactPage = () => {
    return (
        <div className={styles.page}>
            <NavBar />
            <main>
                <p>contact</p>
            </main>
            <Footer />
        </div>
    );
};

export default ContactPage;