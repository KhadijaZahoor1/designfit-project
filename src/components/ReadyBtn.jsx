import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const ReadyBtn = (prop) => {
  return (
    <motion.div
      className="readybtn inline-block"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <button className="hover:bg-[#6444b9] uppercase bg-palm py-3 px-8 rounded-br-[40px] text-[14px] leading-[16px] text-white font-Marcellus font-normal">
        <Link to="/project">{prop.btnText}</Link>
      </button>
    </motion.div>
  );
};

export default ReadyBtn;
