import React from "react";
import Circle from "../../../helpers/CirclePie/Circle";
import { FaChevronRight } from "react-icons/fa";
import { RiVipCrownLine } from "react-icons/ri";
import { IoStatsChartSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { BiTrendingUp } from "react-icons/bi";
import { usePopup } from "../../../context/PopupContext";

const UsersComponent = () => {
  const { togglePopup } = usePopup();

  const totalEarningsProps = {
    whileHover: { scale: 1.1,  cursor: "pointer", padding: "2px", borderRadius: "10px" },
  };

  const totalSalesProps = {
    whileHover: { scale: 1.1,  cursor: "pointer", padding: "2px", borderRadius: "10px" },
    onClick: togglePopup,
  };

  const totalPurchaseProps = {
    whileHover: { scale: 1.1,  cursor: "pointer", padding: "2px", borderRadius: "10px" },
  };

  return (
    <>
      <div className="allUsersDetails">
        <div className="allUsers">
          <span className="allUsersInfo">All Users</span>
          <span>
            DETAIL <FaChevronRight />
          </span>
        </div>
        <div className="Users">450,549</div>
      </div>
      <motion.div className="total-Condition">
        <motion.div className="total-earnings" {...totalEarningsProps}>
          <div className="earnings-icon">
            <BiTrendingUp />
          </div>
          <div className="spanTag">
            <span>Total Earnings</span>
            <span>345,467</span>
          </div>
        </motion.div>
        <motion.div className="total-sales" {...totalSalesProps}>
          <div className="sales-icon">
            <RiVipCrownLine />
          </div>
          <div className="spanTag">
            <span>Sales</span>
            <span>45,647</span>
          </div>
        </motion.div>
        <motion.div className="total-purchase" {...totalPurchaseProps}>
          <div className="purchase-icon">
            <IoStatsChartSharp />
          </div>
          <div className="spanTag">
            <span>Purchase</span>
            <span>263,756</span>
          </div>
        </motion.div>
      </motion.div>
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
