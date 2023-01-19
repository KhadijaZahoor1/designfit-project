import React from "react";
import whiteLogo from "../assests/images/whiteLogo.svg";
import { ImgCont } from "../components/homeComp/ImgCont";
import hala from "../../src/assests/images/imgCont1.png";
import nandos from "../../src/assests/images/imgCont2.png";
import crc from "../../src/assests/images/imgCont3.png";
import Points from "../components/homeComp/Points";
import servicesBg from "../../src/assests/images/servicesBg.png";
//import Navbar from "../Navbar";
//import Nav from "../Nav";
import WhiteBtn from "../components/homeComp/WhiteBtn";
import PalmBtn from "../components/homeComp/PalmBtn";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
//import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Nav1 from "../Nav1";

const Home = () => {
  AOS.init();

  const btnText = "Get started";
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="overflow-hidden"
      >
        {/* hero section */}
        <div className="relative bg-mainBg h-[100vh] bg-no-repeat lg:bg-cover sm:bg-center">
          <div className="absolute top-[10%] lg:left-[37%] sm:left-[18%]">
            <Link to="/">
              {" "}
              <img
                src={whiteLogo}
                alt=""
                className="sm:w-[250px] lg:w-[315px]"
                data-aos="zoom-in"
                data-aos-duration="1000"
              />
            </Link>
          </div>
          <div className="absolute bottom-0 w-full ">
            <Nav1 />
          </div>
          {/* <Navbar /> */}
        </div>
        {/* section 2 services different points */}
        <div className="relative sm:h-[800px]">
          <div className="h-full">
            <img src={servicesBg} alt="" className="sm:h-full object-cover" />
          </div>
          <Points />
        </div>
        {/*  */}
        <div className="lg:container lg:mx-auto py-10">
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="lg:text-[50px] lg:leading-[60px] sm:text-[30px] sm:leading-[40px] font-Marcellus font-normal text-pantone1 text-center"
          >
            Here to provide you with a unique and exceptional experience
            thorughout the project journey.{" "}
          </p>
        </div>
        {/* section 3 img/content 3 points */}
        <div className="grid lg:grid-cols-3 lg:gap-[1px] ">
          <ImgCont />
        </div>
        {/* section 4 quotation */}
        <div className="text-center lg:px-[80px] sm:px-[30px] lg:mt-0 sm:mt-[50px]">
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="lg:text-[50px] lg:leading-[60px] sm:text-[20px] sm:leading-[30px] text-pantone1 font-Marcellus font-normal lg:py-[50px] sm:py-[25px]"
          >
            "We're committed to you and your business. Our mission is to take
            you on a journey of project delivery, showcasing our connection with
            your culture, vision, and brand."
          </p>
          <p className="lg:text-[30px] lg:leading-[40px] sm:text-[15px] sm:leading-[20px] text-pantone1 font-Marcellus font-normal">
            Stephen McGuill, Managing Director
          </p>
        </div>
        {/* section 5 img/heading */}
        <div className="pt-[100px] lg:gap-5 grid">
          {/* point 1 */}
          <div className="lg:pl-[160px] lg:pr-[80px] sm:pl-5 flex sm:flex-col">
            <div className="lg:w-[40%]" data-aos="fade-right">
              <img src={hala} alt="" />
            </div>
            <div className="lg:w-[60%] flex bgClr">
              <div
                className="self-center lg:px-[100px] sm:px-5 sm:py-[40px]"
                data-aos="fade-left"
              >
                <h2 className="text-pantone1 text-[50px] leading-[60px] font-Marcellus font-normal">
                  Hala Insurance
                </h2>
                <h4 className="text-[18px] leading-[18px] text-pantone1 font-Mulish font-light opacity-[0.4] mt-[5px]">
                  Office
                </h4>
                <p className="text-[14px] leading-[18px] text-pantone1 font-semibold font-Mulish mt-[60px]">
                  #MEP #FFI #IT/AV #CONSULT #BUILD #DESIGN
                </p>
              </div>
            </div>
          </div>
          {/* point 2 */}
          <div className="lg:pr-[250px] lg:pl-[80px] sm:pr-5 flex lg:flex-row-reverse sm:flex-col">
            <div className="lg:w-[40%]" data-aos="fade-right">
              <img src={nandos} alt="" />
            </div>
            <div className="lg:w-[60%] flex bgClr2">
              <div
                className="self-center lg:px-[100px] sm:px-5 sm:py-[40px]"
                data-aos="fade-left"
              >
                <h2 className="text-pantone1 text-[50px] leading-[60px] font-Marcellus font-normal">
                  Nando's
                </h2>
                <h4 className="text-[18px] leading-[18px] text-pantone1 font-Mulish font-light opacity-[0.4] mt-[5px]">
                  F&B
                </h4>
                <p className="text-[14px] leading-[18px] text-pantone1 font-semibold font-Mulish mt-[60px]">
                  #MEP #FFI #IT/AV #CONSULT #BUILD #DESIGN
                </p>
              </div>
            </div>
          </div>
          {/* point 3 */}
          <div className="lg:pl-[160px] lg:pr-[80px] sm:pl-5 flex sm:flex-col">
            <div className="lg:w-[40%]" data-aos="fade-right">
              <img src={crc} alt="" />
            </div>
            <div className="lg:w-[60%] flex bgClr">
              <div
                className="self-center lg:px-[100px] sm:px-5 sm:py-[40px]"
                data-aos="fade-left"
              >
                <h2 className="text-pantone1 text-[50px] leading-[60px] font-Marcellus font-normal">
                  CRC
                </h2>
                <h4 className="text-[18px] leading-[18px] text-pantone1 font-Mulish font-light opacity-[0.4] mt-[5px]">
                  Office
                </h4>
                <p className="text-[14px] leading-[18px] text-pantone1 font-semibold font-Mulish mt-[60px]">
                  #MEP #FFI #IT/AV #CONSULT #BUILD #DESIGN
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* section 5 btn */}
        <div className="container mx-auto flex justify-center py-[70px]">
          <WhiteBtn />
        </div>
        {/* section form */}
        <div className="bg-pattern bg-black bg-cover lg:h-[400px] bg-no-repeat">
          <div className="py-[60px]">
            <h1
              data-aos="fade-down"
              data-aos-duration="1000"
              className="text-[50px] leading-[60px] text-white font-Marcellus font-normal text-center"
            >
              Let’s talk about <br /> your project!
            </h1>
            <div className="py-[50px] lg:container lg:mx-auto flex justify-center gap-5 items-center sm:flex-col">
              <div className="flex gap-5 sm:flex-col sm:px-[50px] ">
                <input
                  data-aos="fade-left"
                  placeholder="Full Name"
                  className="hover:border-palm hover:border text-white bg-[#282826] cursor-pointer text-[14px] leading-[16px] placeholder:text-white placeholder:opacity-[0.5] font-Mulish font-normal lg:py-[15px] lg:pl-[20px] lg:pr-[150px] sm:py-[15px] sm:pl-[30px] sm:pr-[100px] focus:outline-none"
                />
                <input
                  data-aos="fade-left"
                  data-aos-delay="100"
                  data-aos-duration="4000"
                  placeholder="Email Address"
                  className="hover:border-palm hover:border text-white bg-[#282826] cursor-pointer text-[14px] leading-[16px] placeholder:text-white placeholder:opacity-[0.5] font-Mulish font-normal lg:py-[15px] lg:pl-[20px] lg:pr-[150px] sm:py-[15px] sm:pl-[30px] sm:pr-[100px] focus:outline-none"
                />
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-duration="5000"
              >
                <PalmBtn btnText={btnText} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
