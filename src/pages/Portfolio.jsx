import React from "react";
import { HeroSection } from "../components/HeroSection";
import portfolio from "../../src/assests/images/portfolio.png";
import Project from "../assests/images/Project.svg";
import Nav from "../Nav";
import Nan from "../assests/images/Nan.png";
import SentinelOne from "../assests/images/SentinelOne.png";
import Hala2 from "../assests/images/Hala2.png";
import RECEPTION from "../assests/images/RECEPTION.png";
import Group87 from "../assests/images/Group87.png";
import Group88 from "../assests/images/Group88.png";
import ImgHeading from "../components/ImgHeading";
import DotSection from "../components/DotSection";
import { motion } from "framer-motion";

const Data = {
  heading: ["Our", <br />, "Portfolio"],
  line: ["The latest completed interior", <br />, "design projects"],
  img: portfolio,
  icon: Project,
  title: [
    "Successfully delivered projects with passion, creativity",
    <br />,
    "and ingenuity",
  ],
  detail: [
    "We are proud of our track record for delivering high quality interior design and fit out projects on tight deadlines across Dubai and Abu Dhabi. Our",
    <br />,
    "team creates spaces encapsulating the ongoing evolution of commercial spaces, creatively incorporating the client's vision, culture, and brand in",
    <br className="sm:hidden" />,
    "every project.",
  ],
};

const imgHeading = [
  {
    img: Nan,
    title: "Nando's",
    text: ["3,600ft²", <br />, "Al Zeina Community, Abu Dhabi"],
  },
  {
    img: SentinelOne,
    title: "Nando's",
    text: ["3,600ft²", <br />, "Al Zeina Community, Abu Dhabi"],
  },
  {
    img: Hala2,
    title: "Nando's",
    text: ["3,600ft²", <br />, "Al Zeina Community, Abu Dhabi"],
  },
  {
    img: RECEPTION,
    title: "Nando's",
    text: ["3,600ft²", <br />, "Al Zeina Community, Abu Dhabi"],
  },
  {
    img: Group87,
    title: "Nando's",
    text: ["3,600ft²", <br />, "Al Zeina Community, Abu Dhabi"],
  },
  {
    img: Group88,
    title: "Nando's",
    text: ["3,600ft²", <br />, "Al Zeina Community, Abu Dhabi"],
  },
];

const text = [
  "Ready to ",
  <br className="lg:hidden" />,
  " work with",
  <br className="lg:hidden" />,
  " us",
];

const Portfolio = () => {
  return (
    <>
      <Nav />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="overflow-hidden w-full"
      >
        {/* hero section */}
        <HeroSection {...Data} btnText="" showBtn={false} />
        {/* section 2 img/headings */}
        <div className="lg:container lg:mx-auto lg:px-[125px] -mt-[100px] sm:px-[25px]">
          <div className="mt-[40px]"></div>
          <div className="grid lg:grid-cols-2 lg:gap-[24px] sm:grid-cols-1 sm:gap-5 ">
            <ImgHeading imgHeading={imgHeading} />
          </div>
        </div>
        {/* section 3 */}
        <DotSection text={text} />
      </motion.div>
    </>
  );
};

export default Portfolio;
