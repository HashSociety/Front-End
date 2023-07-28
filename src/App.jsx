
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
// import Navbar from "./components/Navbar";
import Map from "./components/Map";
import Protocol from "./components/Protocol";
import Scanning from "./components/Scanning";


const App = () => {
  
  return (
    <div className="main-container">
      {/* <Navbar /> */}
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
