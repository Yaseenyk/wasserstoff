import { FaSearch } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { LuSettings2 } from "react-icons/lu";
import { Link } from "react-router-dom"; // Import Link from React Router
import { useState } from "react";

const Links = ["Download", "Overview", "Dashboard", "Analytics"];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);

  return (
    <>
      <div className="logo"><span>WorldPlayNexus</span></div>
      <div className="Search">
        <div className="background-input">
          <input type="text" />
          <FaSearch />
        </div>
      </div>
      <div className="Links">
        {Links.map((link, index) => (
          <Link
            key={index}
            to={`/${link.toLowerCase()}`}
            className={`link ${activeLink === index ? "active" : ""}`}
            onClick={() => setActiveLink(index)}
          >
            {link}
          </Link>
        ))}
      </div>
      <div className="Account">
        <FiUser />
        <LuSettings2 />
      </div>
    </>
  );
};

export default Navbar;
