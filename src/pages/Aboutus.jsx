import React from "react";
import { HeroSection } from "../components/HeroSection";
import blueprint from "../../src/assests/images/blueprint.png";
import trendy from "../assests/images/trendy.jpg";
import { ValuesPoint } from "../components/aboutUsComp/ValuesPoint";
import mask from "../assests/images/Mask.png";
import qouteMark from "../../src/assests/images/qouteIcon.svg";
import qouteMark2 from "../../src/assests/images/qouteIcon2.svg";
import vision from "../assests/images/vision.jpg";
import mission from "../assests/images/mission.jpg";
import Mask1 from "../assests/images/Mask1.png";
import Mask2 from "../assests/images/Mask2.png";
import mobMask2 from "../assests/images/mobMask2.png";
import Map from "../assests/images/Map.png";
import Nav from "../Nav";
import Index from "../components/Index";
import { motion } from "framer-motion";

const line = ["Design creativity meets", <br />, "build innovatio"];
const Data = {
  heading: "About us",
  line: line,
  img: trendy,
  icon: blueprint,
  title:
    " Providing bespoke design, build and fit out solutions for commercial properties",
  detail:
    " Design Fit is a design and build fit out company offering turnkey interior solutions for any commercial space. We specialise in commercial office spaces, F&B, hospitality, and retail projects for international Fortune 500 companies, local firms, and government authorities. As a business, we always aim to deliver high quality solutions grounded in quality, transparency, and sustainability as one of our core values.",
};

const Aboutus = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Nav />
        {/* hero section */}
        <HeroSection {...Data} btnText="Join Our Team" />
        {/* section 2 vision */}
        <div className="container mx-auto flex lg:px-[50px] pt-[80px] sm:flex-col sm:gap-[50px]">
          <div className="lg:w-[50%] relative ">
            <div className="whiteLine"></div>
            <img
              alt="vision"
              src={vision}
              className="lg:rounded-br-[240px] lg:rounded-tl-[240px] sm:rounded-br-[100px] sm:rounded-tl-[100px]"
            />
          </div>
          <div className="lg:w-[50%] flex">
            <div className="self-center lg:px-[60px] relative">
              <h1 className="text-[50px] leading-[60px] text-pantone1 font-Marcellus font-normal curveVision">
                Our Vision
              </h1>
              <p className="font-Mulish font-normal text-[18px] leading-[30px] text-pantone1 mt-[20px]">
                To create remarkable experience by connecting people in
                exquisitely designed spaces.
              </p>
            </div>
          </div>
        </div>
        {/* section mission */}
        <div className="container mx-auto flex lg:flex-row-reverse lg:px-[50px] sm:flex-col sm:gap-[50px] sm:mt-[50px]">
          <div className="lg:w-[50%] relative">
            <div className="whiteLine"></div>
            <img
              alt="mission"
              src={mission}
              className="lg:rounded-br-[240px] lg:rounded-tl-[240px] sm:rounded-br-[100px] sm:rounded-tl-[100px]"
            />
          </div>
          <div className="lg:w-[50%] flex">
            <div className="self-center lg:px-[60px] relative">
              <h1 className="text-[50px] leading-[60px] text-pantone1 font-Marcellus font-normal curveMission">
                Our Mission
              </h1>
              <p className="font-Mulish font-normal text-[18px] leading-[30px] text-pantone1 mt-[20px]">
                Committed to providing world-class design coupled with
                high-quality fit-out services. Striving to create rewarding
                experiences for clients by ensuring all design are created with
                quality, functionality, and innovation in mind.
              </p>
            </div>
          </div>
        </div>
        {/* section 3 values */}
        <div className="bg-black lg:h-[600px] mt-[120px] pt-[100px] pb-[50px]">
          <div className="lg:container lg:mx-auto">
            <h1 className="text-[50px] leading-[60px] text-white font-Marcellus font-normal text-center">
              Our Values
            </h1>
            <div className="flex lg:grid-cols-5  sm:grid sm:grid-cols-2 items-center justify-center lg:gap-[100px] sm:gap-y-[50px] lg:pt-[150px] sm:pt-[80px]">
              <ValuesPoint />
            </div>
          </div>
        </div>
        {/* section review quote */}
        <div className="bg-[#F6F6F6] lg:bg-whiteCircle bg-no-repeat bg-cover lg:py-[170px] sm:py-[80px]">
          <div className="lg:container lg:mx-auto lg:px-[50px] relative">
            <div className="absolute bottom-[100px] left-28 sm:hidden">
              {" "}
              <img src={qouteMark} alt="qouteMark" />
            </div>
            <img
              alt="mskicon"
              src={mask}
              className="mx-auto border-[6px] border-white rounded-[50%] w-[80px] h-[80px]"
            />
            <p className="font-Mulish font-normal text-[18px] leading-[30px] text-pantone1 mt-[30px] lg:px-[80px] sm:px-[20px] text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div className="absolute right-[13px] top-[160px] sm:hidden">
              {" "}
              <img src={qouteMark2} alt="qouteMark2" />
            </div>
          </div>
        </div>
        {/* section cilents */}
        <div className="py-[50px]">
          <h1 className="text-[50px] leading-[60px] text-black font-Marcellus font-normal text-center">
            Our Cilents
          </h1>
          <Index />
        </div>
        {/* section find city in dubai */}
        <div className="flex lg:gap-[30px] sm:flex-col sm:gap-5">
          <div className="lg:w-[50%] pl-[20px]">
            <h1 className="lg:text-[56px] lg:leading-[65px] sm:text-[40px] sm:leading-[50px] text-pantone1 font-Marcellus font-normal lg:pl-[100px]">
              You can find us <br /> in Motor City <br /> in Dubai
            </h1>
            <div className="sm:flex sm:gap-5  sm:mt-[10px] lg:mt-[82px]">
              <div className="sm:w-[60%]">
                <img src={Mask1} alt="mask1" className="mt-[50px] " />
              </div>
              <div className="sm:w-[40%] lg:hidden sm:h-[150px] sm:block sm:self-end">
                <img src={mobMask2} alt="mobMask2" className="h-full" />
              </div>
            </div>
          </div>
          <div className="lg:w-[50%] flex lg:gap-[40px]">
            <div className="lg:w-[70%] lg:min-h-[470px] sm:px-5">
              <img src={Map} alt="map" className="h-full w-full" />
            </div>
            <div className="lg:w-[30%] flex self-end">
              <img
                src={Mask2}
                alt="mask2"
                className="lg:h-[400px] w-full sm:hidden"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Aboutus;
