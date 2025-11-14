import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaArrowUp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#111517] text-white pt-12 pb-20 flex flex-col items-center justify-center">
      {/* ====== TOP SECTION ====== */}
      <div className="w-full max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-yellow-400">Contact Us</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-yellow-400" /> Karachi, Pakistan
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-400" /> +92 300 2118767
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-400" /> info@chefcuisine.pk
            </li>
          </ul>
        </div>


         {/* Social Links */}
        <div className="flex flex-col  md:items-start">
          <h3 className="text-lg font-semibold mb-3 text-yellow-400">Follow Us</h3>
          <div className="flex space-x-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-yellow-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/chef_cuisine_cater?igsh=cmJ2N2V1OHU1dmN3"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-yellow-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/923002118767"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-green-500 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Google Map */}
        <div className="overflow-hidden rounded-xl shadow-lg border border-gray-700">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3620.1834038702273!2d67.08695607537076!3d24.857584877931227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDUxJzI3LjMiTiA2N8KwMDUnMjIuMyJF!5e0!3m2!1sen!2s!4v1762502241188!5m2!1sen!2s"
            width="100%"
            height="220"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Chef Cuisine Location"
          ></iframe>
        </div>

       
      </div>

      {/* ====== BOTTOM SECTION ====== */}
      <div className="w-full border-t border-gray-700 pt-5 text-center text-gray-400 text-sm">
        Powered by{" "}
        <span className="font-semibold text-white">Chef Cuisine</span> |{" "}
        <a href="/privacy" className="hover:text-yellow-400 px-2">
          Privacy Policy
        </a>
        |
        <a href="/faqs" className="hover:text-yellow-400 px-2">
          FAQs
        </a>
      </div>

      {/* ====== FLOATING BUTTONS ====== */}
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/923002118767"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-5 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition z-60"
      >
        <FaWhatsapp className="text-white text-xl" />
      </a>

      {/* Scroll To Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-5 right-5 bg-[#40000A] p-3 rounded-full shadow-md hover:scale-110 transition z-60"
      >
        <FaArrowUp className="text-white text-lg" />
      </button>
    </footer>
  );
};

export default Footer;
