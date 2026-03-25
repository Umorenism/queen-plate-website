export const Footer = () => {
  return (
    <footer className="bg-red-700 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-bold text-lg">Rujira Plates</h3>
          <p className="text-sm mt-2">Delicious meals delivered fast.</p>
        </div>

        <div>
          <h3 className="font-semibold">Quick Links</h3>
          <ul className="text-sm mt-2 space-y-1">
            <li>Home</li>
            <li>Menu</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Subscribe</h3>
          <input
            placeholder="Enter email"
            className="mt-2 px-3 py-2 rounded text-black w-full"
          />
        </div>
      </div>
    </footer>
  );
};