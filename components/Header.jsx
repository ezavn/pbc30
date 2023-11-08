"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const headerVariants = {
  hidden: { padding: "20px 0px", background: "#fff" },
  show: {
    padding: "10px 0px",
    background: "rgba(0,0,0,0.8)",
    transition: {
      type: "spring",
    },
  },
};

function Header() {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const scroll = () => {
      window.scrollY > 150 ? setIsActive(true) : setIsActive(false);
    };
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  });
  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate={isActive ? "show" : ""}
      className={`${isActive ? "fixed" : ""} w-full max-w-[1920px] z-50`}
    >
      <Navbar isActive={isActive} />
    </motion.header>
  );
}

export default Header;
