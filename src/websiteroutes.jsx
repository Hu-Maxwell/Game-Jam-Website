import { Route, Routes } from "react-router"
import Homepage from "./Homepage/homepage"
import ContactPage from "./contactpage/contactpage"
import ResourcesPage from "./resourcespage/resourcespage"
import SchedulePage from "./schedulepage/schedulepage"

function WebsiteRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/contact" element={<ContactPage/>} />
            <Route path="/resources" element={<ResourcesPage/>}/>
            <Route path="/schedule" element={<SchedulePage/>} />
        </Routes>
    )
}

export default WebsiteRoutes