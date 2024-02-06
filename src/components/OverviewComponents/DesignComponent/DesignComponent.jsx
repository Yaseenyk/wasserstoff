import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import PieChartCircle from "../../../helpers/PieChartCircle/PieChartCircle";
const DesignComponent = () => {
  return (
    <>
      <div className="Design-faster">
        <div className="divDesignFaster">Design faster</div>
      </div>
      <div className="card-background">
        <div className="pie-chart">
          <PieChartCircle
            percentage={60}
            color={"#ff708b"}
            circlePercentage={20}
          />
        </div>
        <div className="divTotalEarningsMoney">
          <div className="Total-earning">Total earning</div>
          <div className="Money">
            <span className="moneyDollar">$12,875</span>
            <div className="percentageGap">
              <span>
                <IoMdArrowDropup />
              </span>
              <span>7%</span>
            </div>
          </div>
          <div className="written-word">Compared to $23745 last year</div>
        </div>
        <div className="Presentation-main">
          <div className="Presentation">
            <div className="presentation-value">Presentation</div>
            <div className="presentation-numbers">862</div>
            <div className="piechart">piechart</div>
          </div>
          <div className="Presentation">
            <div className="presentation-value">Development</div>
            <div className="presentation-numbers">367</div>
            <div className="piechart">piechart</div>
          </div>
          <div className="Presentation">
            <div className="presentation-value">Research</div>
            <div className="presentation-numbers">657</div>
            <div className="piechart">piechart</div>
          </div>
        </div>
      </div>
      <div className="totalDivClass">
        <div className="totalEarnings">
          <div className="totalEarning">Total earning</div>
          <div className="dollarsEarnings">
            <span>$12,875</span>
            <div>
              <IoMdArrowDropup />
            </div>
            <span>10%</span>
          </div>
          <div className="totalCompared">Compared to $23745 last year</div>
        </div>
        <div className="totalEarnings">
          <div className="totalEarning">Total earning</div>
          <div className="dollarsEarnings">
            <span>$12,875</span>
            <div>
              <IoMdArrowDropup />
            </div>
            <span>12%</span>
          </div>
          <div className="totalCompared">Compared to $23745 last year</div>
        </div>
      </div>
      <div className="taskPresentation">
        <div className="divPresentation">
          <span>Travel</span>
          <div className="divNumbers">760</div>
          <div className="divEarnings">2,540</div>
          <div className="divArrow">
            <IoMdArrowDropup />
          </div>
        </div>
        <div className="divPresentation">
          <span>Presentation</span>
          <div className="divNumbers">845</div>
          <div className="divEarnings">2,540</div>
          <div className="divArrowDown">
            <IoMdArrowDropdown />
          </div>
        </div>
        <div className="divPresentation">
          <span>Business</span>
          <div className="divNumbers">968</div>
          <div className="divEarnings">2,540</div>
          <div className="divArrow">
            <IoMdArrowDropup />
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignComponent;
