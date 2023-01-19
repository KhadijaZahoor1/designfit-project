import React, { useState } from "react";
import { Link } from "react-router-dom";
import darkLogo from "../src/assests/images/darkLogo.png";
import { FaTimes } from "react-icons/fa";
import mobLogo from "../src/assests/images/mobLogo.png";
//import Button from "./Button";

const Nav1 = () => {
  let Links = [
    { name: "Services", link: "/services" },
    { name: "Sectors", link: "/sector" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "About us", link: "/aboutus" },
    { name: "Team", link: "/team" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="lg:flex items-center justify-between bg-white sticky z-[99] top-0 w-full sm:h-[85px]">
      <div className="font-bold text-2xl cursor-pointer flex items-center sm:items-center font-[Poppins] text-gray-800 ">
        <Link to="/" className="lg:h-[57px] lg:w-[178px] sm:mt-[20px]">
          {!open ? (
            <img src={darkLogo} alt="darkLogo" className=" pl-[40px] " />
          ) : (
            <img
              alt="mobLogo"
              src={mobLogo}
              className="lg:hidden pl-[20px] w-[40%]"
            />
          )}
        </Link>

        <div
          onClick={() => setOpen(!open)}
          className={`sm:absolute sm:mt-[20px] sm:flex sm:right-[6px] sm:top-0 md:absolute md:block md:right-[20px] lg:hidden px-[26px] h-[60px] items-center ${
            open ? "bg-white" : "bg-palm"
          }`}
        >
          {open ? (
            <FaTimes className="text-palm" />
          ) : (
            <div>
              <div className="w-[24px] h-[2px] bg-white"></div>
              <div className="w-[14px] h-[2px] mt-2 bg-white float-right"></div>
            </div>
          )}
        </div>
      </div>

      <div
        className={`sm:bg-palm sm: sm:py-[50px] sm:h-[100vh]  lg:items-center lg:pb-0 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 transition-all duration-500 ease-in ${
          open ? "bottom-0 visible" : "sm:top-[-500px] sm:invisible"
        }`}
      >
        <ul className="flex lg:flex-row sm:flex-col lg:gap-x-[90px]">
          {Links.map((link) => (
            <li
              key={link.name}
              className="lg:text-[24px] lg:leading-[30px] sm:text-[50px] sm:leading-[55px] p-[20px] lg:hover:text-palm text-pantone1 font-Marcellus font-normal  sm:flex sm:justify-center sm:text-white"
            >
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex justify-center sm:mt-[70px] lg:mt-0">
          <div className="mobMenuBtn inline-block lg:hidden">
            <button className="uppercase bg-white py-3 px-8 rounded-br-[40px] text-[14px] leading-[16px] text-palm font-Marcellus font-normal">
              <Link to="/project">Get Started</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="sm:hidden bg-palm text-white items-center justify-center flex text-[28px] leading-[30px] font-Marcellus font-normal uppercase px-[35px] py-[20px]">
        <Link to="/insights">
          Get <br />
          Started
        </Link>
      </div>
    </div>
  );
};

export default Nav1;
