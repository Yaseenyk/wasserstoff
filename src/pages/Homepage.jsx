
import { Outlet } from 'react-router-dom';
import Footer from "../components/Footer/Footer.jsx";
import Navbar from "../components/Navbar/Navbar";
import {PopupProvider} from './../context/PopupContext.jsx'
import { useLocation } from "react-router-dom";
import { useEffect } from 'react';
const Homepage = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if the active route is "overview"
    const isOverviewPage = location.pathname.includes("/overview");
    // Set the body background color based on the active page
    document.body.style.backgroundColor = isOverviewPage ? "white" : "#eef0fa";
  }, [location.pathname]);


  return (
    <>
    <PopupProvider>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="Homepage">
      <Outlet />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </PopupProvider>
    </>
  );
};

export default Homepage;
