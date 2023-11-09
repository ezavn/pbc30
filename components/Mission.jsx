import React from "react";
import { missionSlider, missionData } from "@/data";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/variants";

function Mission() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
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
    <section id="mission" className="bg-darkBlue py-sectionMB md:py-section">
      <motion.div
        variants={staggerContainer(0.3, 1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="page-container flex flex-col lg:flex-row items-center justify-between max-w-[1098px]"
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1.1)}
          className="flex flex-col items-center justify-center flex-1 mix-blend-screen"
        >
          <div className="relative mb-6 lg:mb-8 w-fit">
            <p className="text-gra text-[120px] md:text-[200px] font-extrabold w-fit leading-[1]">
              29
            </p>
            <p className="absolute bottom-0 -right-2 border-b-white border-b text-right pr-4 w-[80px] md:w-[140px] text-xl md:text-4xl font-black text-white">
              KỲ
            </p>
            <Image
              className="star1 w-[80px] md:w-[128px] absolute -top-[15px] left-5 md:-top-[30px] md:left-[25px] mix-blend-screen"
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
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1.1)}
          className="flex flex-col items-center justify-center flex-1 mix-blend-screen"
        >
          <div className="relative mb-6 lg:mb-8 w-fit">
            <p className="text-gra text-[120px] md:text-[200px] font-extrabold w-fit leading-[1]">
              4000
            </p>
            <p className="absolute top-9 -left-4 border-b-white border-b text-left pl-1 w-[80px] md:w-[140px] text-xl md:text-4xl font-black text-white">
              HƠN
            </p>
            <Image
              className="star2 absolute -left-[70px] -bottom-[5px] md:-left-[120px] md:-bottom-[10px] mix-blend-screen"
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
        </motion.div>
        <div></div>
      </motion.div>
      <div className="my-8 md:my-16 mission-slider">
        <Slider {...settings}>
          {missionSlider.map((mission) => {
            return (
              <div className="px-1 outline-none md:px-3" key={mission.id}>
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
      <motion.div
        variants={staggerContainer(0.3, 1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="page-container max-w-[1636px] flex flex-col lg:flex-row gap-8 lg:gap-5"
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1.5)}
          className="relative flex-1 mix-blend-screen"
        >
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
            className="star-light mix-blend-screen absolute top-[66px] md:top-[140px] left-[50%] translate-x-[-50%]"
            width={900}
            height={132}
            src="/icons/star3.svg"
            alt=""
          />
        </motion.div>
        <div className="w-full lg:max-w-[600px] flex-shrink-0">
          {missionData.map((item, index) => {
            return (
              <motion.div
                variants={fadeIn("up", "tween", 0.4 + index / 5, 1.6)}
                key={item.id}
                className="flex items-start gap-5 mb-5 md:mb-7"
              >
                <Image
                  className="mt-[7px] w-6 md:w-8 lg:w-[30px]"
                  width={53}
                  height={37}
                  src={item.icon}
                  alt=""
                />
                <span className="text-lg font-bold text-white md:text-xl">
                  {item.content}
                </span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

export default Mission;
