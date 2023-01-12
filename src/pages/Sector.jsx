import React from "react";
import { HeroSection } from "../components/HeroSection";
import sectorbg from "../assests/images/sectorBg.jpg";
import sectorIcon from "../assests/images/sectorIcon.svg";
import sectorOffc from "../assests/images/sectorOffc.png";
import sectorRetail from "../assests/images/sectorRetail.png";
import sectorFB from "../assests/images/sectorFB.png";
import Nav from "../Nav";
import DotSection from "../components/DotSection";

const Data = {
  heading: ["Our", <br />, "Sector"],
  line: ["Reinventing commercial", <br />, "spaces across the UAE"],
  img: sectorbg,
  icon: sectorIcon,
  title: [
    "Providing best in class projects across workplace, F&B, hospitality ",
    "and retail sectors",
  ],
  detail: [
    "We specialise in interior fit out solutions across a broad range of sectors, including commercial office spaces, F&B, hospitality, retail, and other similar",
    <br />,
    "industries. Our work allows us to innovate with every project by creating remarkable commercial spaces in collaboration with our clients all built",
    <br />,
    " with sustainability and customer experience in mind.",
  ],
};

const text = ["Would you like to ", <br className="" />, "work with us?"];

const Sector = () => {
  return (
    <>
      <Nav />
      {/* hero section */}
      <HeroSection {...Data} showBtn={false} />
      {/* section 2 ofcice */}
      <div className="container mx-auto flex lg:px-[50px] pt-[80px] sm:flex-col sm:gap-[50px]">
        <div className="lg:w-[50%] relative ">
          <div className="whiteLine"></div>
          <img
            alt="office"
            src={sectorOffc}
            className="lg:rounded-br-[240px] lg:rounded-tl-[240px] sm:rounded-br-[100px] sm:rounded-tl-[100px]"
          />
        </div>
        <div className="lg:w-[50%] flex">
          <div className="self-center lg:px-[60px] relative">
            <h1 className="text-[50px] leading-[60px] text-pantone1 font-Marcellus font-normal">
              Office
            </h1>
            <p className="font-Mulish font-normal text-[18px] leading-[30px] text-pantone1 mt-[20px]">
              We know how important it is to feel comfortable working at the
              office. As a matter of fact, most of us spend most of our time in
              our work environment, where we need to stay productive and
              inspired. That's why, when designing office spaces, our team
              builds collaborative areas with functionality and innovation in
              mind.
            </p>
          </div>
        </div>
      </div>
      {/* retail & hospitality */}
      <div className="container mx-auto flex lg:flex-row-reverse lg:px-[50px] sm:flex-col sm:gap-[50px] sm:mt-[50px]">
        <div className="lg:w-[50%] relative">
          <div className="whiteLine"></div>
          <img
            alt="retail"
            src={sectorRetail}
            className="lg:rounded-br-[240px] lg:rounded-tl-[240px] sm:rounded-br-[100px] sm:rounded-tl-[100px]"
          />
        </div>
        <div className="lg:w-[50%] flex">
          <div className="self-center lg:px-[60px] relative">
            <h1 className="text-[50px] leading-[60px] text-pantone1 font-Marcellus font-normal ">
              Retail & Hospitality
            </h1>
            <p className="font-Mulish font-normal text-[18px] leading-[30px] text-pantone1 mt-[20px]">
              As home to some of the world largest and most intriguing malls,
              Dubai is a haven for those who enjoy shopping. We understand how
              important it is to create retail spaces that offer unique customer
              experiences in-store. Our designs stand out regardless of what
              kind of retail space our clients require, whether it's a pet shop,
              luxury boutique or warehouse.
            </p>
          </div>
        </div>
      </div>
      {/* F & B */}
      <div className="container mx-auto flex lg:px-[50px] py-[80px] sm:flex-col sm:gap-[50px]">
        <div className="lg:w-[50%] relative ">
          <div className="whiteLine"></div>
          <img
            alt="Fb"
            src={sectorFB}
            className="lg:rounded-bl-[240px] lg:rounded-tr-[240px] sm:rounded-bl-[100px] sm:rounded-tr-[100px]"
          />
        </div>
        <div className="lg:w-[50%] flex">
          <div className="self-center lg:px-[60px] relative">
            <h1 className="text-[50px] leading-[60px] text-pantone1 font-Marcellus font-normal">
              F & B
            </h1>
            <p className="font-Mulish font-normal text-[18px] leading-[30px] text-pantone1 mt-[20px]">
              In the world of endless opportunities for entertainment and
              dining, unique restaurants and bars with the right atmosphere and
              interior design will attract customers. Our team of designers and
              fit specialists is open to designing various venues, including
              cafes, restaurants, bars, and more - all created to bring people
              back.
            </p>
          </div>
        </div>
      </div>
      {/* last section */}
      <DotSection text={text} />
    </>
  );
};

export default Sector;
