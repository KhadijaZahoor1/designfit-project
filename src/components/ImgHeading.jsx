import React from "react";

const ImgHeading = (props) => {
  return (
    <>
      {props.imgHeading.map((item, index) => {
        const { img, title, text } = item;
        return (
          <div className="relative" key={index}>
            <span className="absolute left-0 top-0 w-full h-full imgShadow"></span>
            <img src={img} alt="img" />
            <div className="absolute bottom-[20px] left-[30px]">
              <h3 className="text-[25px] leading-[30px] text-white font-Mulish font-normal">
                {title}
              </h3>
              <p className="text-[16px] leading-[20px] font-Mulish font-normal text-white opacity-[0.5] py-[10px]">
                {text}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ImgHeading;
