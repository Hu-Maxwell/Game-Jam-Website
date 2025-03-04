import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

import Contact from "./components/Contact/Contact";
import Team from "./components/Team/Team";
import ContactInfo from "./components/ContactInfo/ContactInfo";

import styles from "./contact-page.module.css";

const ContactPage = () => {
    return (
        <div className={styles.page}>
            <NavBar />
            <Contact />
            <Team />
            <ContactInfo />
            <Footer />
        </div>
    );
};

export default ContactPage;
