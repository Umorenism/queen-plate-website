import { motion } from "framer-motion";
import React from "react";
const Contact = () => {
  return (
    <motion.main
      className="min-h-screen px-6 py-20 max-w-3xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

      <form className="space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />

        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />

        <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
          Send Message
        </button>
      </form>
    </motion.main>
  );
};

export default Contact;