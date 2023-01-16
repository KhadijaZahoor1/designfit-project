import React from "react";
import { HeroSection } from "../components/HeroSection";
import team from "../assests/images/team.png";
import teamIcon from "../assests/images/teamIcon.png";
import Nav from "../Nav";
import TeamMembers from "../components/teamComp/TeamMembers";
import DotSection from "../components/DotSection";
import { motion } from "framer-motion";

const Data = {
  heading: ["Meet the", <br />, "team"],
  line: ["Design, build and fit out", <br />, "specialists"],
  img: team,
  icon: teamIcon,
  title: [
    "Design, build, and fit out specialists delivering high quality",
    <br />,
    "commercial spaces",
  ],
  detail: [
    "With an experienced team of interior and build contractors, we are committed to providing innovative solutions for commercial spaces in",
    <br />,
    "interior design, build, and fit-out sectors. Our site managers are meticulous planners who will ensure the delivery of any project to perfection in",
    <br />,
    "collaboration with our network of partners and subcontractors.",
  ],
};

const text = ["Would you like to ", <br className="" />, "work with us?"];

const Team = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Nav />
        {/* herosection */}
        <HeroSection {...Data} btnText="" showBtn={false} />
        {/* Meet the team */}
        <div className="lg:container lg:mx-auto lg:pt-[100px] lg:pb-[80px] lg:px-[100px] sm:px-5 sm:pt-[50px]">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-x-5 lg:gap-y-12 sm:gap-y-5">
            <TeamMembers />
          </div>
        </div>
        {/*  last section */}
        <DotSection text={text} />
      </motion.div>
    </>
  );
};

export default Team;
