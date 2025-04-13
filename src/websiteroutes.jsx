import { Route, Routes } from "react-router"
import Homepage from "./pages/HomePage/HomePage"
import SchedulePageTwo from "./pages/SchedulePageTwo/SchedulePage"
import AboutPage from "./pages/AboutPage/AboutPage"
import RegisterPage from  "./pages/RegisterPage/RegisterPage"
import ResourcesPageTest from "./pages/ResourcesPageTest/resourcespage"

function WebsiteRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/schedule" element={<SchedulePageTwo/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/resources" element={<ResourcesPageTest/>} />
        </Routes>
    )
}

export default WebsiteRoutes