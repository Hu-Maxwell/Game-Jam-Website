import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

import Resources from "./components/ResourcesMain/ResourcesMain";

import styles from "./resources-page.module.css";

const ResourcesPage = () => {
    return (
        <div className={styles.page}>
            <NavBar />
            <Resources /> 
            <Footer />
        </div>
    );
};

export default ResourcesPage;
