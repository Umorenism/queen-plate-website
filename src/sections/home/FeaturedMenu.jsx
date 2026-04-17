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






import React, { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";

const API_BASE =
  "https://queensplate-main-jw6so1.free.laravel.cloud/api/v1";

const STORAGE_BASE =
  "https://queensplate-main-jw6so1.free.laravel.cloud/storage/";

export const FeaturedMenu = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch(`${API_BASE}/web-menu`);
        const data = await res.json();

        if (data.success) {
          const formatted = data.data.featured_meals.map((meal) => ({
            name: meal.name,
            price: `₦${Number(meal.price).toLocaleString()}`,
            image: STORAGE_BASE + meal.image,
          }));

          setFoods(formatted);
        }
      } catch (err) {
        console.log("Failed to fetch featured menu:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  const menuList = [...foods, ...foods, ...foods, ...foods];

  return (
    <section className="bg-[#f6e6d2] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* subtitle */}
        <p className="text-red-500 text-sm font-medium mb-2">
          Popular Dishes
        </p>

        {/* title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Featured Menu
        </h2>

        {/* description */}
        <p className="text-gray-500 text-sm mt-2 mb-12">
          A taste of what's waiting for you on the app
        </p>

        {/* loading state (UI unchanged structure) */}
        {loading ? (
          <p className="text-gray-400">Loading menu...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {menuList.map((food, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition duration-300"
              >
                {/* image */}
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={food.image}
                    alt="food"
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

                  <div className="bg-yellow-100 text-yellow-500 p-2 rounded-full">
                    <FiShoppingCart size={16} />
                  </div>
                </div>

                {/* button */}
                <button className="mt-4 bg-red-600 hover:bg-red-700 text-white w-full py-2 rounded-full text-sm font-medium transition">
                  Order Now
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

