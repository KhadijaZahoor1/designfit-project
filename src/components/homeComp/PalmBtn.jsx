import React from "react";
import { motion } from "framer-motion";

const PalmBtn = (prop) => {
  return (
    <>
      <motion.div
        className="bg-vectorWhite bg-right-bottom bg-no-repeat inline-block"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <button className="hover:bg-[#6444b9] uppercase bg-palm py-3 px-8 rounded-br-[40px] text-[14px] leading-[16px] text-white font-Marcellus font-normal">
          {prop.btnText}
        </button>
      </motion.div>
    </>
  );
};
export default PalmBtn;
