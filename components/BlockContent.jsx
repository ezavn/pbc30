import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

function BlockContent({ children }) {
  return (
    <div className="inline-flex py-10 lg:py-16 px-5 md:px-16 lg:px-24 text-lg lg:text-2xl font-medium text-white leading-[1.6] bg-orange text-justify md:text-left">
      {children}
    </div>
  );
}

export default BlockContent;
