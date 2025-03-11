import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

import Contact from "./components/Contact/Contact";
import Team from "./components/Team/Team";
import ContactInfo from "./components/ContactInfo/ContactInfo";

import styles from "./about-page.module.css";

const AboutPage = () => {
    return (
        <div className={styles.page}>
            <NavBar />
            <Contact />
            <ContactInfo />
            <Team />
            <Footer />
        </div>
    );
};

export default AboutPage;