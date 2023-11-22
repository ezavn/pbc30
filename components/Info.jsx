import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/variants";
import Image from "next/image";

function Info() {
  return (
    <section className="pb-32 bg-darkBlue md:pt-section pt-sectionMB">
      <motion.div
        variants={staggerContainer(0.3, 1)}
        initial="hidden"
        whileInView={"show"}
        className="page-container max-w-[1240px] flex flex-col items-center justify-center"
      >
        <motion.div variants={fadeIn("down", "tween", 0.4, 1.1)}>
          <Image
            width={977}
            height={110}
            src="/images/info-heading.svg"
            alt=""
          />
        </motion.div>
        <div className="relative flex flex-col items-start justify-between w-full mt-10 md:mt-16 gap-y-10 md:flex-row lg:mt-28">
          <motion.div
            variants={fadeIn("right", "tween", 0.6, 1.4)}
            className="flex flex-col items-center justify-center flex-1 w-full"
          >
            <h3 className="mb-4 text-2xl font-bold uppercase md:text-3xl md:mb-10 text-orange2">
              Thời gian
            </h3>
            <div>
              <Image
                className="w-[250px] md:w-[417px]"
                width={417}
                height={105}
                src="/images/info1.png"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", "tween", 0.6, 1.4)}
            className="flex flex-col items-center justify-center flex-1 w-full"
          >
            <h3 className="mb-4 text-2xl font-bold uppercase md:text-3xl md:mb-10 text-orange2">
              Địa điểm
            </h3>
            <div className="text-center text-white">
              <h4 className="text-xl font-bold uppercase md:text-2xl mb-5">
                Khách Sạn Mường Thanh Luxury Đà Nẵng
              </h4>
              <p className="text-lg font-light lg:text-2xl">
                270 Võ Nguyên Giáp, Phường Bắc Mỹ Phú, Quận Ngũ Hành Sơn, TP Đà
                Nẵng
              </p>
            </div>
          </motion.div>
          <div className="hidden absolute top-[270px] md:top-[130px] lg:-top-[60px] left-[50%] translate-x-[-50%]">
            <Image
              className="w-[250px] lg:w-[561px]"
              width={561}
              height={381}
              src="/images/dragon.png"
              alt=""
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Info;
