// ================= TESTIMONIAL.jsx =================
import { FaStar } from "react-icons/fa";

export const Testimonial = () => {
  const reviews = Array(6).fill({
    name: "Sarah Paul",
    date: "21 Oct 2023",
    text: "Delicious food, great packaging and fast delivery",
    avatar: "https://i.pravatar.cc/40?img=5",
  });

  return (
    <section className="bg-[#F6E6C7] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Small heading */}
        <p className="text-sm text-red-500 font-semibold mb-2">
          Customers Review
        </p>

        {/* Main heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-14">
          What Our Customers Say
        </h2>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-3 gap-10 text-left">
          {reviews.map((item, index) => (
            <div key={index} className="space-y-3">
              
              {/* User info */}
              <div className="flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-sm text-gray-800">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    On {item.date}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 text-red-500 text-sm">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Review text */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};