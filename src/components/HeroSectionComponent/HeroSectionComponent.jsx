import "./HeroSectionComponent.scss";
import { FaSearch } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import { MdChecklist } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
const HeroSectionComponent = () => {
  return (
    <>
      <div className="Heading-section">World Play Nexus</div>
      <div className="subHeading">Play,Download And Many More</div>
      <div className="Search-section">
        <div className="SearchDashboard">
          <input type="text" placeholder="Search Your Game" />
          <FaSearch />
        </div>
        <div className="FilerDashboard">
          <IoFilter />
          <MdChecklist />
          <IoMdSettings />
        </div>
      </div>
    </>
  );
};

export default HeroSectionComponent;
