import Image from "next/image";
import React, { useRef } from "react";
import { dreamData } from "@/data";
import Slider from "react-slick";
import BlockContent from "./BlockContent";

function Dream() {
  const slider = useRef(null);
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
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
    <div className="py-sectionMB md:py-section bg-[#141159]">
      <div className="page-container max-w-[1565px] px-[15px] relative">
        <div className="relative">
          <p className="md:py-5 lg:py-24 text-base md:text-2xl lg:text-3xl text-center text-orange leading-[1.6]">
            <span className="font-bold uppercase">Giấc mơ</span> luôn là động cơ
            & nguồn cảm hứng mạnh mẽ đằng sau sự thành công của mỗi doanh
            nghiệp. <br className="hidden lg:block" /> Nó như nguồn năng lượng
            vô tận, một chiếc la bàn dẫn lối cho doanh nghiệp tiến lên phía
            trước,
            <br className="hidden lg:block" /> cả trong những thời khắc khó khăn
            như hiện nay!
          </p>
          <Image
            className="w-[70px] md:w-[120px] lg:w-[180px] absolute top-[20px] left-[10px] md:top-[45px] md:left-0 lg:top-[125px] lg:left-[100px]"
            width={187}
            height={26}
            src="/icons/line1.svg"
            alt=""
          />
        </div>
        <Image
          className="w-[200px] md:w-[300px] lg:w-[498px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          width={498}
          height={340}
          src="/icons/quote-icon.svg"
          alt=""
        />
      </div>
      <div className="page-container max-w-[1550px] mb-9">
        <div className="dream-slider mt-11">
          <Slider {...settings} ref={slider}>
            {dreamData.map((item) => {
              return (
                <div
                  className="px-3 lg:px-5 outline-none h-auto lg:h-[720px] flex flex-col justify-between"
                  key={item.id}
                >
                  <Image width={749} height={499} src={item.image} alt="" />
                  <div className="flex flex-col mt-4">
                    <p className="text-base text-justify text-white lg:text-xl">
                      {item.desc}
                    </p>
                    <p className="mt-4 text-lg md:text-xl lg:text-3xl">
                      <span className="text-orange2">{item.name} </span>
                      <span className="text-white">{item.company}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
          <div className="flex items-center gap-3 mt-3 ml-3 md:ml-5 md:gap-6 md:mt-8">
            <div
              className="cursor-pointer"
              onClick={() => slider.current.slickPrev()}
            >
              <Image
                className="w-5 md:w-7 lg:w-11"
                width={44}
                height={41}
                src="/icons/arrow-icon.svg"
                alt=""
              />
            </div>
            <div
              className="cursor-pointer"
              onClick={() => slider.current.slickNext()}
            >
              <Image
                className="w-5 rotate-180 md:w-7 lg:w-11"
                width={44}
                height={41}
                src="/icons/arrow-icon.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <BlockContent>
        <div className="relative">
          <p className="relative z-10">
            Những câu chuyện này chứng minh rằng{" "}
            <br className="md:hidden block" />
            <span className="text-2xl lg:text-4xl">
              giấc mơ không giới hạn.
            </span>{" "}
            <br className="hidden lg:block" /> Dù bạn là một doanh nhân SMEs hay
            một tập đoàn đa quốc gia, giấc mơ có khả năng biến những ý tưởng
            tưởng <br className="hidden lg:block" /> chừng không thể thành hiện
            thực.
          </p>
          <Image
            className="w-[250px] lg:w-[360px] absolute z-0 top-[48px] left-0 md:top-[18px] md:left-[295px] lg:top-[20px] lg:left-[390px]"
            width={460}
            height={26}
            src="/icons/line2.svg"
            alt=""
          />
        </div>
      </BlockContent>
    </div>
  );
}

export default Dream;
