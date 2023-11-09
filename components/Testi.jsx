import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { testiData } from "@/data";

function Testi() {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
    <section className="pt-10 pb-3 md:py-10 bg-darkBlue">
      <div className="page-container max-w-[1300px]">
        <div className="flex flex-col items-center justify-center">
          <Image
            width={927}
            height={188}
            src="/images/testi-heading.svg"
            alt=""
          />
          <Image
            className="mt-2 star1 md:mt-5 mix-blend-screen"
            width={924}
            height={94}
            src="/icons/star6.svg"
            alt=""
          />
        </div>
        <div className="testi-slider">
          <Slider {...settings}>
            {testiData.map((item) => {
              return (
                <div
                  className="!inline-flex md:flex-row flex-col gap-x-4 px-3 md:px-12"
                  key={item.id}
                >
                  <div className="w-full md:w-[140px] h-[140px] relative">
                    <div className="flex items-center justify-center md:absolute md:-bottom-[45px] md:-left-[45px]">
                      <Image
                        width={114}
                        height={114}
                        alt=""
                        src={item.avatar}
                      />
                    </div>
                    <div className="hidden md:block w-[140px] h-[140px] relative">
                      <Image
                        width={49}
                        height={49}
                        src="/icons/union-icon.svg"
                        alt=""
                      />
                      <Image
                        className="absolute bottom-0 right-0"
                        width={49}
                        height={49}
                        src="/icons/union-icon.svg"
                        alt=""
                      />
                    </div>
                    <div></div>
                  </div>
                  <div className="relative flex flex-col justify-between text-white">
                    <div className="hidden md:block absolute top-0 -left-[70px]">
                      <Image
                        width={54}
                        height={46}
                        alt=""
                        src="/icons/quote-icon2.svg"
                      />
                    </div>
                    <div className="absolute bottom-0 right-0 block md:hidden">
                      <Image
                        width={54}
                        height={46}
                        alt=""
                        src="/icons/quote-icon2.svg"
                      />
                    </div>
                    <p className="mb-5 text-justify leading-[1.6]">
                      {item.desc}
                    </p>
                    <div className="relative z-10">
                      <h3 className="font-bold uppercase">{item.name}</h3>
                      <p className="text-sm">{item.company}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Testi;
