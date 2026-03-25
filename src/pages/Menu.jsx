import React from "react";
import MenuList from "../sections/menu/MenuList";
import { motion } from "framer-motion";

const Menu = () => {
  return (
    <motion.main
      className="min-h-screen px-6 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="text-4xl font-bold mb-10 text-center">Our Menu</h1>
      <MenuList />
    </motion.main>
  );
};

export default Menu;