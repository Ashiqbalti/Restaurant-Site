import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image: "/slide-imges/slider-img1.png",
    title: "Welcome To Chef Cuisine Cater",
    subtitle: "Spice Up Your Life",
  },
  {
    id: 2,
    image: "/slide-imges/slider-img2.png",
    title: "Fresh Ingredients, Real Taste",
    subtitle: "Every dish made with love and care",
  },
  {
    id: 3,
    image: "/slide-imges/slider-img3.png",
    title: "Sit back, relax, and enjoy great food 🌿",
    subtitle: "Find calmness in every green leaf 🌿",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="bg-black/40 text-white text-center p-8 rounded-xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-2">{slide.title}</h1>
              <p className="text-lg md:text-2xl">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-4 h-4 rounded-full transition-all ${
              i === current ? "bg-white scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
