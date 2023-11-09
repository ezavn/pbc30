import React, { useState } from "react";
import { FaChevronUp } from "react-icons/fa";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  window.addEventListener("scroll", toggleVisible);
  return (
    <>
      <div
        onClick={scrollToTop}
        className={`backtotop cursor-pointer w-[38px] h-[38px] fixed right-[15px] bottom-[20px] md:bottom-[20px] lg:bottom-[20px] bg-red flex items-center justify-center rounded-[8px] transition duration-700 z-[99] ${
          visible ? "translate-x-0" : "translate-x-[200px]"
        }`}
      >
        <FaChevronUp
          className="transition-all cursor-pointer opacity-60 hover:opacity-100"
          size={30}
          color="white"
        ></FaChevronUp>
      </div>
    </>
  );
}

export default ScrollToTopButton;
