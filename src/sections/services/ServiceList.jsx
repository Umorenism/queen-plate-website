import React from "react";
import {
  FiClock,
  FiTruck,
  FiShoppingBag,
  FiMapPin,
} from "react-icons/fi";

const services = [
  {
    icon: <FiClock size={18} />,
    title: "Freshly Prepared Meals",
    desc: "Enjoy hot, delicious meals made fresh daily with quality ingredients.",
  },
  {
    icon: <FiTruck size={18} />,
    title: "Fast Food Delivery",
    desc: "Get your meals delivered quickly and safely right to your doorstep.",
  },
  {
    icon: <FiShoppingBag size={18} />,
    title: "Online Ordering",
    desc: "Order your favorite meals easily from anywhere at any time.",
  },
  {
    icon: <FiMapPin size={18} />,
    title: "Real-Time Tracking",
    desc: "Track your order live from kitchen preparation to delivery.",
  },
];

const ServiceList = () => {
  return (
    <section className="bg-[#f6e6d2] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* small heading */}
        <p className="text-red-500 text-sm font-medium mb-2">
          What we do
        </p>

        {/* main heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Our Services
        </h2>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 text-left"
            >
              {/* icon */}
              <div className="w-10 h-10 flex items-center justify-center rounded-md border border-red-200 text-red-500 mb-4">
                {service.icon}
              </div>

              {/* title */}
              <h3 className="font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>

              {/* description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceList;