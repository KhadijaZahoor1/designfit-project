import React from "react";
import darkLogo from "../src/assests/images/darkLogo.png";
import { Link } from "react-router-dom";
import Design from "../src/assests/images/Design.svg";
import Email from "../src/assests/images/Email.svg";
import Location from "../src/assests/images/Location.svg";
import Facebook from "../src/assests/images/Facebook.svg";
import Instagram from "../src/assests/images/Instagram.svg";
import Linkedin from "../src/assests/images/Linkedin.svg";

const Footer = () => {
  return (
    <>
      <footer className="">
        <div className="container mx-auto flex lg:flex-row sm:flex-col gap-[80px] py-[60px]">
          <div className="lg:w-[50%]">
            <div className="flex lg:flex-row sm:flex-col">
              <div className="lg:w-[50%] flex items-center">
                <Link to="/">
                  {" "}
                  <img src={darkLogo} alt="darkLogo" />
                </Link>
              </div>
              <div className="lg:w-[50%] flex flex-row sm:mt-[52px] lg:mt-0">
                <div>
                  <h3 className="text-[24px] leading-[30px] text-pantone1 font-Marcellus font-normal">
                    Other links
                  </h3>
                  <div className="flex gap-[150px]">
                    <ul className="text-[16px] leading-[18px] text-pantone1 font-Mulish font-normal mt-[33px]  gap-y-5 grid opacity-[0.6]">
                      <li>
                        <Link to="/aboutus">About us</Link>
                      </li>
                      <li>
                        <Link to="/team">Team</Link>
                      </li>
                      <li>
                        <Link to="/portfolio">portfolio</Link>
                      </li>
                      <li>
                        <Link to="/services">Services</Link>
                      </li>
                    </ul>
                    <ul className="text-[16px] leading-[18px] text-pantone1 font-Mulish font-normal mt-[33px]  gap-y-5 grid opacity-[0.6]">
                      <li>
                        <Link to="/sector">Sectors</Link>
                      </li>
                      <li>
                        <Link to="/joinus">Join us</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact us</Link>
                      </li>
                      <li>
                        <Link>Privacy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[50%]">
            <div className="flex lg:flex-row gap-[50px] sm:flex-col">
              <div className="lg:w-[50%]">
                <h3 className="text-[24px] leading-[30px] text-pantone1 font-Marcellus font-normal">
                  Want to speak to us?
                </h3>
                <div>
                  <ul className="text-[16px] leading-[18px] text-pantone1 font-Mulish font-normal mt-[33px] gap-y-5 grid opacity-[0.6]">
                    <li>
                      <Link className="flex gap-2">
                        <img alt="Design" src={Design} />
                        <span> 800 Design</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="flex gap-2">
                        <img alt="Design" src={Email} />
                        <span> hello@designfit.com</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="flex gap-2">
                        <img alt="Design" src={Location} />
                        <span> Vision tower, 42 floor, Business bay</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:w-[50%]">
                <h3 className="text-[24px] leading-[30px] text-pantone1 font-Marcellus font-normal">
                  Want to see more?
                </h3>
                <div className="flex justify-between items-center gap-[12px] mt-[33px]">
                  <div className="bg-gray h-[60px] w-[110px] flex items-center justify-center">
                    <img src={Facebook} alt="fb" className="" />
                  </div>
                  <div className="bg-gray h-[60px] w-[110px] flex items-center justify-center">
                    <img src={Instagram} alt="insta" className="mx-auto" />
                  </div>
                  <div className="bg-gray h-[60px] w-[110px] flex items-center justify-center">
                    <img src={Linkedin} alt="linkin" className="mx-auto" />
                  </div>
                </div>
                <div className="lg:mt-[13px] sm:mt-[30px] flex lg:flex-row sm:flex-col sm:gap-[10px]">
                  <input
                    placeholder="Get news & updates!"
                    className="text-[16px] leading-[18px] placeholder:text-pantone1 font-Marcellus font-normal bg-gray px-[12px] py-[21px]"
                  />
                  <div className="flex items-center bg-vector bg-right-bottom bg-no-repeat sm:grid">
                    <button className="uppercase bg-white text-palm text-[18px] leading-[23px] font-Marcellus font-light border-[2px] border-gray px-[15px] py-[20px] rounded-br-[40px]">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* copyright text */}
        <div className="bg-[#F6F6F6] py-[16px]">
          <div className="container mx-auto flex justify-between  sm:flex-col sm:gap-[20px]">
            <p className="text-[16px] leading-[18px] text-pantone1 font-Mulish font-normal opacity-[0.3]">
              © 2023 Designfit. All rights reserved.
            </p>
            <div className="text-[16px] leading-[18px] text-pantone1 font-Mulish font-normal opacity-[0.3] flex lg:flex-row gap-7 sm:flex-col sm:gap-[10px]">
              <Link>Privacy policy</Link>
              <Link>Terms Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
