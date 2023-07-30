import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Map from "./components/Map";
import Protocol from "./components/Protocol";
import Scanning from "./components/Scanning";
import Login from "./components/Login";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "./api";
import Protected from "./components/Protected";

const App = () => {
  const [shouldHideNavbar, setShouldHideNavbar] = useState(false);
  const location = useLocation();
  const hideNavbarPaths = ["/login"];
  const [userId, setUserId] = useState(null);
  const token = localStorage.getItem("token");
  const getUserId = useQuery(["user"], async () => getUser(token), {
    refetchOnWindowFocus: false,
    enabled: !!token,
  });

  useEffect(() => {
    hideNavbarPaths.includes(location.pathname)
      ? setShouldHideNavbar(false)
      : setShouldHideNavbar(true);
  }, [location]);

  useEffect(() => {
    if (localStorage.getItem("token") === null) return;
    const { data, isLoading, isError, error } = getUserId;
    data && setUserId(data.userid);
  }, [getUserId.data]);

  return (
    <div className="max-w-[90%] h-screen block mx-auto">
      {shouldHideNavbar && <Navbar user={userId} />}
      <Routes>
        <Route path="/" element={<Home user={userId} />} />

        <Route
          path="/map"
          element={
            <Protected user={userId}>
              <Map />
            </Protected>
          }
        />
        <Route
          path="/protocol"
          element={
            // <Protected user={userId}>
              <Protocol />
            // </Protected>
          }
        />
        <Route
          path="/scan"
          element={
            // <Protected user={userId}>
              <Scanning />
            // </Protected>
          }
        />

        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
