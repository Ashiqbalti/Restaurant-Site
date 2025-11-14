import React from "react";

const About = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center text-white flex items-center justify-center py-12 pt-46 px-6"
      style={{
        backgroundImage: "url('/aboutBg/about-bg.png')", // ✅ correct your image path
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-10">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">
          About Our Restaurant
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg leading-relaxed text-gray-200 px-2 md:px-8">
          Welcome to{" "}
          <span className="font-semibold text-yellow-400">
            Chef Cuisine Cater
          </span>
          , where every meal is crafted with passion and love. From sizzling BBQ
          to aromatic biryanis, our chefs bring you flavors inspired by
          traditional Pakistani cuisine. Whether you’re here for a family dinner
          or a casual evening with friends, we promise an unforgettable dining
          experience filled with warmth, taste, and care.
        </p>

        {/* Quote */}
        <p className="italic text-gray-400 text-sm md:text-base">
          “Good food is the foundation of genuine happiness.”
        </p>

        {/* Video Section */}
        <div className="w-full max-w-xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-700 mt-6">
          <video
            src="/video/aboutUs.mp4" 
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-[360px] md:h-[620px] object-cover"
          >
            <source src="/video/aboutUs.mp4" type="video/mp4" />
            <source src="/video/aboutUs.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default About;
