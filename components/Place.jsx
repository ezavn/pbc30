import { usePopup } from "@/context/popupContext";
import Image from "next/image";
import React from "react";

function Place() {
  const { setShowRegister } = usePopup();
  return (
    <section className="bg-[url('/images/place-bg.png')] py-sectionMB md:py-section bg-right lg:bg-center bg-cover">
      <div className="page-container max-w-[1024px] flex justify-center items-center flex-col lg:pl-52">
        <h2 className="text-3xl font-black text-white md:mb-2 md:text-5xl lg:text-7xl">
          LẦN ĐẦU TIÊN
        </h2>
        <h3 className="mb-2 text-lg font-black text-white uppercase md:mb-4 md:text-3xl lg:text-4xl">
          ĐƯỢC TỔ CHỨC tại
        </h3>
        <div className="relative mb-40">
          <Image
            width={900}
            height={386}
            src="/images/place-heading.svg"
            alt=""
          />
          <Image
            className="star1 absolute top-[51px] md:top-[105px] lg:top-[115px] left-[50%] translate-x-[-50%] mix-blend-screen"
            width={924}
            height={94}
            src="/icons/star6.svg"
            alt=""
          />
          <button
            onClick={() => setShowRegister(true)}
            className="absolute -bottom-14 md:bottom-0 right-20 md:right-[275px] font-bold text-white capitalize w-[220px] h-[44px] px-[16px] flex items-center justify-center cursor-pointer rounded-[46px] bg-gradient-to-r from-[#FF1F4C] to-[#FF5E35]"
          >
            ĐĂNG KÝ NGAY
          </button>
        </div>
      </div>
    </section>
  );
}

export default Place;
