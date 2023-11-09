/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

function Active() {
  return (
    <section className="relative md:py-section py-sectionMB bg-[url('/images/active-bg.png')]">
      <div className="page-container max-w-[1304px]">
        <div className="flex flex-col items-center justify-center">
          <Image
            width={729}
            height={115}
            src="/images/active-heading.svg"
            alt=""
          />
          <h3 className="mt-3 text-xl font-bold text-white">có những gì?</h3>
          <Image
            className="mt-2 star1 mix-blend-screen"
            width={924}
            height={94}
            src="/icons/star6.svg"
            alt=""
          />
        </div>
        <div className="grid lg:grid-cols-2 gap-x-12 gap-y-10">
          <ActiveItem img="/images/active1.png">
            Hoạt động <br /> Buổi sáng ngoài trời
          </ActiveItem>
          <ActiveItem
            img="/images/active2.png"
            desc="RoundTable là phần chia sẻ mang tính chuyên sâu, thực chiến của các Nhà Huấn luyện Doanh nghiệp của CBD Firm và các Chủ doanh nghiệp đang là khách hàng của CBD Firm về các vấn đề mà nhiều Doanh nghiệp đang phải đối mặt."
          >
            Roundtable
          </ActiveItem>
          <ActiveItem active img="/images/active3.png">
            Chuyên đề <br />
            <span className="block mb-3 text-orange">"Get A Big Dream"</span>
            Giúp Chủ doanh nghiệp xây dựng GIẤC MƠ LỚN và biến nó thành hiện
            thực.
          </ActiveItem>
          <ActiveItem img="/images/active4.png">
            Gala mừng chiến thắng vượt qua năm 2023 cùng nhau
          </ActiveItem>
        </div>
      </div>
    </section>
  );
}

const ActiveItem = ({ children, desc, img, active }) => {
  return (
    <div
      className={`${
        active ? "border-[#BE8D3B]" : "border-white"
      } border-[2px] border-solid justify-between rounded-[20px] flex flex-col-reverse md:flex-row items-start py-5 px-6 gap-4 md:gap-12 flex-1`}
    >
      <div className="text-white md:mt-14">
        <div className="text-xl font-bold">{children}</div>
        {desc && <p className="mt-3 md:mt-6">{desc}</p>}
      </div>
      <div className="w-full md:w-[275px] flex-shrink-0">
        <Image
          className="w-full h-[240px] object-cover md:w-[275px] md:h-[356px]"
          width={275}
          height={356}
          src={img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Active;
