import React from "react";
import HeroPng from "../../assets/website/Coffee2.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="min-h-[550px] sm:min-h-[600px] bg-primary-1 flex justify-center items-center text-white">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Text content section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              It's time for super
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="bg-clip-text text-transparent bg-gradient-to-b from-secondary p-1 to-secondary/90 "
              >
                healthy
              </motion.span>
              meals.
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <button className="bg-secondary border-2 border-none duration-200 text-white py-2 px-4 rounded-full">
                Food
              </button>
            </motion.div>
          </motion.div>
          {/* Image section */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="min-h-[480px] flex justify-center items-center relative order-1 sm:order-2"
          >
            <motion.img
              initial={{ opacity: 1, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              src={HeroPng}
              alt="biryani img"
              className="w-[350px] sm:w-[480px] sm:scale-125 mx-auto"
            />
            {/* <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="bg-primary/70 p-3 rounded-full absolute top-10 left-10"
            >
              <h1 className="text-white ">Here is</h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="bg-primary/70 p-3 rounded-full absolute bottom-10 right-10"
            >
              <h1 className="text-white">Best Food</h1>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
