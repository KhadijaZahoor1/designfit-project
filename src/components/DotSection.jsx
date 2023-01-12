import React from "react";
import Ready from "../components/Ready";
import ReadyBtn from "../components/ReadyBtn";

const DotSection = ({ text }) => {
  const btnText = "Get Started";

  return (
    <>
      <div className="lg:container lg:mx-auto lg:px-[125px] sm:px-[30px] my-[100px]">
        <Ready text={text} />
        <div className="flex justify-center -mt-[24px]">
          <div className="bg-white lg:w-[20%] sm:w-[50%] flex justify-center">
            <ReadyBtn btnText={btnText} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DotSection;
