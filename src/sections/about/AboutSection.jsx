// ================= ABOUT.jsx =================
export const AboutSection = () => {
  const features = [
    {
      title: "Quality First",
      desc: "Every meal crafted with premium, fresh ingredients",
      icon: "🍽️",
    },
    {
      title: "Lightning Fast",
      desc: "From our kitchen to your door in under 45 minutes",
      icon: "🛵",
    },
    {
      title: "Customer Love",
      desc: "Thousands of happy customers across Uyo City",
      icon: "❤️",
    },
  ];

  return (
    <section className="bg-[#F6E6C7] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Small heading */}
        <p className="text-sm text-red-500 font-semibold mb-2">
          About Us
        </p>

        {/* Main title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          About Queen's Plate
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-sm md:text-base">
          Queen's Plate is a modern food service platform that brings delicious
          Nigerian meals straight to your doorstep. We focus on quality, speed,
          and customer satisfaction — because you deserve a meal that makes you
          smile.
        </p>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {features.map((item) => (
            <div key={item.title} className="flex flex-col items-center">
              
              {/* Icon placeholder (replace with image if needed) */}
              <div className="text-5xl mb-4">{item.icon}</div>

              {/* Title */}
              <h3 className="font-semibold text-lg text-gray-800">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm mt-2 max-w-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};