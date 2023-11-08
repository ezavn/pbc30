import React, { useState } from "react";
import Image from "next/image";
import Bx from "wow-bx24";
import { FaTimesCircle } from "react-icons/fa";
import { usePopup } from "@/context/popupContext";

function RegisterPopup() {
  const { showRegister, setShowRegister } = usePopup();
  let f_rid = "968";
  let f_source = "WEBFORM";
  const f_query = window.location.search;
  if (f_query !== null && f_query !== "") {
    const search_value = window.location.search;
    const params = new URLSearchParams(search_value);
    f_source = "3";
    f_rid = params.get("rid");
  }
  const $bx = new Bx();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    product: "standard",
    sourceId: f_source,
    rid: f_rid,
    title: "CRM_FORM_PBC30",
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    $bx
      .call("crm.lead.add", {
        fields: {
          ...data,
          TITLE: data.title,
          NAME: data.name,
          EMAIL: [{ VALUE: data.email }],
          PHONE: [{ VALUE: data.phone, VALUE_TYPE: "WORK" }],
          COMPANY_TITLE: data.company,
          // POST: data.position,
          ASSIGNED_BY_ID: data.rid,
          SOURCE_ID: data.sourceId,
        },
      })
      .then((result) => {
        setLoading(false);
        alert(
          "Bạn đã đăng ký thành công! Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất."
        );
        if (data.product === "gold") {
          $bx.call("crm.lead.productrows.set", {
            id: result.result,
            rows: [
              {
                PRODUCT_ID: 16928,
                PRICE: 7200000,
                QUANTITY: 1,
                TAX_INCLUDED: "Y",
                TAX_RATE: 8,
              },
            ],
          });
        }
        if (data.product === "member") {
          $bx.call("crm.lead.productrows.set", {
            id: result.result,
            rows: [
              {
                PRODUCT_ID: 16930,
                PRICE: 8500000,
                QUANTITY: 1,
                TAX_INCLUDED: "Y",
                TAX_RATE: 8,
              },
            ],
          });
        }
        if (data.product === "standard") {
          $bx.call("crm.lead.productrows.set", {
            id: result.result,
            rows: [
              {
                PRODUCT_ID: 16932,
                PRICE: 16000000,
                QUANTITY: 1,
                TAX_INCLUDED: "Y",
                TAX_RATE: 8,
              },
            ],
          });
        }
        setData({
          ...data,
          name: "",
          email: "",
          phone: "",
          position: "",
          product: "standard",
        });
      })
      .catch((error) => {
        setLoading(false);
        alert("Đăng ký thất bại");
        console.log(error);
      });
  };
  {
  }
  return (
    <>
      {showRegister ? (
        <div className="fixed inset-0 z-[99999] bg-[url('/images/active-bg.png')] bg-center bg-cover overflow-y-auto py-28 lg:py-14">
          <div className="relative page-container max-w-[768px] flex items-center justify-center flex-col">
            <FaTimesCircle
              onClick={() => setShowRegister(false)}
              className="absolute top-0 cursor-pointer -top-12 md:-top-8 right-8"
              size={40}
              color="white"
            ></FaTimesCircle>
            <div className="relative">
              <Image
                width={635}
                height={776}
                alt=""
                src="/images/register-bg.png"
              />
              <form
                onSubmit={handleSubmit}
                className="absolute top-[100px] md:top-[183px] right-0 left-7"
              >
                <div className="flex flex-col gap-y-[9px] w-[88%]">
                  <div>
                    <input
                      className="px-5 md:px-[32px] rounded-[6px] bg-[#3F4274] text-white text-base md:text-xl outline-none w-full placeholder:text-base md:placeholder:text-xl placeholder:text-white h-[50px] md:h-[82px]"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Họ và tên"
                      required
                      value={data.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      className="px-5 md:px-[32px] rounded-[6px] bg-[#3F4274] text-white text-base md:text-xl outline-none w-full placeholder:text-base md:placeholder:text-xl placeholder:text-white h-[50px] md:h-[82px]"
                      id="email"
                      name="email"
                      placeholder="Email"
                      type="email"
                      value={data.email}
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      className="px-5 md:px-[32px] rounded-[6px] bg-[#3F4274] text-white text-base md:text-xl outline-none w-full placeholder:text-base md:placeholder:text-xl placeholder:text-white h-[50px] md:h-[82px]"
                      id="phone"
                      name="phone"
                      placeholder="Số điện thoại"
                      type="phone"
                      required
                      value={data.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      className="px-5 md:px-[32px] rounded-[6px] bg-[#3F4274] text-white text-base md:text-xl outline-none w-full placeholder:text-base md:placeholder:text-xl placeholder:text-white h-[50px] md:h-[82px]"
                      id="company"
                      name="company"
                      placeholder="Tên doanh nghiệp"
                      type="text"
                      value={data.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <select
                      className="px-5 md:px-[32px] rounded-[6px] bg-[#3F4274] text-white text-[16px] md:text-xl outline-none w-full h-[50px] md:h-[82px]"
                      id="product"
                      name="product"
                      onChange={handleChange}
                      required
                    >
                      <option value="standard">Vé Tiêu chuẩn</option>
                      <option value="member">Vé Member</option>
                      <option value="gold">Vé Gold Member</option>
                      {/* <option value="default">Loại vé*</option> */}
                    </select>
                    {/* {data.product === "default" ? (
                  <span className="text-red-700">Vui lòng chọn loại vé</span>
                ) : (
                  ""
                )} */}
                  </div>
                </div>
                <button
                  className="absolute -bottom-[70px] left-[12%] md:-bottom-[160px] md:left-[23%]"
                  type="submit"
                  disabled={loading}
                >
                  <Image
                    className="w-[200px] md:w-[271px]"
                    width={271}
                    height={72}
                    alt=""
                    src="/images/register-btn.png"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default RegisterPopup;
