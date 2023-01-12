import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const tabsData = [
  {
    heading: "Construction",
    detail:
      "Dedicated industry experts will oversee the transition phase from design to construction, managing, quality, compliance, and budget as well as the key milestones that guarantee the successful completion of your project.",
  },
  {
    heading: "Design",
    detail:
      "Dedicated industry experts will oversee the transition phase from design to construction, managing, quality, compliance, and budget as well as the key milestones that guarantee the successful completion of your project.",
  },
  {
    heading: "Consulting",
    detail:
      "Dedicated industry experts will oversee the transition phase from design to construction, managing, quality, compliance, and budget as well as the key milestones that guarantee the successful completion of your project.",
  },
  {
    heading: "FFE",
    detail:
      "Dedicated industry experts will oversee the transition phase from design to construction, managing, quality, compliance, and budget as well as the key milestones that guarantee the successful completion of your project.",
  },
  {
    heading: "Reinstatements",
    detail:
      "Dedicated industry experts will oversee the transition phase from design to construction, managing, quality, compliance, and budget as well as the key milestones that guarantee the successful completion of your project.",
  },
  {
    heading: "IT/AV",
    detail:
      "Dedicated industry experts will oversee the transition phase from design to construction, managing, quality, compliance, and budget as well as the key milestones that guarantee the successful completion of your project.",
  },
];

const ConstTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);

  console.log(tabIndex);
  return (
    <>
      <div className="lg:container lg:mx-auto absolute top-0 left-0 right-0 lg:px-[100px] h-full flex lg:gap-[80px] sm:gap-[100px] sm:flex-col-reverse sm:pt-[60px]">
        <div className="lg:w-[30%] h-full">
          <ul className="text-[20px] leading-[24px] text-white font-Mulish font-normal list-none grid gap-5 h-full cursor-pointer backdrop-blur-sm bg-[rgba(29, 29, 27, 0.2)]">
            <li
              className="border-b border-b-white opacity-[0.7] flex items-center px-5 sm:justify-center"
              onClick={() => setTabIndex(0)}
            >
              <Link>Construction</Link>
            </li>
            <li
              className="border-b border-b-white opacity-[0.7] flex items-center px-5 sm:justify-center"
              onClick={() => setTabIndex(1)}
            >
              <Link>Design</Link>
            </li>
            <li
              className="border-b border-b-white opacity-[0.7] flex items-center px-5 sm:justify-center"
              onClick={() => setTabIndex(2)}
            >
              <Link>Consulting</Link>
            </li>
            <li
              className="border-b border-b-white opacity-[0.7] flex items-center px-5 sm:justify-center"
              onClick={() => setTabIndex(3)}
            >
              <Link>FFE</Link>
            </li>
            <li
              className="border-b border-b-white opacity-[0.7] flex items-center px-5 sm:justify-center"
              onClick={() => setTabIndex(4)}
            >
              <Link>Reinstatements</Link>
            </li>
            <li
              className=" opacity-[0.7] flex items-center px-5 sm:justify-center"
              onClick={() => setTabIndex(5)}
            >
              <Link>IT/AV</Link>
            </li>
          </ul>
        </div>
        <div className="lg:w-[70%] grid place-content-center animate-[fade_1s] slider-tran sm:px-5">
          <h1 className="text-[50px] leading-[60px] font-Marcellus font-normal text-white lg:text-center sm:text-left">
            {tabsData[tabIndex].heading}
          </h1>
          <p className="text-[18px] leading-[23px] font-Mulish font-normal text-white lg:text-center sm:text-left mt-[15px]">
            {tabsData[tabIndex].detail}
          </p>
        </div>
      </div>
    </>
  );
};

export default ConstTabs;
