import React from "react";
import { Link } from "react-router-dom";
import PalmBtn from "./homeComp/PalmBtn";

export const HeroSection = ({
  heading,
  line,
  img,
  title,
  detail,
  icon,
  btnText = "",
  showBtn = true,
}) => {
  return (
    <>
      <div className="flex sm:flex-col bg-white h-[630px]">
        <div className="lg:w-[40%]">
          <div
            className="lg:pt-[150px] lg:pl-[250px] sm:py-[60px] sm:px-[50px]"
            data-aos="fade-right"
          >
            <h1 className="text-[50px] leading-[60px] text-pantone1 font-Marcellus font-normal">
              {heading}
            </h1>
            <p className="text-[18px] leading-[24px] font-Mulish font-normal text-pantone1 mt-[23px]">
              {line}
            </p>
          </div>
        </div>
        <div className="lg:w-[60%] relative" data-aos="fade-left">
          <span className="absolute lg:-left-[18px] sm:left-[-5px] top-[22px] w-full h-full bg-white opacity-[0.03] lg:rounded-bl-[180px] sm:rounded-bl-[130px]"></span>
          <img
            alt="trendy"
            src={img}
            className="lg:rounded-bl-[180px] sm:rounded-bl-[110px] lg:pl-0 sm:pl-6 sm:h-[350px] object-cover lg:h-full w-full"
          />
        </div>
      </div>
      <div className="bg-black lg:pt-[50px] sm:pt-[150px] pb-[100px] lg:px-[200px] sm:px-[50px]  lg:-mt-[150px] sm:-mt-[130px]">
        <div className="container mx-auto lg:px-[50px] sm:px-0">
          <Link to="/project" data-aos="fade-up">
            <img src={icon} alt="icon" className="sm:hidden" />
          </Link>
          <h3
            data-aos="fade-up"
            data-duration="1000"
            className="lg:text-[33px] lg:leading-[38px] sm:text-[20px] sm:leading-[26px] text-white font-Mulish font-bold mt-[50px] "
          >
            {title}
          </h3>
          <p
            data-aos="fade-up"
            data-duration="1000"
            className="text-[14px] leading-[24px] font-Mulish font-normal text-white opacity-[0.5] mt-[20px]"
          >
            {detail}
          </p>
          {showBtn ? (
            <div className="mt-[40px]">
              <PalmBtn btnText={btnText} />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};
