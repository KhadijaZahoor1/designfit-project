import React from "react";
import { Link } from "react-router-dom";

const HeroMain = ({
  heading,
  line,
  img,
  icon,
  map,
  socialCont1,
  socialCont2,
  socialCont3,
  detail1,
  detail2,
  detail3,
}) => {
  return (
    <>
      <div className="flex sm:flex-col bg-white h-[630px]">
        <div className="lg:w-[40%]">
          <div className="lg:pt-[150px] lg:pl-[250px] sm:py-[60px] sm:px-[50px]">
            <Link to="/contact">
              {" "}
              <h1 className="text-[50px] leading-[60px] text-pantone1 font-Marcellus font-normal">
                {heading}
              </h1>
            </Link>
            <p className="text-[18px] leading-[24px] font-Mulish font-normal text-pantone1 mt-[23px]">
              {line}
            </p>
          </div>
        </div>
        <div className="lg:w-[60%] relative">
          <span className="absolute -left-[18px] top-[22px] w-full h-full bg-white opacity-[0.03] rounded-bl-[180px]"></span>
          <img
            alt="trendy"
            src={img}
            className="lg:rounded-bl-[180px] sm:rounded-bl-[140px] lg:pl-0 sm:pl-6 sm:h-[350px] object-cover w-full lg:h-full"
          />
        </div>
      </div>
      <div className="bg-black lg:pt-[50px] sm:pt-[150px] pb-[0px]  lg:-mt-[150px] sm:-mt-[150px]">
        <div className="container mx-auto lg:px-[110px] sm:px-[0px]">
          <img src={icon} alt="icon" className="sm:hidden" />
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-1 mt-[50px] sm:px-[25px] sm:gap-[40px]">
          <div className="grid lg:place-content-center">
            <Link to="/joinus">
              {" "}
              <h3 className="text-[14px] leading-[16px] font-Mulish font-semibold text-white opacity-[0.5]">
                {socialCont1}
              </h3>
            </Link>
            <p className="text-[18px] leading-[20px] font-Mulish font-bold text-white mt-3">
              {detail1}
            </p>
          </div>
          <div className="grid lg:place-content-center">
            <h3 className="text-[14px] leading-[16px] font-Mulish font-semibold text-white opacity-[0.5]">
              {socialCont2}
            </h3>
            <p className="text-[18px] leading-[20px] font-Mulish font-bold text-white mt-3">
              {detail2}
            </p>
          </div>
          <div className="grid lg:place-content-center">
            <h3 className="text-[14px] leading-[16px] font-Mulish font-semibold text-white opacity-[0.5]">
              {socialCont3}
            </h3>
            <p className="text-[18px] leading-[20px] font-Mulish font-bold text-white mt-3">
              {detail3}
            </p>
          </div>
          <div className="lg:pr-5">
            <img alt="map" src={map} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroMain;
