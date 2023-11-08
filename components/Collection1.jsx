import React from "react";
import Slider from "react-slick";
import { collection1 } from "@/data";
import Image from "next/image";

function Collection1() {
  var setting = {
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 4,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerPadding: "100px",
        },
      },
    ],
  };
  return (
    <div className="mb-1 overflow-x-hidden collection1">
      <Slider {...setting}>
        {collection1.map((collection) => {
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

export default Collection1;
