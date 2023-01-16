import React from "react";
import { motion } from "framer-motion";

const WhiteBtn = () => {
  return (
    <>
      <motion.div
        className="bg-vector bg-right-bottom bg-no-repeat inline-block"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <button className="hover:bg-[#fbfbfbd2] uppercase bg-white py-3 px-8 rounded-br-[40px] text-[14px] leading-[16px] text-palm font-Marcellus font-normal border-[2px] border-gray">
          Get Started
        </button>
      </motion.div>
    </>
  );
};

export default WhiteBtn;
