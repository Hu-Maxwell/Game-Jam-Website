import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

import HeroSection from "./components/Hero/Hero";
import SponsorsSection from "./components/Sponsors/Sponsors";
import FAQSection from "./components/FaqSmall/FaqSmall";

import styles from "./home-page.module.css";

const HomePage = () => {
    return (
        <div className={styles.page}>
            <NavBar />
            <main>
                <HeroSection />
                <FAQSection />
                {/* <SponsorsSection /> No sponsors :( */}
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
