import React from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import Circle from "../../../helpers/CirclePie/Circle";
import { FaChevronRight } from "react-icons/fa";
import { RiVipCrownLine } from "react-icons/ri";
import { IoStatsChartSharp } from "react-icons/io5";
const UsersComponent = () => {
  return (
    <>
      <div className="allUsersDetails">
        <div className="allUsers">
          <span className="allUsersInfo">All Users</span>
          <span>
            Detail <FaChevronRight />
          </span>
        </div>
        <div className="Users">450,549</div>
      </div>
      <div className="total-Condition">
        <div className="total-earnings">
          <div className="earnings-icon">
            <BsGraphUpArrow />
          </div>
          <div className="spanTag">
            <span>Total Earnings</span>
            <span>450,549</span>
          </div>
        </div>
        <div className="total-sales">
          <div className="sales-icon">
          <RiVipCrownLine />
          </div>
          <div className="spanTag">
            <span>Sales</span>
            <span>450,549</span>
          </div>
        </div>
        <div className="total-purchase">
          <div className="purchase-icon">
          <IoStatsChartSharp />
          </div>
          <div className="spanTag">
            <span>Purchase</span>
            <span>450,549</span>
          </div>
        </div>
      </div>
      <div className="PieCharts">
        <div className="PieCharts-inner">
          <Circle percentage={60} color={"#00b929"} />
          <div className="active-users">
          <span>123,456</span>
            <span>Active users</span>
            
          </div>
        </div>
        <div className="PieCharts-inner">
          <Circle percentage={20} color={"#023aff"} />
          <div className="active-users">
          <span>123,456</span>
            <span>New users</span>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersComponent;
