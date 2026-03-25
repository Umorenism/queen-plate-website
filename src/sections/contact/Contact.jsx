

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully! (Demo)');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff7e6] via-[#ffe4c4] to-[#ffd4a3] flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-6xl overflow-hidden ">
        {/* Header */}
        <div className=" py-3 text-center">
          
          <p className="text-[#A61E30] text-sm mt-2 font-medium">Get In Touch</p>
        </div>

        <div className="p-10 md:p-16">
          <h1 className="text-5xl font-bold text-center text-gray-800 mb-12 tracking-tight">
            Contact Us
          </h1>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Left Column - Contact Info */}
            <div className="space-y-10">
              <div className="flex gap-6 items-start group">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
                  <Phone className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Phone</p>
                  <p className="text-gray-600">+234 812 345 6789</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
                  <Mail className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Email</p>
                  <p className="text-gray-600">hello@queenplate.com</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Location</p>
                  <p className="text-gray-600">12 Orion road Uyo, Akwa Ibom State.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Hours</p>
                  <p className="text-gray-600">Mon-Sun: 8AM - 10PM</p>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-orange-400 focus:ring-4 focus:ring-orange-100 outline-none transition-all text-gray-700 placeholder-gray-400"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-6 py-4 rounded-2xl  border border-gray-200
                   focus:border-orange-400 focus:ring-4 focus:ring-orange-100 outline-none transition-all text-gray-700 placeholder-gray-400"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={6}
                  className="w-full px-6 py-4 rounded-3xl border border-gray-200 focus:border-orange-400 focus:ring-4 focus:ring-orange-100 outline-none transition-all text-gray-700 placeholder-gray-400 resize-y"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#A61E30] hover:from-[#c72e00] hover:to-[#e63900] text-white font-semibold py-4 rounded-2xl transition-all duration-300 active:scale-95 shadow-lg shadow-orange-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}