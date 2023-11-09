"use client";
import Image from "next/image";
import React from "react";
import { aboutData } from "@/data";
import { usePopup } from "@/context/popupContext";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/variants";

function About() {
  const { setShowPopup } = usePopup();
  return (
    <section className="bg-[#01011E] pt-5 pb-10 md:pb-14">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="page-container max-w-[1290px] flex-col lg:flex-row flex gap-5 md:gap-14 xl:items-start items-center"
      >
        <motion.div
          variants={fadeIn("down", "tween", 0.2, 2)}
          className="relative flex-1 w-full"
        >
          <Image
            width={619}
            height={468}
            className="object-cover w-full h-full rounded-xl"
            src="/images/about-bg.png"
            alt="about"
          />
          <span className="cursor-pointer inline-flex absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <Image
              width={130}
              height={130}
              onClick={() => setShowPopup(true)}
              src="/icons/player-icon.svg"
              alt="player"
            />
          </span>
        </motion.div>
        <motion.div
          variants={fadeIn("down", "tween", 0.2, 2)}
          className="flex-col flex-1 font-semibold text-justify text-black lg:flex-row md:text-left"
        >
          <motion.div
            variants={fadeIn("up", "tween", 0.4, 1.1)}
            className="flex items-center mb-[30px]"
          >
            <h2 className="text-white text-[38px] md:text-[64px] font-bold leading-[40px] md:leading-[50px] uppercase">
              Planning <br /> Bootcamp
            </h2>
            <div className="relative leading-[30px] md:leading-[50px]">
              <h2 className="text-stroke font-extrabold text-[80px] md:text-[128px] text-[#01011E]">
                30
              </h2>
            </div>
          </motion.div>
          <p className="mb-5 font-bold leading-7 text-white">
            Planning Bootcamp (PBC) là chương trình huấn luyện{" "}
            <span className="uppercase text-orange">
              LẬP KẾ HOẠCH HÀNH ĐỘNG & PHÁT TRIỂN BẢN THÂN
            </span>{" "}
            dành cho Chủ Doanh nghiệp & đội ngũ được tổ chức định kỳ 03 tháng/01
            lần.
          </p>
          {aboutData.map((item) => {
            return (
              <div key={item.id} className="flex items-start gap-5 mb-2">
                <Image
                  width={17}
                  height={12}
                  className="mt-[7px]"
                  src={item.icon}
                  alt=""
                />
                <span className="text-base font-semibold text-white">
                  {item.content}
                </span>
              </div>
            );
          })}
          <p className="mt-5 font-semibold leading-7 text-white">
            ActionCOACH CBD Firm không ngừng nâng cấp & đổi mới nội dung chương
            trình nhằm đem đến những trải nghiệm tuyệt vời nhất cho các Chủ
            doanh nghiệp và Đội ngũ khi tham dự Chương trình huấn luyện Planning
            Bootcamp.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
