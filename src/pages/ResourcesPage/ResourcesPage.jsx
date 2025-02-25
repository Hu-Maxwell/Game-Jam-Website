import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

import styles from "./resources-page.module.css";
import ResourcesBody from "./components/ResourcesMain/ResourcesMain";

const ResourcesPage = () => {
    return (
        <div className={styles.page}>
            <NavBar />
            <ResourcesBody/> 
            <Footer />
        </div>
    );
};

export default ResourcesPage;
