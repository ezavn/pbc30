import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="bg-[#050333] md:py-section py-sectionMB">
      <div className="page-container max-w-[1000px] flex gap-y-6 flex-col md:flex-row items-end text-white">
        <div className="md:mr-5 lg:mr-10">
          <Image
            width={383}
            height={169}
            src={`/images/cbd-logo-footer.png`}
            alt="actioncoachCBD"
          ></Image>
          <div className="pr-5 text-right">
            <h3 className="text-lg font-bold">ActionCOACH CBD FIRM</h3>
            <p>Firm Huấn luyện doanh nghiệp số 1 Việt Nam</p>
          </div>
        </div>
        <div className="md:border-l border-l-[#D9D9D9] md:pl-8 lg:pl-14 pb-2">
          <div className="mb-3">
            <span className="block">Địa chỉ:</span>{" "}
            <span className="font-bold">
              Tầng 15 Tháp B Tòa nhà Viettel,{" "}
              <br className="hidden md:block lg:hidden" /> 285 Cách Mạng Tháng
              Tám, <br className="hidden lg:block" />
              Phường 12, Quận 10, Tp. Hồ Chí Minh
            </span>
          </div>
          <div className="mb-3">Email: info@actioncoachcbd.com</div>
          <div>
            Hotline: <span>1800 8087 (phím 4)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
