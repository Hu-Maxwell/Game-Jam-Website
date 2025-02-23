import { Route, Routes } from "react-router"
import Homepage from "./pages/HomePage/homepage"
import ContactPage from "./pages/contactpage/contactpage"
import ResourcesPage from "./pages/resourcespage/resourcespage"
import SchedulePage from "./pages/schedulepage/schedulepage"
import AboutPage from "./pages/aboutpage/aboutpage"
import RegisterPage from  "./pages/RegisterPage/RegisterPage"

function WebsiteRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/contact" element={<ContactPage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/resources" element={<ResourcesPage/>}/>
            <Route path="/schedule" element={<SchedulePage/>} />
            <Route path="/register" element={<RegisterPage/>} />
        </Routes>
    )
}

export default WebsiteRoutes