import { usePopup } from "@/context/popupContext";
import Image from "next/image";
import React from "react";

function Hero() {
  const { setShowRegister } = usePopup();
  return (
    <section className="w-full h-screen bg-[url('/images/pbc30-hero.png')] bg-center bg-no-repeat bg-cover">
      <div className="flex items-end justify-center h-full">
        <button
          className="button mb-[140px]"
          onClick={() => setShowRegister(true)}
        >
          <span>ĐĂNG KÝ NGAY</span>
          <Image
            width={50}
            height={50}
            src="/icons/circle-arrow.svg"
            alt="arrow"
          ></Image>
        </button>
      </div>
    </section>
  );
}

export default Hero;
