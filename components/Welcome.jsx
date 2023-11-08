import { usePopup } from "@/context/popupContext";
import Image from "next/image";
import React from "react";

function Welcome() {
  const { setShowRegister } = usePopup();
  return (
    <section className="relative bg-[url('/images/welcome-bg.png')] py-sectionMB md:py-section bg-center bg-cover">
      <div className="relative z-10 page-container max-w-[1380px] flex flex-col items-center justify-center">
        <h2 className="mb-3 text-lg font-bold text-white md:mb-5 lg:text-3xl">
          CHÀO ĐÓN BẠN TỚI
        </h2>
        <div>
          <Image width={901} height={108} src="/images/heading-2.svg" alt="" />
          <Image
            className="mt-2 lg:mt-4 lg:ml-[220px]"
            width={773}
            height={41}
            src="/images/heading-3.svg"
            alt=""
          />
        </div>
        <p className="mt-5 text-base text-center text-white md:text-lg lg:text-xl lg:mt-14">
          Tại PBC 30, bạn sẽ được trang bị kiến thức, công cụ và chiến lược để
          xây dựng và thúc đẩy giấc mơ của mình.{" "}
          <br className="hidden lg:block" /> Chúng tôi tin rằng bạn có khả năng
          biến những ước mơ thành hiện thực và tạo ra sự thay đổi tích cực cho
          doanh nghiệp của bạn và cho cả xã hội.
        </p>
        <button
          onClick={() => setShowRegister(true)}
          className="mt-8 md:mt-12 button mb-0 lg:mb-[80px]"
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
      <div className="absolute inset-0 lg:bg-[#000442]/40 bg-[#000442]/70"></div>
    </section>
  );
}

export default Welcome;
