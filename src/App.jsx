


import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";

import "./index.css";

export default function App() {

  return (
    <div className="app-layout">
      <Sidebar  />
      <div className="main-area overflow-auto">
        <Topbar />
        <div className="page-content">
         <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
         

          <Route
            path="*"
            element={
              <div style={{ padding: 40, color: "#999" }}>
                 Page not found
              </div>
            }
          />
        </Routes>
        </div>
      </div>
    </div>
  );
}


