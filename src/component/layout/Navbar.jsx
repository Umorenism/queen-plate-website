import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../assets/image/logo.svg";
export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo animation */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold text-red-600 cursor-pointer"
        >
         <img src={logo} alt="queens Plates Logo" className="h-[80px] object-contain"/>
        </motion.h1>

        {/* Nav Links */}
        <div className="hidden md:flex gap-8 px-6 py-3 rounded-[40px] bg-[#FFFFFF57] backdrop-blur-md text-sm font-medium text-gray-700">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -2 }}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative transition ${
                    isActive ? "text-red-600" : "hover:text-red-600"
                  }`
                }
              >
                {link.name}

                {/* animated underline */}
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-[2px] w-full bg-red-600 origin-left scale-x-0 group-hover:scale-x-100"
                />
              </NavLink>
            </motion.div>
          ))}
        </div>

        {/* CTA Button animation */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#D4AF37] text-white px-6 py-2 rounded-full text-sm shadow-md"
        >
          Download App
        </motion.button>

      </div>
    </motion.nav>
  );
};