import "./DataOverview.scss";
import { TbCircleDot } from "react-icons/tb";
import { AiOutlineBranches } from "react-icons/ai";
import { MdOutlinePrivateConnectivity } from "react-icons/md";
import { LuGitBranch } from "react-icons/lu";
import CirclePositions from "../../../helpers/CirclePositions/CirclePositions";
import { FaRegDotCircle } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoStatsChartSharp } from "react-icons/io5";
const DataOverview = () => {
  

  return (
    <div className="mainContainer">
      <div className="timeline">TIMELINE</div>
      <div className="wBars">
        <span>1W</span>
        <span>1M</span>
        <span className="highlightM">3M</span>
        <span>1Y</span>
        <span>ALL</span>
      </div>
      <div className="divCircle">
        <div className="divMainCircle"></div>
        <div className="outerCircle"></div>
        <CirclePositions/>
      </div>
      <div className="informationData">
        <div className="trends">
          <span><FaRegDotCircle /></span>
          <span>TREND GOODS</span>
          <span>204</span>
        </div>
        <div className="trends">
          <span><MdOutlineRemoveRedEye /></span>
          <span>SHOPPING VIEWS</span>
          <span>65,540</span>
        </div>
        <div className="trends">
          <span><IoStatsChartSharp /></span>
          <span>STORE DYNAMICS</span>
          <span>324</span>
        </div>
      </div>
      <div className="plusMinus">
        <div className="divPlusMinus" style={{cursor:"pointer"}}>
          <span>+</span>
          <span>-</span>
        </div>
        <div className="circleDot" style={{cursor:"pointer"}}>
          <TbCircleDot />
        </div>
        <div className="Icons" style={{cursor:"pointer"}}>
          <div>
            <AiOutlineBranches />
          </div>
          <div>
            <MdOutlinePrivateConnectivity />
          </div>
          <div>
            <LuGitBranch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataOverview;
