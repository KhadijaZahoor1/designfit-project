import React from "react";
import quality from "../../assests/images/quality.png";
import creativity from "../../assests/images/creativity.png";
import innovaion from "../../assests/images/innovation.png";
import integrity from "../../assests/images/integrity.png";
import sustain from "../../assests/images/sustain.png";

const values = [
  {
    img: quality,
    title: "Quality",
  },
  {
    img: creativity,
    title: "Creativity",
  },
  {
    img: innovaion,
    title: "Innovaion",
  },
  {
    img: integrity,
    title: "Integrity",
  },
  {
    img: sustain,
    title: "Sustainability",
  },
];

export const ValuesPoint = () => {
  return (
    <>
      {values.map((item, index) => {
        const { img, title } = item;
        return (
          <div
            key={index}
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <img src={img} alt="" className="w-[60px] h-[60px] mx-auto" />
            <h3 className="mt-[50px] text-[18px] leading-[25px] text-white font-Mulish font-normal sm:text-center ">
              {title}
            </h3>
          </div>
        );
      })}
    </>
  );
};
