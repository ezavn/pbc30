/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import { journeyData } from "@/data";
import BlockContent from "./BlockContent";
import Slider from "react-slick";

function Journey() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    slidesToShow: 2,
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
          slidesToShow: 3,
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
    <section className="relative bg-[#0D0C30] pt-10 lg:pt-2">
      <div className="page-container max-w-[1670px] mb-10">
        <p className="text-base text-center text-white md:text-lg lg:text-xl">
          "Đã mơ thì mơ hẳn tới những vì sao, nhưng hãy để đôi chân trụ vững
          dưới mặt đất"
        </p>
        <Image
          className="mt-2 lg:mt-4 lg:ml-[220px] mb-10 lg:mb-16"
          width={1055}
          height={113}
          src="/images/heading-4.svg"
          alt=""
        />
        <div className="relative hidden mx-5 w-fit lg:block">
          <div className="absolute top-10 w-full h-[2px] bg-blue"></div>
          <div className="relative z-10 flex">
            {journeyData.map((item) => {
              return (
                <div key={item.id} className="flex items-start flex-1">
                  <div className="w-[72px] flex-shrink-0">
                    <Image
                      className="w-full h-full"
                      width={72}
                      height={409}
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <div className="flex flex-col flex-1 gap-4 mt-16 text-white">
                    <h4 className="text-xl font-bold">{item.title}</h4>
                    <p className="text-base">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="block journey-slider lg:hidden">
          <Slider {...settings}>
            {journeyData.map((item) => {
              return (
                <div
                  key={item.id}
                  className="!flex flex-col gap-2 items-start px-2 md:px-3"
                >
                  <Image
                    width={40}
                    height={40}
                    src={item.image2}
                    alt={item.title}
                  />
                  <div className="flex flex-col gap-4 text-white">
                    <h4 className="text-sm font-bold md:text-base">
                      {item.title}
                    </h4>
                    <p className="text-sm text-justify">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <BlockContent>
        Hãy đến với PBC 30 và tham gia cùng chúng tôi trong hành trình xây dựng
        Giấc Mơ của bạn và biến nó <br className="hidden lg:block" /> thành hiện
        thực. Hãy dám nghĩ lớn, hãy dám mơ to, vì chỉ khi bạn tin vào khả năng
        của mình, bạn mới có <br className="hidden lg:block" /> thể làm nên điều
        lớn lao và thay đổi thế giới.
      </BlockContent>
    </section>
  );
}

export default Journey;
