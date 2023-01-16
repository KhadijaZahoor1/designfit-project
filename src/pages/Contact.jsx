import React from "react";
import HeroMain from "../components/HeroMain";
import contactBg from "../assests/images/contactBg.png";
import callIcon from "../assests/images/callIcon.png";
import map from "../assests/images/mapProject.png";
import Nav from "../Nav";
import ReadyBtn from "../components/ReadyBtn";
import { motion } from "framer-motion";

const Data = {
  heading: ["Let's have", <br />, "a chat"],
  line: ["How can we help you today?"],
  img: contactBg,
  icon: callIcon,
  socialCont1: "Call us",
  detail1: ["+971 (0) 4 501 4888"],
  socialCont2: "Email us",
  detail2: ["hello@designfit.com"],
  socialCont3: "Visit us",
  detail3: ["33rd floor, Control Tower, Motor City"],
  map: map,
};

const Contact = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Nav />
        {/* hero section */}
        <HeroMain {...Data} />
        {/* section 2 form */}
        <div className="lg:container lg:mx-auto lg:px-[100px] lg:pt-[100px] lg:pb-[50px] grid lg:gap-10 sm:gap-7 sm:px-[25px] sm:pt-[50px]">
          <div>
            <div className="flex gap-5 sm:flex-col">
              <div class="relative lg:w-[50%]">
                <input
                  type="text"
                  className="forminput block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray appearance-none dark:text-white  focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                />
                <label
                  for="filled_success"
                  className="absolute text-[14px] leading-[16px] font-Mulish font-normal text-pantone1 opacity-[0.7] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Full name
                </label>
              </div>
              <div class="relative lg:w-[50%]">
                <input
                  type="text"
                  className="forminput block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray appearance-none dark:text-white  focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                />
                <label
                  for="filled_success"
                  className="absolute text-[14px] leading-[16px] font-Mulish font-normal text-pantone1 opacity-[0.7] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Email Address
                </label>
              </div>
            </div>
            <div className="flex gap-5 mt-3 sm:flex-col">
              <div class="relative lg:w-[50%]">
                <input
                  type="text"
                  className="forminput block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray appearance-none dark:text-white  focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                />
                <label
                  for="filled_success"
                  className="absolute text-[14px] leading-[16px] font-Mulish font-normal text-pantone1 opacity-[0.7] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Mobile number
                </label>
              </div>
              <div class="relative lg:w-[50%]">
                <input
                  type="text"
                  className="forminput block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray appearance-none dark:text-white  focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                />
                <label
                  for="filled_success"
                  className="absolute text-[14px] leading-[16px] font-Mulish font-normal text-pantone1 opacity-[0.7] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Company
                </label>
              </div>
            </div>
            <div className="w-full mt-3">
              <textarea
                type="textarea"
                placeholder="Tell us about your project..."
                className="bg-[#fbfbfb] border-none rounded-[10px] w-full h-[200px] text-[14px] leading-[16px] font-Mulish font-normal text-pantone1"
              />
            </div>
          </div>
          <label className="rounded-[15px] py-5 text-[14px] leading-[16px] text-pantone1 font-Mulish font-normal flex gap-5 w-full ">
            <input
              type="checkbox"
              className="rounded-[5px] bg-[#f6f6f6] border-none focus:bg-palm focus:outline-none focus:border-none"
            />
            Sign me up for news and updates
          </label>
        </div>
        <hr className="text-gray sm:hidden" />
        <div className="flex lg:justify-center lg:mx-auto lg:-mt-[20px] lg:w-[14%] bg-white sm:px-[25px] sm:mt-3">
          <ReadyBtn btnText="Get Started" />
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
