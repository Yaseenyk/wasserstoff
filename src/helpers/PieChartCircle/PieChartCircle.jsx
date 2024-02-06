import { motion } from "framer-motion";
import { FaRegDotCircle } from "react-icons/fa";

const PieChartCircle = ({ percentage, color, circlePercentage }) => {
  const circumference = 251.2;
  const offset = circumference - (circumference * percentage) / 100;
  const smallOffset = circumference - (circumference * circlePercentage) / 100;

  return (
    <div>
      <svg width="100" height="100" viewBox="0 0 100 100">
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#dbdff1"
          strokeWidth="3"
          strokeDasharray="251.2"
          strokeDashoffset="0"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke={color}
          strokeWidth="6"
          strokeDasharray="251.2"
          strokeDashoffset={offset}
          transform="rotate(-90 50 50)"
          initial={{ strokeDashoffset: 251.2 }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1 }}
        />
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#8676ff"
          strokeWidth="6"
          strokeDasharray="251.2"
          strokeDashoffset={smallOffset}
          transform="rotate(-90 50 50)"
          initial={{ strokeDashoffset: 251.2 }}
          animate={{ strokeDashoffset: smallOffset }}
          transition={{ duration: 1 }}
        />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="#dbdff1"
          strokeWidth="3"
          strokeDasharray="251.2"
          strokeDashoffset="0"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="#ffba69"
          strokeWidth="6"
          strokeDasharray="251.2"
          strokeDashoffset={offset}
          transform="rotate(-90 50 50)"
          initial={{ strokeDashoffset: 251.2 }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1 }}
          style={{ position: "relative" }}
        />
      </svg>
      <div
  className="DotCircle"
  style={{
    position: "absolute",
    top: "50%",  
    left: "50%", 
    transform: "translate(-50%, -50%)", 
    fontSize: "20px",
  }}
>
  <FaRegDotCircle />
</div>
    </div>
  );
};

export default PieChartCircle;
