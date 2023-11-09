import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { coachData } from "@/data";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/variants";

function Coach() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
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
    <section id="coach" className="bg-darkBlue md:py-section py-sectionMB">
      <motion.div
        variants={staggerContainer(0.3, 1)}
        initial="hidden"
        whileInView={"show"}
        className="page-container max-w-[1375px]"
      >
        <div className="flex flex-col items-center justify-center">
          <motion.h3
            variants={fadeIn("down", "tween", 0.4, 1.1)}
            className="mt-3 text-xl font-bold text-white"
          >
            Với sự tham gia của
          </motion.h3>
          <motion.div variants={fadeIn("down", "tween", 0.2, 1.1)}>
            <Image
              width={1293}
              height={153}
              src="/images/coach-heading.svg"
              alt=""
            />
          </motion.div>
          <Image
            className="mt-2 star-light mix-blend-screen"
            width={924}
            height={94}
            src="/icons/star6.svg"
            alt=""
          />
        </div>
        <div className="coach-slider">
          <Slider {...settings}>
            {coachData.map((item) => {
              return (
                <div className="px-2 outline-none" key={item.id}>
                  <Image
                    width={254}
                    height={258}
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="flex flex-col items-center justify-center mt-4 text-white">
                    <h3 className="font-sans text-sm font-semibold text-center md:text-lg">
                      {item.name}
                    </h3>
                    <p className="text-sm md:text-base">{item.position}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </motion.div>
    </section>
  );
}

export default Coach;
