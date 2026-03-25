// ================= ABOUT.jsx =================
export const About = () => {
  return (
    <section className="bg-[#F6E6C7] py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">About Rujira Plates</h2>

        <p className="text-gray-600 max-w-2xl mx-auto">
          We provide high-quality meals using the freshest ingredients and
          fastest delivery service.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {["Quality Food", "Fast Delivery", "Online Order"].map((item) => (
            <div key={item} className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};