import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Circle = ({ percentage,color }) => {
  const circumference = 251.2;
  const offset = circumference - (circumference * percentage) / 100;
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < percentage) {
        setCount(count + 1);
      } else {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [count, percentage]);

  return (
    <div>
      <svg width="100" height="100" viewBox="0 0 100 100">
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#000"
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
          strokeWidth="4"
          strokeDasharray="251.2"
          strokeDashoffset={offset}
          transform="rotate(-90 50 50)"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1 }}
        />
        <motion.text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="16px"
          fill="#000"
        >
          {count}%
        </motion.text>
      </svg>
      
    </div>
  );
};

export default Circle;
