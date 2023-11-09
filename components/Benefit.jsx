import Image from "next/image";
import React from "react";
import { benefitData } from "@/data";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/variants";

function Benefit() {
  return (
    <section
      id="benefit"
      className="pb-20 bg-darkBlue pt-sectionMB md:pt-section md:pb-28"
    >
      <motion.div
        variants={staggerContainer(0.3, 1)}
        initial="hidden"
        whileInView={"show"}
        className="page-container max-w-[1095px] flex flex-col items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center">
          <motion.div variants={fadeIn("down", "tween", 0.2, 1.1)}>
            <Image
              width={729}
              height={115}
              src="/images/heading-5.svg"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-20 lg:gap-y-24">
          {benefitData.map((item, index) => {
            return (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    type: "spring",
                    duration: 1.8,
                    delay: 0.5 + index / 5,
                  },
                }}
                whileHover={{ scale: 1.05 }}
                className="relative boxed mix-blend-lighten bg-darkBlue"
                key={item.id}
              >
                <div className="text-lg font-medium text-center text-white lg:text-2xl boxed-child">
                  {item.content}
                </div>
                <Image
                  className="star3 w-[200px] md:w-[311px] mix-blend-screen absolute -bottom-16 md:-bottom-24 left-[50%] translate-x-[-50%]"
                  width={311}
                  height={242}
                  src="/icons/star7.svg"
                  alt=""
                />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

export default Benefit;
