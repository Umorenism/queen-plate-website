import React from "react";
import { motion } from "framer-motion";
import ServiceList from "../sections/services/ServiceList";

const Services = () => {
  return (
    <motion.main
      className="min-h-screen px-6 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="text-4xl font-bold mb-10 text-center">Our Services</h1>
      <ServiceList />
    </motion.main>
  );
};

export default Services;