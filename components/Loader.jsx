"use client";
import React, { useEffect } from "react";
import Image from "./Image";
import { motion } from "framer-motion";

//Variants
const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 2,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const mainItem = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 2,
    },
  },
  exit: {
    opacity: 0,
    y: 200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const Loader = ({ setLoading }) => {
  return (
    <div className="loader">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
        onAnimationComplete={() => setLoading(false)}
        className="loader-inner"
      >
        <ImageBlock variants={item} id="image-1" />
        <motion.div variants={mainItem} className="transition-image">
          <img
            src={`/images/image-2.webp`}
            fallback={`/images/image-2.jpg`}
            alt="random alt"
          />
        </motion.div>
        <ImageBlock variants={item} id="image-3" />
        <ImageBlock variants={item} id="image-4" />
        <ImageBlock variants={item} id="image-5" />
      </motion.div>
    </div>
  );
};

export const ImageBlock = ({ id, variants }) => {
  return (
    <motion.div variants={variants} className={`image-block ${id}`}>
      <Image
        src={`/images/${id}.webp`}
        fallback={`/images/${id}.jpg`}
        alt={id}
      />
    </motion.div>
  );
};
export default Loader;
