import { motion } from "framer-motion";
import React from "react";
import { slideUp } from "../../component/animation/variants";

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-500">
      <motion.h1
        variants={slideUp}
        initial="hidden"
        animate="show"
        className="text-5xl bg-red-500 font-bold text-center"
      >
        Welcome to Our Restaurant
      </motion.h1>
    </section>
  );
};

export default Hero;