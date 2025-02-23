import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

import "./resources-page.css";
import ResourcesBody from "./components/ResourcesMain/ResourcesMain";

const ResourcesPage = () => {
    return (
        <>
            <NavBar />
            <ResourcesBody/> 
            <Footer />
        </>
    );
};

export default ResourcesPage;
