import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import WebsiteRoutes from './websiteroutes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<WebsiteRoutes />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
