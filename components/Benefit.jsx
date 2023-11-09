import Image from "next/image";
import React from "react";
import { benefitData } from "@/data";

function Benefit() {
  return (
    <section
      id="benefit"
      className="pb-20 bg-darkBlue pt-sectionMB md:pt-section md:pb-28"
    >
      <div className="page-container max-w-[1095px] flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <Image width={729} height={115} src="/images/heading-5.svg" alt="" />
          <Image
            className="mt-2 star1 md:mt-5 mix-blend-screen"
            width={924}
            height={94}
            src="/icons/star6.svg"
            alt=""
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-20 lg:gap-y-24">
          {benefitData.map((item) => {
            return (
              <div className="relative boxed" key={item.id}>
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Benefit;
