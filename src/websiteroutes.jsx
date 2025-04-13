import { Route, Routes } from "react-router"
import Homepage from "./pages/HomePage/HomePage"
import ContactPage from "./pages/ContactPage/ContactPage"
import ResourcesPage from "./pages/ResourcesPage/ResourcesPage"
import SchedulePage from "./pages/SchedulePage/SchedulePage"
import AboutPage from "./pages/AboutPage/AboutPage"
import RegisterPage from  "./pages/RegisterPage/RegisterPage"
import ResourcesPageTest from "./pages/ResourcesPageTest/resourcespage"

function WebsiteRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/contact" element={<ContactPage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/resources" element={<ResourcesPage/>}/>
            <Route path="/schedule" element={<SchedulePage/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/test" element={<ResourcesPageTest/>} />
        </Routes>
    )
}

export default WebsiteRoutes