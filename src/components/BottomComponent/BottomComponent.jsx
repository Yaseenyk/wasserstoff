import {data} from "./chatsData";
import CustomBarChart from "./CustomBarChart/CustomBarChart";

const BottomComponent = () => {
  return (
    <>
      <div className="background-color">
        <div className="salesComponent">
          <span>Sales Figures</span>
          <span>$10,200</span>
        </div>
        <div className="graphChart">
          <div className="graph">
          <CustomBarChart data={data}/>
          </div>
          <div className="lines"></div>
        </div>
      </div>
    </>
  );
};

export default BottomComponent;
