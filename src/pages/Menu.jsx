// import React from "react";
// import { FiShoppingCart } from "react-icons/fi";
// import { motion } from "framer-motion";
// import { HowToOrder } from "../sections/how/HowToOrder";
// import ContactUs from "../sections/contact/Contact";
// import { UtensilsCrossed, Soup, Flame, Croissant, IceCream, GlassWater } from "lucide-react";

// const foods = [
//   {
//     name: "Nigerian Jellof rice with fried...",
//     price: "₦5,500",
//     image:
//       "https://i.pinimg.com/1200x/bf/1b/ef/bf1befc7f387a1145280f5371619a07e.jpg",
//   },
//   {
//     name: "Okora soup with goat meat...",
//     price: "₦8,000",
//     image:
//       "https://i.pinimg.com/736x/5d/4e/63/5d4e6367dba28e1dab3270cda12badcf.jpg",
//   },
// ];



// const categories = [
//   { id: 1, name: "Rice Dishes", icon: <UtensilsCrossed size={28} /> },
//   { id: 2, name: "Soups", icon: <Soup size={28} /> },
//   { id: 3, name: "Grills", icon: <Flame size={28} /> },
//   { id: 4, name: "Swallow", icon: <Croissant size={28} /> },
//   { id: 5, name: "Desert", icon: <IceCream size={28} /> },
//   { id: 6, name: "Drink", icon: <GlassWater size={28} /> },
// ];

// const CategorySelector = () => {
//   const [active, setActive] = useState(1);

//   // Animation variants for the container and items
//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 }
//     }
//   };

//   const itemAnim = {
//     hidden: { y: 20, opacity: 0 },
//     show: { y: 0, opacity: 1 }
//   };

// export const Menu = () => {
//   const menuList = [...foods, ...foods, ...foods, ...foods];

//   return (

//     <>
//     <motion.section
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//       className="bg-[#f6e6d2] py-20 px-6"
//     >
//       <div className="max-w-7xl mt-10 mx-auto text-center">

//         {/* subtitle */}
        

//         {/* title */}
//         <motion.h2
//           initial={{ y: 40, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl md:text-4xl font-bold text-gray-800"
//         >
//           Menu Categories
//         </motion.h2>

//         {/* description */}
//         <motion.p
//           initial={{ y: 40, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="text-gray-500 text-sm mt-2 mb-12"
//         >
//           A taste of what's waiting for you on the app
//         </motion.p>
//       <motion.div 
//         variants={container}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//         className="max-w-[1047.13px] mx-auto flex flex-wrap justify-center gap-6 md:gap-10 px-4"
//       >
//         {categories.map((cat) => (
//           <motion.div
//             key={cat.id}
//             variants={itemAnim}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => setActive(cat.id)}
//             className="flex flex-col items-center cursor-pointer group"
//           >
//             {/* The Icon Card */}
//             <div className={`
//               w-20 h-20 md:w-24 md:h-24 
//               rounded-[28px] flex items-center justify-center transition-all duration-300
//               ${active === cat.id ? 'bg-white shadow-lg' : 'bg-white/50 hover:bg-white'}
//             `}>
//               <div className={active === cat.id ? 'text-[#A41C2E]' : 'text-gray-600'}>
//                 {cat.icon}
//               </div>
//             </div>

//             {/* The Label */}
//             <span className={`
//               mt-3 font-semibold text-sm transition-colors
//               ${active === cat.id ? 'text-[#A41C2E]' : 'text-gray-500'}
//             `}>
//               {cat.name}
//             </span>
//           </motion.div>
//         ))}
//       </motion.div>
//         {/* grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {menuList.map((food, index) => (
//             <motion.div
//               key={index}
//               initial={{ y: 60, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.08 }}
//               whileHover={{ y: -8 }}
//               className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition duration-300"
//             >
//               {/* image */}
//               <div className="rounded-xl overflow-hidden">
//                 <motion.img
//                   src={food.image}
//                   alt="food"
//                   initial={{ scale: 1 }}
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ duration: 0.4 }}
//                   className="w-full h-40 object-cover"
//                 />
//               </div>

//               {/* name */}
//               <h3 className="text-left mt-4 text-sm font-medium text-gray-700">
//                 {food.name}
//               </h3>

//               {/* price + cart */}
//               <div className="flex justify-between items-center mt-2">
//                 <span className="text-red-600 font-semibold">
//                   {food.price}
//                 </span>

//                 <motion.div
//                   whileHover={{ scale: 1.2, rotate: 10 }}
//                   className="bg-yellow-100 text-yellow-500 p-2 rounded-full"
//                 >
//                   <FiShoppingCart size={16} />
//                 </motion.div>
//               </div>

//               {/* button */}
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="mt-4 bg-red-600 hover:bg-red-700 text-white w-full py-2 rounded-full text-sm font-medium transition"
//               >
//                 Order Now
//               </motion.button>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//     <HowToOrder/>
//     <ContactUs/>
//     </>
//   );
// };







import React, { useState } from "react"; // Added useState
import { FiShoppingCart } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion"; // Added AnimatePresence
import { HowToOrder } from "../sections/how/HowToOrder";
import ContactUs from "../sections/contact/Contact";
import { UtensilsCrossed, Soup, Flame, Croissant, IceCream, GlassWater } from "lucide-react";

// 1. Updated foods data with 'category' field
const foods = [
  {
    id: 1,
    name: "Nigerian Jellof rice with fried...",
    price: "₦5,500",
    category: "Rice Dishes",
    image: "https://i.pinimg.com/1200x/bf/1b/ef/bf1befc7f387a1145280f5371619a07e.jpg",
  },
  {
    id: 2,
    name: "Okora soup with goat meat...",
    price: "₦8,000",
    category: "Soups",
    image: "https://i.pinimg.com/736x/5d/4e/63/5d4e6367dba28e1dab3270cda12badcf.jpg",
  },
  // Adding more dummy data for variety
  {
    id: 3,
    name: "Grilled Chicken Suya",
    price: "₦4,500",
    category: "Grills",
    image: "https://i.pinimg.com/736x/5d/4e/63/5d4e6367dba28e1dab3270cda12badcf.jpg",
  },
];

const categories = [
  { id: 1, name: "Rice Dishes", icon: <UtensilsCrossed size={28} /> },
  { id: 2, name: "Soups", icon: <Soup size={28} /> },
  { id: 3, name: "Grills", icon: <Flame size={28} /> },
  { id: 4, name: "Swallow", icon: <Croissant size={28} /> },
  { id: 5, name: "Desert", icon: <IceCream size={28} /> },
  { id: 6, name: "Drink", icon: <GlassWater size={28} /> },
];

export const Menu = () => {
  // 2. State for active category (Defaults to "Rice Dishes")
  const [activeTab, setActiveTab] = useState("Rice Dishes");

  // 3. Filter function
  const filteredMenu = foods.filter(food => food.category === activeTab);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemAnim = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#f6e6d2] py-20 px-6"
      >
        <div className="max-w-7xl mt-10 mx-auto text-center">
          <motion.h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Menu Categories
          </motion.h2>

          <motion.p className="text-gray-500 text-sm mt-2 mb-12">
            A taste of what's waiting for you on the app
          </motion.p>

          {/* Category Selector */}
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            className="max-w-[1047.13px] mb-16 mx-auto flex flex-wrap justify-center gap-6 md:gap-10 px-4"
          >
            {categories.map((cat) => (
              <motion.div
                key={cat.id}
                variants={itemAnim}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(cat.name)} // Sets the active category
                className="flex flex-col items-center cursor-pointer group"
              >
                <div className={`
                  w-20 h-20 md:w-24 md:h-24 
                  rounded-[28px] flex items-center justify-center transition-all duration-300
                  ${activeTab === cat.name ? 'bg-white shadow-lg' : 'bg-white/50 hover:bg-white'}
                `}>
                  <div className={activeTab === cat.name ? 'text-[#A41C2E]' : 'text-gray-600'}>
                    {cat.icon}
                  </div>
                </div>
                <span className={`mt-3 font-semibold text-sm transition-colors ${activeTab === cat.name ? 'text-[#A41C2E]' : 'text-gray-500'}`}>
                  {cat.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence mode="wait">
              {filteredMenu.length > 0 ? (
                filteredMenu.map((food, index) => (
                  <motion.div
                    key={`${activeTab}-${index}`} // Key changes on tab switch to trigger animation
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition duration-300"
                  >
                    <div className="rounded-xl overflow-hidden">
                      <motion.img
                        src={food.image}
                        alt={food.name}
                        whileHover={{ scale: 1.05 }}
                        className="w-full h-40 object-cover"
                      />
                    </div>

                    <h3 className="text-left mt-4 text-sm font-medium text-gray-700 h-10">
                      {food.name}
                    </h3>

                    <div className="flex justify-between items-center mt-2">
                      <span className="text-[#A41C2E] font-semibold">{food.price}</span>
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className="bg-orange-50 text-orange-500 p-2 rounded-full"
                      >
                        <FiShoppingCart size={16} />
                      </motion.div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-4 bg-[#A41C2E] hover:bg-red-800 text-white w-full py-2.5 rounded-full text-sm font-medium transition"
                    >
                      Order Now
                    </motion.button>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-20 text-gray-400">
                  No items available in this category yet.
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.section>
      <HowToOrder/>
      <ContactUs/>
    </>
  );
};