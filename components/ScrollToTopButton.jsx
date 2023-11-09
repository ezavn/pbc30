import React from "react";
import { FaChevronUp } from "react-icons/fa";
import ScrollToTop from "react-scroll-up";

function ScrollToTopButton() {
  return (
    <div className="relative z-[300]">
      <ScrollToTop showUnder={160}>
        <FaChevronUp
          className="transition-all cursor-pointer opacity-60 hover:opacity-100"
          size={30}
          color="white"
        ></FaChevronUp>
      </ScrollToTop>
    </div>
  );
}

export default ScrollToTopButton;
