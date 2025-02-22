import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

import Contact from "./components/Contact/Contact";
import Location from "./components/Location/Location";
import Team from "./components/Team/Team";
import ContactInfo from "./components/ContactInfo/ContactInfo";

import styles from "./contact-page.module.css";

const ContactPage = () => {
    return (
        <div className={styles.page}>
            <NavBar />
            <Contact />
            <Location />
            <Team />
            <ContactInfo />
            <Footer />
        </div>
    );
};

export default ContactPage;
