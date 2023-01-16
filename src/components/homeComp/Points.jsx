import React from "react";
import PalmBtn from "./PalmBtn";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const content = [
  {
    title: "Our Consulting",
    detail:
      "A bespoke design and build interior fit-out company operating across the UAE",
  },
  {
    title: "Our Designing",
    detail:
      "A bespoke design and build interior fit-out company operating across the UAE",
  },
  {
    title: "Our Building",
    detail:
      "A bespoke design and build interior fit-out company operating across the UAE",
  },
  {
    title: "Our Support",
    detail:
      "A bespoke design and build interior fit-out company operating across the UAE",
  },
];

const Points = () => {
  const [points, setPoints] = useState(0);
  console.log(points);
  return (
    <>
      <div className="absolute lg:top-[30%] sm:top-[8%] sm:px-[25px] flex w-full sm:flex-col-reverse sm:gap-[130px]">
        <div className="lg:w-[20%] h-full">
          <ul className="text-[24px] leading-[30px] text-white font-Marcellus font-normal list-none grid gap-5 h-full cursor-pointer backdrop-blur-sm bg-[rgba(29, 29, 27, 0.2)] lg:-rotate-90">
            <li
              className="flex items-center px-5 sm:justify-center"
              onClick={() => setPoints(0)}
            >
              <Link>Consulting</Link>
            </li>
            <li
              className="flex items-center px-5 sm:justify-center"
              onClick={() => setPoints(1)}
            >
              <Link>Designing</Link>
            </li>
            <li
              className="flex items-center px-5 sm:justify-center"
              onClick={() => setPoints(2)}
            >
              <Link>Building</Link>
            </li>
            <li
              className="flex items-center px-5 sm:justify-center"
              onClick={() => setPoints(3)}
            >
              <Link>Support</Link>
            </li>
          </ul>
        </div>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            className="lg:w-[60%] lg:px-[70px]"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center gap-5">
              <h3 className="text-[18px] leading-[23px] text-white opacity-[0.5] font-Mulish font-semibold">
                {content[points].title}
              </h3>
              <hr className="h-[1px] w-[150px] text-white opacity-[0.25]" />
            </div>
            <p className="lg:text-[50px] lg:leading-[60px] sm:text-[30px] sm:leading-[40px] text-white font-Marcellus font-normal pt-6 pb-10">
              {content[points].detail}
            </p>
            <PalmBtn btnText="See our services" />
          </motion.div>
        </AnimatePresence>
        <div className="lg:w-[20%] sm:hidden"></div>
      </div>
    </>
  );
};

export default Points;
