import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";


import styles from "./schedule-page.module.css";

const SchedulePage = () => {
    return (
        <div className={styles.page}>
            <NavBar />
            <main>
                <p>schedule</p>
            </main>
            <Footer />
        </div>
    );
};

export default SchedulePage;
