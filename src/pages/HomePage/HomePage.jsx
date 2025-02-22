import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

import HeroSection from "./components/Hero/Hero";
import FAQSection from "./components/FaqSmall/FaqSmall";
import SponsorsSection from "./components/Sponsors/Sponsors";

import "./home-page.css";

const HomePage = () => {
    return (
        <>
            <NavBar />
            <main>
                <HeroSection />
                <FAQSection />
                <SponsorsSection />
            </main>
            <Footer />
        </>
    );
};

export default HomePage;
