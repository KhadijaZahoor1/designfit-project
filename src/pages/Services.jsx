import React from "react";
import { HeroSection } from "../components/HeroSection";
import pantone from "../assests/images/pantone.png";
import servicesImg from "../assests/images/servicesImg.png";
import Nav from "../Nav";
import DotSection from "../components/DotSection";
import construction from "../assests/images/construction.png";
import ConstTabs from "../components/ConstTabs";

const Data = {
  heading: ["Our", <br />, "Services"],
  line: ["Turnkey design and build", <br />, "solutions"],
  img: servicesImg,
  icon: pantone,
  title: [
    "Time efficient and cost effective interior design",
    <br />,
    "and fit out solutions",
  ],
  detail: [
    "Our approach includes the full scope of services - we listen, design, and build commercial spaces. With attention",
    <br />,
    "to detail, meticulous planning and the best in class supply chain, our experienced construction managers and fit ",
    <br />,
    "our specialists will ensure that any end-to-end design project is delivered to",
  ],
};

const text = ["Have a project ", <br className="lg:hidden" />, "in mind?"];

const Services = () => {
  return (
    <>
      <Nav />
      {/* herosection */}
      <HeroSection {...Data} btnText="" showBtn={false} />
      {/* section 2 tabs */}
      <div className="relative">
        <span className="absolute left-0 top-0 w-full h-full boxShadow"></span>
        <div className="lg:h-full sm:h-[700px]">
          <img
            alt="construction"
            src={construction}
            className="sm:h-full sm:object-cover lg:h-full"
          />
        </div>
        <ConstTabs />
      </div>
      {/* last section */}
      <DotSection text={text} showText={false} />
    </>
  );
};

export default Services;
