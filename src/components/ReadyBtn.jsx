import React from "react";
import { Link } from "react-router-dom";
const ReadyBtn = (prop) => {
  return (
    <div className="readybtn inline-block">
      <button className="uppercase bg-palm py-3 px-8 rounded-br-[40px] text-[14px] leading-[16px] text-white font-Marcellus font-normal">
        <Link to="/project">{prop.btnText}</Link>
      </button>
    </div>
  );
};

export default ReadyBtn;
