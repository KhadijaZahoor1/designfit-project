import React from "react";
import { HeroSection } from "../components/HeroSection";
import insights from "../assests/images/insights.png";
import sectorIcon from "../assests/images/sectorIcon.svg";
import nad1 from "../assests/images/nad1.png";
import nad2 from "../assests/images/nad2.png";
import Hala2 from "../assests/images/Hala2.png";
import RECEPTION from "../assests/images/RECEPTION.png";
import ImgHeading from "../components/ImgHeading";
import Nav from "../Nav";
import DotSection from "../components/DotSection";

const Data = {
  heading: ["Articles"],
  line: [
    "Stay up-to-date with the",
    <br />,
    "industry trends, news, and",
    <br />,
    "our upcoming project",
  ],
  img: insights,
  icon: sectorIcon,
  title: ["How to design a Blended Workspace in 2022"],
  detail: [
    "Our team of highly qualified experts have had a wide range of experience on a variety of different projects, ranging from renovating a space to",
    <br />,
    " give them a more modern look, to fitting out completely new units. Take a look at just a few of the amazing projects we have done recently.",
  ],
};

const imgHeading = [
  {
    img: nad1,
    title: "Latest Restaurant Design Trends",
    text: [
      "As we make our way into 2022,",
      <br />,
      "we’ve seen many restaurants redesign their",
      <br />,
      "spaces. Updating your restaurant from time to…",
    ],
  },
  {
    img: nad2,
    title: "Luxurious Modern Office Design Trends in 2022",
    text: [
      "As we make our way into 2022,",
      <br />,
      "we’ve seen many restaurants redesign their",
      <br />,
      "spaces. Updating your restaurant from time to…",
    ],
  },
  {
    img: Hala2,
    title: "Nando's",
    text: ["3,600ft²", <br />, "Al Zeina Community, Abu Dhabi"],
  },
  {
    img: RECEPTION,
    title: "Nando's",
    text: [
      "As we make our way into 2022,",
      <br />,
      "we’ve seen many restaurants redesign their",
      <br />,
      "spaces. Updating your restaurant from time to…",
    ],
  },
  {
    img: nad1,
    title: "Nando's",
    text: [
      "As we make our way into 2022,",
      <br />,
      "we’ve seen many restaurants redesign their",
      <br />,
      "spaces. Updating your restaurant from time to…",
    ],
  },
  {
    img: nad2,
    title: "Nando's",
    text: ["3,600ft²", <br />, "Al Zeina Community, Abu Dhabi"],
  },
];

const text = ["Would you like to ", <br className="" />, "work with us?"];

const Insights = () => {
  return (
    <>
      <Nav />
      {/* hero section */}
      <HeroSection {...Data} showBtn={false} />
      {/* section 2 img/content */}
      <div className="lg:container lg:mx-auto lg:px-[125px] -mt-[100px]">
        <div className="grid lg:grid-cols-2 lg:gap-[24px] sm:grid-cols-1 sm:gap-5 ">
          <ImgHeading imgHeading={imgHeading} />
        </div>
      </div>
      {/* last section */}
      <DotSection text={text} />
    </>
  );
};

export default Insights;
