import HeroSectionComponent from "../../components/HeroSectionComponent/HeroSectionComponent";
import "./GameDashboard.scss";
import GameBG from "./../../assets/GameBGS.jpg";
import GameDisplayComponent from "../../components/GameDisplay/GameDIsplayComponent";
const Download = () => {
  return (
    <div className="download-now">
      <div
        className="hero-section"
        style={{
          backgroundImage: `url(${GameBG})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          borderRadius: "10px",
        }}
      >
        <HeroSectionComponent />
      </div>
      <div className="Gaming-videos">
        <div className="GameDisplayComponent">
          <GameDisplayComponent/>
        </div>
      </div>
    </div>
  );
};

export default Download;
