import React from "react";
import DataComponent from "../../components/DataComponent/DataComponent";
import BottomComponent from "../../components/BottomComponent/BottomComponent";
import "./Dashboard.scss";
import Popup from "../../helpers/Popup/Popup";
import { usePopup } from "../../context/PopupContext";
import { motion } from "framer-motion";
const Dashboard = () => {
  const { isOpen } = usePopup();
  return (
    <>
      <div className="TopComponent">
        <DataComponent />
      </div>
      <div className="BottomComponent">
        <BottomComponent />
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={
            {
              duration:1
            }
          }
          className="Popup"
        >
          <Popup />
        </motion.div>
      )}
    </>
  );
};

export default Dashboard;
