import React from "react";
import Slider from "react-slick";
import { collection2 } from "@/data";
import Image from "next/image";

function Collection2() {
  var setting = {
    centerMode: true,
    infinite: true,
    centerPadding: "250px",
    slidesToShow: 3,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "180px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          centerPadding: "10px",
        },
      },
    ],
  };
  return (
    <div className="overflow-x-hidden collection2">
      <Slider {...setting}>
        {collection2.map((collection) => {
          return (
            <div className="px-1 md:px-2" key={collection.id}>
              <Image width={347} height={196} src={collection.image} alt="" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Collection2;
