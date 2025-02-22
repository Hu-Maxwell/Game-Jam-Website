import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";


import styles from "./about-page.module.css";

const AboutPage = () => {
    return (
        <div className={styles.page}>
            <NavBar />
            <main>
                <p>about</p>
            </main>
            <Footer />
        </div>
    );
};

export default AboutPage;