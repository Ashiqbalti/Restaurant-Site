import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your WhatsApp number (without + or spaces)
    const whatsappNumber = "923363352401"; // 👈 change to your number

    // Create WhatsApp message text
    const text = `Hello! 👋%0A
Name: ${name}%0A
Phone: ${phone}%0A
Email: ${email}%0A
Message: ${message}`;

    // Open WhatsApp chat
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#1f2b27] flex justify-center items-center p-6"
     style={{ backgroundImage: `url(${'/aboutBg/about-bg.png'})` }}>
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-xl p-10">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            We would love to hear from you! Reach us via phone, email, or visit our outlets.
          </p>

          <h3 className="font-semibold text-gray-800 mb-2">Contacts:</h3>
          <p className="text-gray-600 mb-4">
          92 300 2118767
            <br />
          </p>

          <h3 className="font-semibold text-gray-800 mb-2">Karachi</h3>
          <p className="text-gray-600 mb-4">
           Plot # 700, Street # 17, Sector , Manzoor Calony, Main Shaheed-e-Milat road, Karachi.
          </p>

          <div className="flex gap-4 mt-6 text-yellow-500">
            <a href="https://www.instagram.com/chef_cuisine_cater?igsh=cmJ2N2V1OHU1dmN3">Instagram</a>
            <a href="#">Facebook</a>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Form</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Please Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <input
              type="tel"
              placeholder="0300 1234567"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <textarea
              placeholder="Type your message or comment here..."
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-lg transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
