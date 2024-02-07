
import { Outlet } from 'react-router-dom';
import Footer from "../components/Footer/Footer.jsx";
import Navbar from "../components/Navbar/Navbar";
import {PopupProvider} from './../context/PopupContext.jsx'
const Homepage = () => {
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
