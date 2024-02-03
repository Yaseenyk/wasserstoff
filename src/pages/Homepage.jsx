
import { Outlet } from 'react-router-dom';
import Footer from "../components/Footer/Footer.jsx";
import Navbar from "../components/Navbar/Navbar";
const Homepage = () => {
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="Homepage">
      <Outlet />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
