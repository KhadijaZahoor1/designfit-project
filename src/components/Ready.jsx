import React from "react";

const Ready = (prop) => {
  return (
    <>
      <div className="border-gray border-[5px] lg:rounded-l-[240px] lg:rounded-r-[240px] sm:rounded-[40px] grid justify-center gap-y-[50px] afterimg beforeimg py-[30px] sm:h-[130px] lg:h-[170px]">
        <div className="lg:-mt-[62px] sm:-mt-[52px] lg:w-[470px] sm:w-[270px]">
          <h1 className="lg:text-[50px] lg:leading-[60px] sm:text-[30px] sm:leading-[30px] text-pantone1 font-Marcellus font-normal text-center bg-white">
            {prop.text}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Ready;
