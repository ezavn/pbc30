import React from "react";
import { missionSlider, missionData } from "@/data";
import Slider from "react-slick";
import Image from "next/image";

function Mission() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="bg-darkBlue py-sectionMB md:py-section">
      <div className="page-container flex flex-col lg:flex-row items-center justify-between max-w-[1098px]">
        <div className="flex flex-col items-center justify-center flex-1">
          <div className="relative mb-6 lg:mb-8 w-fit">
            <p className="text-gra text-[120px] md:text-[200px] font-extrabold w-fit leading-[1]">
              29
            </p>
            <p className="absolute bottom-0 -right-2 border-b-white border-b text-right pr-4 w-[80px] md:w-[140px] text-xl md:text-4xl font-black text-white">
              KỲ
            </p>
            <Image
              className="w-[80px] md:w-[128px] absolute -top-[15px] left-5 md:-top-[30px] md:left-[25px] mix-blend-screen"
              width={128}
              height={108}
              src="/icons/star1.svg"
              alt=""
            />
          </div>
          <p className="text-xl font-bold text-center text-white md:text-3xl w-fit">
            PLANNING BOOTCAMP{" "}
            <span className="block text-orange">TỔ CHỨC THÀNH CÔNG</span>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center flex-1">
          <div className="relative mb-6 lg:mb-8 w-fit">
            <p className="text-gra text-[120px] md:text-[200px] font-extrabold w-fit leading-[1]">
              4000
            </p>
            <p className="absolute top-9 -left-4 border-b-white border-b text-left pl-1 w-[80px] md:w-[140px] text-xl md:text-4xl font-black text-white">
              HƠN
            </p>
            <Image
              className="absolute -left-[70px] -bottom-[5px] md:-left-[120px] md:-bottom-[10px] mix-blend-screen"
              width={480}
              height={59}
              src="/icons/star2.svg"
              alt=""
            />
          </div>
          <p className="text-xl font-bold text-center text-white md:text-3xl w-fit">
            CHỦ DOANH NGHIỆP & ĐỘI NGŨ NHÂN VIÊN
            <span className="text-orange"> THAM GIA</span>
          </p>
        </div>
        <div></div>
      </div>
      <div className="my-8 md:my-16 mission-slider">
        <Slider {...settings}>
          {missionSlider.map((mission) => {
            return (
              <div className="px-3 outline-none" key={mission.id}>
                <Image
                  width={420}
                  height={242}
                  src={mission.image}
                  alt="mission slider"
                />
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="page-container max-w-[1636px] flex flex-col lg:flex-row gap-8 lg:gap-5">
        <div className="relative flex-1">
          <Image
            width={1039}
            height={312}
            src="/images/heading-bg.svg"
            alt=""
          />
          <Image
            className="absolute top-0 left-[50%] translate-x-[-50%]"
            width={792}
            height={134}
            src="/images/heading-1.svg"
            alt=""
          />
          <Image
            className="mix-blend-screen absolute top-[66px] md:top-[140px] left-[50%] translate-x-[-50%]"
            width={900}
            height={132}
            src="/icons/star3.svg"
            alt=""
          />
        </div>
        <div className="w-full lg:max-w-[600px] flex-shrink-0">
          {missionData.map((item) => {
            return (
              <div
                key={item.id}
                className="flex items-start gap-5 mb-5 md:mb-7"
              >
                <Image
                  className="mt-[7px] w-6 md:w-8 lg:w-[53px]"
                  width={53}
                  height={37}
                  src={item.icon}
                  alt=""
                />
                <span className="text-lg font-bold text-white md:text-xl lg:text-3xl">
                  {item.content}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Mission;
