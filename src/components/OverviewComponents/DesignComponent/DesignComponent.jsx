import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';
import PieChartCircle from '../../../helpers/PieChartCircle/PieChartCircle';
import { LineChart, Line } from 'recharts';

const Column = () => <div className="column"></div>;

const Presentation = ({ value, numbers, strokeColor, data }) => (
  <div className="Presentation">
    <div className="presentation-value">{value}</div>
    <div className="presentation-numbers">{numbers}</div>
    <div className="piechart">
        {[...Array(4)].map((_, index) => (
          <Column key={index} />
        ))}
        <div className="lines">
          <LineChart width={70} height={18} data={data}>
            <Line type="monotone" dataKey="pv" stroke={strokeColor} strokeWidth={2} dot={false} />
          </LineChart>
        </div>
      </div>
  </div>
);

const DesignComponent = () => {
  const data1 = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  ];

  const data2 = [
    { name: 'Page A', uv: 2000, pv: 1400, amt: 2400 },
    { name: 'Page B', uv: 3500, pv: 2398, amt: 2210 },
    { name: 'Page C', uv: 1500, pv: 8800, amt: 2290 },
    { name: 'Page D', uv: 3780, pv: 4908, amt: 2000 },
    { name: 'Page E', uv: 2890, pv: 5800, amt: 2181 },
    { name: 'Page F', uv: 1590, pv: 2800, amt: 2500 },
    { name: 'Page G', uv: 4490, pv: 3300, amt: 2100 },
  ];

  const data3 = [
    { name: 'Page A', uv: 3000, pv: 3400, amt: 2400 },
    { name: 'Page B', uv: 2500, pv: 4398, amt: 2210 },
    { name: 'Page C', uv: 1800, pv: 7800, amt: 2290 },
    { name: 'Page D', uv: 1980, pv: 5908, amt: 2000 },
    { name: 'Page E', uv: 3090, pv: 3800, amt: 2181 },
    { name: 'Page F', uv: 2690, pv: 4800, amt: 2500 },
    { name: 'Page G', uv: 3690, pv: 5300, amt: 2100 },
  ];

  return (
    <>
      <div className="Design-faster">
        <div className="divDesignFaster">Design faster</div>
      </div>
      <div className="card-background">
        <div className="pie-chart">
          <PieChartCircle percentage={60} color={'#ff708b'} circlePercentage={20} />
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
          <Presentation value="Presentation" numbers="862" strokeColor="#8676ff" data={data1} />
          <Presentation value="Development" numbers="367" strokeColor="#ff708b" data={data2} />
          <Presentation value="Research" numbers="657" strokeColor="#ffba69" data={data3} />
        </div>
      </div>
      <div className="totalDivClass">
        {[{ earnings: '$12,875', percentage: '10%' }, { earnings: '$12,875', percentage: '12%' }].map(
          (item, index) => (
            <div key={index} className="totalEarnings">
              <div className="totalEarning">Total earning</div>
              <div className="dollarsEarnings">
                <span>{item.earnings}</span>
                <div>
                  <IoMdArrowDropup />
                </div>
                <span>{item.percentage}</span>
              </div>
              <div className="totalCompared">Compared to $23745 last year</div>
            </div>
          )
        )}
      </div>
      <div className="taskPresentation">
        {[
          { span: 'Travel', numbers: '760', earnings: '2,540', Icon: IoMdArrowDropup },
          { span: 'Presentation', numbers: '845', earnings: '2,540', Icon: IoMdArrowDropdown },
          { span: 'Business', numbers: '968', earnings: '2,540', Icon: IoMdArrowDropup },
        ].map((item, index) => (
          <div key={index} className="divPresentation">
            <span>{item.span}</span>
            <div className="divNumbers">{item.numbers}</div>
            <div className="divEarnings">{item.earnings}</div>
            <div className={` ${item.Icon === IoMdArrowDropdown ? 'divArrowDown' : 'divArrow'}`}>
              <item.Icon />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DesignComponent;
