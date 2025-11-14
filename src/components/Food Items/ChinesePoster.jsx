import React from "react";

const ChinesePoster = () => {
  return (
    <section className="relative w-full h-[45vh] overflow-hidden">
      {/* Background Image */}
      <img
        src="https://t4.ftcdn.net/jpg/02/11/60/49/360_F_211604911_wn1FqBnH7TRfN87ux5pnQ2sgZUj7rGYd.jpg"
        alt="Chinese Food"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2 tracking-wide drop-shadow-lg">
          🥢 Chinese Food Items
        </h1>
        <p className="max-w-2xl text-base md:text-lg text-gray-200 leading-relaxed">
          Taste the essence of authentic Chinese cuisine — bold, savory, and unforgettable.
        </p>
      </div>
    </section>
  );
};

export default ChinesePoster;
