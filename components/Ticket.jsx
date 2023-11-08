import Image from "next/image";
import React from "react";
import { tickets } from "@/data";
import Slider from "react-slick";
import { usePopup } from "@/context/popupContext";

function Ticket() {
  const { setShowRegister } = usePopup();
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="pb-9 bg-darkBlue md:pt-section pt-sectionMB">
      <div className="page-container max-w-[1010px]">
        <div className="flex flex-col items-center justify-center mb-10 md:mb-16">
          <Image
            width={670}
            height={114}
            src="/images/ticket-heading.svg"
            alt=""
          />
        </div>
        <div className="hidden gap-3 md:grid md:grid-cols-3 md:gap-8">
          {tickets.map((item) => {
            return (
              <Image
                key={item.id}
                width={316}
                height={360}
                src={item.image}
                alt=""
              />
            );
          })}
        </div>
        <div className="block ticket-slider md:hidden">
          <Slider {...settings}>
            {tickets.map((item) => {
              return (
                <Image
                  className="px-2"
                  key={item.id}
                  width={316}
                  height={360}
                  src={item.image}
                  alt=""
                />
              );
            })}
          </Slider>
        </div>
        <div className="flex items-center justify-center mt-6 md:mt-10">
          <button
            onClick={() => setShowRegister(true)}
            className="font-bold text-white capitalize w-[220px] h-[44px] px-[16px] flex items-center justify-center cursor-pointer rounded-[46px] bg-gradient-to-r from-[#FF1F4C] to-[#FF5E35]"
          >
            ĐĂNG KÝ NGAY
          </button>
        </div>
        <div className="mx-auto mt-6 text-center md:mt-10">
          <p className="text-white text-lg md:text-xl font-bold mb-[20px] md:mb-[32px]">
            * Giá trên đã bao gồm{" "}
            <span className="text-[#C0FFFF]">VAT & Tài liệu</span> <br />* Đăng
            ký và thanh toán trước ngày{" "}
            <span className="text-[#C0FFFF]">15/09/2023</span>
          </p>
          <div className="h-[59px] w-[300px] md:w-[370px] border border-[#C0FFFF] rounded-[20px] mx-auto inline-flex items-center justify-center text-[18px] md:text-[24px] font-bold mb-[25px] text-white uppercase">
            Thông tin thanh toán
          </div>
          <div className="text-white pay-info">
            <p className="mb-2">
              Số tài khoản: <br />
              <span className="text-cyan text-[16px] md:text-[24px] font-bold">
                0071001228481
              </span>
            </p>
            <p className="mb-2">
              Tại: <br />
              <span className="text-cyan text-[16px] md:text-[24px] font-bold">
                VietcomBank Hồ Chí Minh
              </span>
            </p>
            <p>
              Chủ tài khoản: <br />
              <span className="text-cyan text-[16px] md:text-[24px] font-bold uppercase">
                CÔNG TY CỔ PHẦN CHC (Central Human Capital)
              </span>
            </p>
          </div>
          <div className="mt-3">
            <p className="text-white leading-[1.6]">
              Lưu ý: <br />* Nội dung thanh toán:{" "}
              <span className="text-[#FFA678]">
                tencongty/tennguoithamdu_Số điện thoại_PBC30
              </span>{" "}
              <br />* Vé Planning Bootcamp không được <strong>HỦY </strong>/{" "}
              <strong>HOÀN TRẢ</strong> hoặc <strong>CHUYỂN</strong> sang các kỳ
              PBC khác.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ticket;
