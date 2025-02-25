import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import FullPizza from "./FullPizza";

import styles from "./schedule-page.module.css";

const SchedulePage = () => {
    return (
        <div className={styles.page}>
            <NavBar />
            <main>
                <FullPizza />
            </main>
            <Footer />
        </div>
    );
};

export default SchedulePage;