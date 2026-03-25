// ================= HOWTOORDER.jsx =================
import { FaDownload, FaSearch, FaShoppingCart, FaBox } from "react-icons/fa";

export const HowToOrder = () => {
  const steps = [
    {
      icon: <FaDownload />,
      step: "Step 1",
      title: "Download the App",
      desc: "Get the Queen's Plate app on your phone",
    },
    {
      icon: <FaSearch />,
      step: "Step 2",
      title: "Browse Meals",
      desc: "Explore our wide range of Nigerian dishes",
    },
    {
      icon: <FaShoppingCart />,
      step: "Step 3",
      title: "Place Your Order",
      desc: "Add meals to cart and checkout in seconds",
    },
    {
      icon: <FaBox />,
      step: "Step 4",
      title: "Get it Delivered",
      desc: "Sit back while we bring the food to you",
    },
  ];

  return (
    <section className="bg-[#B3202A] py-20 text-center text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          How to Order
        </h2>
        <p className="text-sm text-white/80 mb-14">
          Four simple steps to your next great meal
        </p>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {steps.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              
              {/* Icon box */}
              <div className="bg-white text-[#B3202A] p-4 rounded-xl text-xl mb-4">
                {item.icon}
              </div>

              {/* Step label */}
              <p className="text-xs text-white/70 mb-1">
                {item.step}
              </p>

              {/* Title */}
              <h3 className="font-semibold mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-white/80 max-w-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4">
          
          {/* Primary button */}
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
            Download App
          </button>

          {/* Outline button */}
          <button className="border border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-[#B3202A] transition">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};