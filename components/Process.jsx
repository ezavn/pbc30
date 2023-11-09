import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/variants";

function Process() {
  return (
    <section className="bg-[#141159] md:py-section py-sectionMB overflow-x-hidden">
      <motion.div
        variants={staggerContainer(0.3, 1)}
        initial="hidden"
        whileInView={"show"}
        className="page-container max-w-[1485px] flex flex-col items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center">
          <motion.div variants={fadeIn("down", "tween", 0.2, 1.1)}>
            <Image
              width={722}
              height={187}
              src="/images/process-heading.svg"
              alt=""
            />
          </motion.div>
          <Image
            className="mt-2 star-light md:mt-5 mix-blend-screen"
            width={924}
            height={94}
            src="/icons/star6.svg"
            alt=""
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-5 md:gap-x-24 lg:gap-x-14 gap-y-8">
          <ProcessItem img="/images/process1.svg" width={239} height={179}>
            Đánh giá <span className="text-orange">HIỆN TRẠNG</span> <br />
            của Doanh nghiệp
          </ProcessItem>
          <ProcessItem img="/images/process2.svg" width={117} height={138}>
            Tìm hiểu
            <br />
            <span className="text-orange">NGUYÊN NHÂN</span>
            <br />
            dẫn đến Hiện trạng
          </ProcessItem>
          <ProcessItem img="/images/process3.svg" width={129} height={139}>
            Thiết lập
            <br />
            <span className="text-orange">MỤC TIÊU</span>
          </ProcessItem>
          <ProcessItem img="/images/process4.svg" width={142} height={181}>
            Xác định
            <br />
            <span className="text-orange">CHIẾN LƯỢC</span>
          </ProcessItem>
          <ProcessItem img="/images/process5.png" width={110} height={161}>
            Lập
            <br /> <span className="text-orange">KẾ HOẠCH</span>
          </ProcessItem>
          <ProcessItem
            img="/images/process6.svg"
            width={139}
            height={178}
            noArrow
          >
            <span className="text-orange">THỰC THI</span> <br />
            kế hoạch
          </ProcessItem>
        </div>
      </motion.div>
    </section>
  );
}

const ProcessItem = ({ img, children, width, height, noArrow }) => {
  return (
    <div className="relative flex flex-col items-center">
      <motion.div
        initial={{ scale: 0.5 }}
        whileInView={{
          scale: 1,
          transition: {
            duration: 0.7,
            ease: [0.12, 0, 0.39, 0],
          },
        }}
        className="h-[180px]"
      >
        <Image width={width} height={height} src={img} alt="" />
      </motion.div>
      <motion.p
        variants={fadeIn("down", "tween", 0.2, 1)}
        initial="hidden"
        whileInView={"show"}
        className="text-sm font-bold text-white md:text-base lg:text-lg"
      >
        {children}
      </motion.p>
      {!noArrow && (
        <Image
          className="w-[60px] md:block hidden absolute bottom-[12px] -right-[80px] lg:-right-[60px]"
          width={82}
          height={77}
          src="/icons/arrow-stroke-icon.svg"
          alt=""
        />
      )}
    </div>
  );
};

export default Process;
