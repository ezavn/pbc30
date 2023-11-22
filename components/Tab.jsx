import React from "react";
import { motion } from "framer-motion";

const Tab = ({ label, isActive, onClick }) => {
  const tabVariants = {
    active: { backgroundColor: "#BF8F3D", color: "white" },
    inactive: { backgroundColor: "#E5CD7D", color: "white" },
  };

  return (
    <motion.div
      className="px-5 py-3 text-base font-bold uppercase cursor-pointer md:py-4 md:text-lg lg:text-xl md:px-11"
      variants={tabVariants}
      initial={isActive ? "active" : "inactive"}
      animate={isActive ? "active" : "inactive"}
      onClick={onClick}
    >
      {label}
    </motion.div>
  );
};

export default Tab;
