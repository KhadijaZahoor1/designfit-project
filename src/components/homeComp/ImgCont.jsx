import React from "react";
import retailImg from "../../assests/images/point1.png";
import offcImg from "../../assests/images/point2.png";
import fBImg from "../../assests/images/point3.png";

const ImgContData = [
  {
    img: retailImg,
    title: "Retail & Hospitality",
    detail:
      "We create retail places optimized to provide premium customer experiences with designs that stand out from the competition.",
  },
  {
    img: offcImg,
    title: "Office",
    detail:
      "We create retail places optimized to provide premium customer experiences with designs that stand out from the competition.",
  },
  {
    img: fBImg,
    title: "F&B",
    detail:
      "We create retail places optimized to provide premium customer experiences with designs that stand out from the competition.",
  },
];

export const ImgCont = () => {
  return (
    <>
      {ImgContData.map((item, index) => {
        const { img, title, detail } = item;
        return (
          <div key={index} className="relative">
            <span className="absolute left-0 top-0 w-full h-full boxShadow"></span>
            <img
              src={img}
              alt=""
              className="lg:min-h-[100%] sm:h-[420px] sm:w-full"
            />
            <div
              className="absolute bottom-[30px] lg:px-[80px] sm:px-[30px] hover:top-[25%] hover:bottom-0 bglg"
              data-aos="zoom-out"
              data-aos-duration="1000"
            >
              <h3 className="lg:text-[60px] lg:leading-[70px] sm:text-[32px] sm:leading-[40px] font-Marcellus font-normal text-white">
                {title}
              </h3>
              <hr className="w-[50px] h-[1px] text-white opacity-[0.5] sm:hidden" />
              <p className="lg:text-[18px] lg:leading-[25px] sm:text-[14px] sm:leading-[18px] text-white font-Mulish font-light mt-[20px]">
                {detail}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};
