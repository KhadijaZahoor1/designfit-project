import React from "react";

const BlackBtn = (prop) => {
  return (
    <>
      <div className="readybtn inline-block">
        <button className="uppercase bg-pantone1 py-3 px-8 rounded-br-[40px] text-[14px] leading-[16px] text-white font-Marcellus font-normal">
          {prop.btnText}
        </button>
      </div>
    </>
  );
};

export default BlackBtn;
