import React from "react";
import { FaTimes } from "react-icons/fa";
import { usePopup } from "@/context/popupContext";

export default function VideoPopup() {
  const { showPopup, setShowPopup } = usePopup();
  return (
    <>
      {showPopup ? (
        <div className="overlay">
          <div className="video-popup">
            <div className="wrapper">
              <div className="frame">
                <iframe
                  src="https://www.youtube.com/embed/oDRuuFqZ6cQ"
                  title="Hành trình 7 năm - 29 kỳ Planning Bootcamp - Lập kế hoạch Hành động &amp; Phát triển bản thân"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowfullscreen
                ></iframe>
              </div>
              <div
                className="bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center absolute top-[-20px] right-[-20px] cursor-pointer"
                onClick={() => setShowPopup(false)}
              >
                <FaTimes size={20}></FaTimes>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
