import { Route, Routes } from "react-router"

import Homepage from "./pages/HomePage/HomePage"
import AboutPage from "./pages/AboutPage/AboutPage"
import SchedulePage from "./pages/SchedulePage/SchedulePage"
import ResourcesPage from  "./pages/ResourcesPage/ResourcesPage"

function WebsiteRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/schedule" element={<SchedulePage/>} />
      <Route path="/resources" element={<ResourcesPage/>} />
    </Routes>
  )
}

export default WebsiteRoutes