import React from "react";
// import biryani from "../../../public/assets/biryani.png";
// import karahi from "../../../public/assets/karahi.png";
// import chinese from "../../../public/assets/chinese.png";
// import drinks from "../../../public/assets/drinks.png";

const FoodPoster = () => {
  return (
    <section className="w-full">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-0 w-full">

        {/* ====== Card 1: Biryani ====== */}
        <div className="relative bg-[#000000] h-[300px] overflow-hidden flex items-center justify-start">
          <img
            // src={biryani}
            alt="Biryani"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>

          <div className="absolute top-8 left-6 text-white z-10">
            <p className="text-yellow-400 text-sm">Special Dish</p>
            <h2 className="text-3xl font-extrabold leading-tight">
              Hyderabadi <br /> Chicken Biryani
            </h2>
            <span className="bg-yellow-400 text-black px-3 py-1 rounded text-sm mt-2 inline-block">
              Popular Choice
            </span>
          </div>
        </div>

        {/* ====== Card 2: Karahi ====== */}
        <div className="relative bg-[#8B0000] h-[300px] overflow-hidden flex items-center justify-start">
          <img
            // src={karahi}
            alt="Karahi"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute top-8 left-6 text-white">
            <p className="text-yellow-300 text-sm font-semibold">Authentic</p>
            <h2 className="text-3xl font-bold">Chicken Karahi</h2>
            <p className="text-sm mt-1 opacity-90">Traditional Pakistani Flavor</p>
          </div>
        </div>

        {/* ====== Card 3: Chinese ====== */}
        <div className="relative bg-[#c27000] h-[300px] overflow-hidden flex items-center justify-start">
          <img
            // src={chinese}
            alt="Chinese Food"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute top-8 left-6 text-white">
            <p className="text-yellow-300 text-sm font-semibold">
              Spicy & Delicious
            </p>
            <h2 className="text-3xl font-bold">Chinese Cuisine</h2>
            <p className="text-sm mt-1 opacity-90">Noodles, Fried Rice & More</p>
          </div>
        </div>

        {/* ====== Card 4: Drinks ====== */}
        <div className="relative bg-[#ff7b00] h-[300px] overflow-hidden flex items-center justify-start">
          <img
            // src={drinks}
            alt="Drinks"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute top-8 left-6 text-white">
            <p className="text-yellow-200 text-sm font-semibold">
              Refresh Yourself
            </p>
            <h2 className="text-3xl font-bold">Drinks & Beverages</h2>
            <p className="text-sm mt-1 opacity-90">Cool, Fresh & Sweet</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FoodPoster;
