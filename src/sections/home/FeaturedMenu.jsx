// import React from "react";
// import { FiShoppingCart } from "react-icons/fi";

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

// export const FeaturedMenu = () => {
//   const menuList = [...foods, ...foods, ...foods, ...foods];

//   return (
//     <section className="bg-[#f6e6d2] py-20 px-6">
//       <div className="max-w-7xl mx-auto text-center">

//         {/* subtitle */}
//         <p className="text-red-500 text-sm font-medium mb-2">
//           Popular Dishes
//         </p>

//         {/* title */}
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
//           Featured Menu
//         </h2>

//         {/* description */}
//         <p className="text-gray-500 text-sm mt-2 mb-12">
//           A taste of what's waiting for you on the app
//         </p>

//         {/* grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {menuList.map((food, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition duration-300"
//             >
//               {/* image */}
//               <div className="rounded-xl overflow-hidden">
//                 <img
//                   src={food.image}
//                   alt="food"
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

//                 <div className="bg-yellow-100 text-yellow-500 p-2 rounded-full">
//                   <FiShoppingCart size={16} />
//                 </div>
//               </div>

//               {/* button */}
//               <button className="mt-4 bg-red-600 hover:bg-red-700 text-white w-full py-2 rounded-full text-sm font-medium transition">
//                 Order Now
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };



import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { motion } from "framer-motion";

const foods = [
  {
    name: "Nigerian Jellof rice with fried...",
    price: "₦5,500",
    image:
      "https://i.pinimg.com/1200x/bf/1b/ef/bf1befc7f387a1145280f5371619a07e.jpg",
  },
  {
    name: "Okora soup with goat meat...",
    price: "₦8,000",
    image:
      "https://i.pinimg.com/736x/5d/4e/63/5d4e6367dba28e1dab3270cda12badcf.jpg",
  },
];

export const FeaturedMenu = () => {
  const menuList = [...foods, ...foods, ...foods, ...foods];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#f6e6d2] py-20 px-6"
    >
      <div className="max-w-7xl mx-auto text-center">

        {/* subtitle */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-red-500 text-sm font-medium mb-2"
        >
          Popular Dishes
        </motion.p>

        {/* title */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800"
        >
          Featured Menu
        </motion.h2>

        {/* description */}
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-gray-500 text-sm mt-2 mb-12"
        >
          A taste of what's waiting for you on the app
        </motion.p>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuList.map((food, index) => (
            <motion.div
              key={index}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition duration-300"
            >
              {/* image */}
              <div className="rounded-xl overflow-hidden">
                <motion.img
                  src={food.image}
                  alt="food"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-40 object-cover"
                />
              </div>

              {/* name */}
              <h3 className="text-left mt-4 text-sm font-medium text-gray-700">
                {food.name}
              </h3>

              {/* price + cart */}
              <div className="flex justify-between items-center mt-2">
                <span className="text-red-600 font-semibold">
                  {food.price}
                </span>

                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="bg-yellow-100 text-yellow-500 p-2 rounded-full"
                >
                  <FiShoppingCart size={16} />
                </motion.div>
              </div>

              {/* button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 bg-red-600 hover:bg-red-700 text-white w-full py-2 rounded-full text-sm font-medium transition"
              >
                Order Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};