import React from "react";

const PalmBtn = (prop) => {
  return (
    <>
      <div className="bg-vectorWhite bg-right-bottom bg-no-repeat inline-block">
        <button className="uppercase bg-palm py-3 px-8 rounded-br-[40px] text-[14px] leading-[16px] text-white font-Marcellus font-normal">
          {prop.btnText}
        </button>
      </div>
    </>
  );
};
export default PalmBtn;
