
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Map from "./components/Map";
import Protocol from "./components/Protocol";
import Scanning from "./components/Scanning";
import { useLocation } from 'react-router-dom';

const App = () => {
  const [shouldHideNavbar, setShouldHideNavbar] = useState(false);
  const location = useLocation();
  const hideNavbarPaths = ['/login'];


  useEffect(() => {
    hideNavbarPaths.includes(location.pathname) ? setShouldHideNavbar(false) : setShouldHideNavbar(true);
  }, [location]);

  return (
    <div className="max-w-[80%] h-screen block mx-auto">
      {shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/map" element={<Map />} />
        <Route path="/protocol" element={<Protocol />} />
        <Route path="/scan" element={<Scanning />} />
      </Routes>
    </div>
  );
};

export default App;
