// // ================= ABOUT.jsx =================


// import qualityIcon from '../../assets/icons/Order.svg';
// import scooterIcon from '../../assets/icons/take.svg';
// import heartIcon from '../../assets/icons/waiter.svg';
// export const AboutSection = () => {
//   // const features = [
//   //   {
//   //     title: "Quality First",
//   //     desc: "Every meal crafted with premium, fresh ingredients",
//   //     icon: "🍽️",
//   //   },
//   //   {
//   //     title: "Lightning Fast",
//   //     desc: "From our kitchen to your door in under 45 minutes",
//   //     icon: "🛵",
//   //   },
//   //   {
//   //     title: "Customer Love",
//   //     desc: "Thousands of happy customers across Uyo City",
//   //     icon: "❤️",
//   //   },
//   // ];



//   const features = [
//   {
//     title: "Quality First",
//     desc: "Every meal crafted with premium, fresh ingredients",
//     icon: qualityIcon,        // Now an imported image
//   },
//   {
//     title: "Lightning Fast",
//     desc: "From our kitchen to your door in under 45 minutes",
//     icon: scooterIcon,
//   },
//   {
//     title: "Customer Love",
//     desc: "Thousands of happy customers across Uyo City",
//     icon: heartIcon,
//   },
// ];
//   return (
//     <section className="bg-[#F6E6C7] py-20">
//       <div className="max-w-6xl mx-auto px-6 text-center">
        
//         {/* Small heading */}
//         <p className="text-sm text-red-500 font-semibold mb-2">
//           About Us
//         </p>

//         {/* Main title */}
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
//           About Queen's Plate
//         </h2>

//         {/* Description */}
//         <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-sm md:text-base">
//           Queen's Plate is a modern food service platform that brings delicious
//           Nigerian meals straight to your doorstep. We focus on quality, speed,
//           and customer satisfaction — because you deserve a meal that makes you
//           smile.
//         </p>

//         {/* Features */}
//         <div className="grid md:grid-cols-3 gap-10 mt-16">
//           {features.map((item) => (
//             <div key={item.title} className="flex flex-col items-center">
              
//               {/* Icon placeholder (replace with image if needed) */}
//               <div className="text-5xl mb-4">{item.icon}</div>

//               {/* Title */}
//               <h3 className="font-semibold text-lg text-gray-800">
//                 {item.title}
//               </h3>

//               {/* Description */}
//               <p className="text-gray-500 text-sm mt-2 max-w-xs">
//                 {item.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };





// ================= ABOUT.jsx =================

// import qualityIcon from '../../assets/icons/Order.svg';
// import scooterIcon from '../../assets/icons/take.svg';
// import heartIcon from '../../assets/icons/waiter.svg';

// export const AboutSection = () => {
//   const features = [
//     {
//       title: "Quality First",
//       desc: "Every meal crafted with premium, fresh ingredients",
//       icon: heartIcon,
//     },
//     {
//       title: "Lightning Fast",
//       desc: "From our kitchen to your door in under 45 minutes",
//       icon: scooterIcon,
//     },
//     {
//       title: "Customer Love",
//       desc: "Thousands of happy customers across Uyo City",
     
//        icon: qualityIcon,
//     },
//   ];

//   return (
//     <section className="bg-[#F6E6C7] py-20">
//       <div className="max-w-6xl mx-auto px-6 text-center">
        
//         {/* Small heading */}
//         <p className="text-sm text-red-500 font-semibold mb-2">
//           About Us
//         </p>

//         {/* Main title */}
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
//           About Queen's Plate
//         </h2>

//         {/* Description */}
//         <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-sm md:text-base">
//           Queen's Plate is a modern food service platform that brings delicious
//           Nigerian meals straight to your doorstep. We focus on quality, speed,
//           and customer satisfaction — because you deserve a meal that makes you
//           smile.
//         </p>

//         {/* Features */}
//         <div className="grid md:grid-cols-3 gap-10 mt-16">
//           {features.map((item) => (
//             <div key={item.title} className="flex flex-col items-center">
              
//               {/* Icon - Now using imported SVG images */}
//               <img 
//                 src={item.icon} 
//                 alt={item.title}
//                 className="w-[205px] h-[205px] mb-4 object-contain"
//               />

//               {/* Title - unchanged */}
//               <h3 className="font-semibold text-lg  text-gray-800">
//                 {item.title}
//               </h3>

//               {/* Description - unchanged */}
//               <p className="text-gray-500 text-sm mt-2 max-w-[230px]">
//                 {item.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };









import { motion } from "framer-motion";
import qualityIcon from '../../assets/icons/orderimg.svg';
import scooterIcon from '../../assets/icons/takeimg.svg';
import heartIcon from '../../assets/icons/waiterimg.svg';
export const AboutSection = () => {
  const features = [
    {
      title: "Quality First",
      desc: "Every meal crafted with premium, fresh ingredients",
      icon: heartIcon,
    },
    {
      title: "Lightning Fast",
      desc: "From our kitchen to your door in under 45 minutes",
      icon: scooterIcon,
    },
    {
      title: "Customer Love",
      desc: "Thousands of happy customers across Uyo City",
      icon: qualityIcon,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#F6E6C7] py-20"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Small heading */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-sm text-red-500 font-semibold mb-2"
        >
          About Us
        </motion.p>

        {/* Main title */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
        >
          About Queen's Plate
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-sm md:text-base"
        >
          Queen's Plate is a modern food service platform that brings delicious
          Nigerian meals straight to your doorstep. We focus on quality, speed,
          and customer satisfaction — because you deserve a meal that makes you
          smile.
        </motion.p>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="flex flex-col items-center"
            >
              
              {/* Icon */}
              <motion.img
                src={item.icon}
                alt={item.title}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.08 }}
                className="w-[205px] h-[205px] mb-4 object-contain"
              />

              {/* Title */}
              <h3 className="font-semibold text-lg text-gray-800">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm mt-2 max-w-[230px]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};