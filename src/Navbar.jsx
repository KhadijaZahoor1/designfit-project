import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import darkLogo from "../src/assests/images/darkLogo.png";

const Navbar = () => {
  const [mobile, setMobiles] = useState(false);
  return (
    <>
      <nav className="flex justify-between items-center absolute bottom-0 bg-white w-full lg:h-[140px] sm:h-[70px]">
        <div className="lg:px-[48px]">
          <Link to="/" className="">
            <img src={darkLogo} alt="darkLogo" />
          </Link>
        </div>
        <NavLink
          className={
            mobile
              ? "sm:absolute sm:top-[0px] sm:left-[10%] sm:list-none sm:w-full sm:grid sm:items-center sm:text-center sm:h-[100vh] sm:bg-[#f0f8ff] md:absolute md:top-[0px] md:left-[10%] md:list-none md:w-full md:grid md:items-center md:text-center md:h-[100vh] md:bg-[#f0f8ff]"
              : "lg:flex lg:justify-center sm:hidden md:hidden gap-[100px] "
          }
          onClick={() => setMobiles(false)}
        >
          <Link
            to="/"
            className="text-[28px] leading-[35px] text-pantone1 font-Marcellus font-normal"
          >
            Services
          </Link>
          <Link
            to="/"
            className="text-[28px] leading-[35px] text-pantone1 font-Marcellus font-normal"
          >
            Sectors
          </Link>
          <Link
            to="/portfolio"
            className="text-[28px] leading-[35px] text-pantone1 font-Marcellus font-normal"
          >
            Portfolio
          </Link>
          <Link
            to="/aboutus"
            className="text-[28px] leading-[35px] text-pantone1 font-Marcellus font-normal"
          >
            About us
          </Link>
          <Link
            to="/"
            className="text-[28px] leading-[35px] text-pantone1 font-Marcellus font-normal"
          >
            Team
          </Link>
        </NavLink>
        <div className="sm:hidden bg-palm h-[140px] ml-[37px] text-white items-center justify-center w-[274px] flex text-[32px] leading-[40px] font-Marcellus font-normal uppercase">
          <Link to="" className="">
            Get <br />
            Started
          </Link>
        </div>
        <div
          className="sm:absolute sm:flex sm:right-[6px] md:absolute md:block md:right-[20px] lg:hidden bg-palm px-[22px] py-[25px] items-center"
          onClick={() => setMobiles(!mobile)}
        >
          {mobile ? (
            <FaTimes />
          ) : (
            <div>
              <div className="w-[20px] h-[2px] bg-white"></div>
              <div className="w-[12px] h-[2px] mt-2 bg-white float-right"></div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
