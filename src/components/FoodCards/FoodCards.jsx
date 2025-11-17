import React from "react";

const FoodCards = ({ setSelectedCategory }) => {
  const cards = [
    {
      id: "biryani",
      title: "Biryani & Pulao",
      subtitle: "Royal & Flavorful",
      discount: "Chef’s Special",
      image: "/assets/biryani.png",
      bg: "bg-gradient-to-br from-yellow-700 to-orange-600",
    },
    {
      id: "karahi",
      title: "Karahi & Handi",
      subtitle: "Traditional Taste",
      discount: "Freshly Cooked",
      image: "/assets/karahi.png",
      bg: "bg-gradient-to-br from-red-700 to-orange-800",
    },
    {
      id: "qorma",
      title: "Qorma, Nihari & Main Dishes",
      subtitle: "Rich & Spicy",
      discount: "Authentic Flavors",
      image: "/assets/qorma.png",
      bg: "bg-gradient-to-br from-amber-700 to-red-900",
    },
    {
      id: "bbq",
      title: "BBQ & Grill",
      subtitle: "Smoky Perfection",
      discount: "Weekend Special",
      image: "/assets/bbq.png",
      bg: "bg-gradient-to-br from-gray-800 to-red-700",
    },
    {
      id: "breads",
      title: "Breads (Roti / Naan / Paratha)",
      subtitle: "Soft & Fresh",
      discount: "Tandoor Style",
      image: "/assets/naan.png",
      bg: "bg-gradient-to-br from-stone-500 to-amber-700",
    },
    {
      id: "nashta",
      title: "Nashta (Breakfast)",
      subtitle: "Start Your Day Right",
      discount: "Morning Deals",
      image: "/assets/nashta.png",
      bg: "bg-gradient-to-br from-yellow-500 to-orange-700",
    },
    {
      id: "snacks",
      title: "Snacks & Street Food",
      subtitle: "Crispy & Fun",
      discount: "All Day Cravings",
      image: "/assets/snacks.png",
      bg: "bg-gradient-to-br from-amber-600 to-red-700",
    },
    {
      id: "desserts",
      title: "Desserts (Meetha)",
      subtitle: "Sweet & Delightful",
      discount: "Treat Yourself",
      image: "/assets/dessert.png",
      bg: "bg-gradient-to-br from-pink-500 to-rose-700",
    },
    {
      id: "drinks",
      title: "Drinks & Beverages",
      subtitle: "Refreshing & Cool",
      discount: "Beat the Heat!",
      image: "/assets/drinks.png",
      bg: "bg-gradient-to-br from-sky-600 to-blue-900",
    },
  ];
  return (
   <div
  className="relative w-full py-10 px-6 bg-gray-100"
  style={{
    backgroundImage: `url('/background.jpeg')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* 🔹 Black overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* 🔹 Main content (make sure it appears above overlay) */}
  <div className="relative z-10">
    <h1 className="text-5xl text-center text-white mb-10 font-extrabold">
      Our Delicious Menu
    </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {cards.map((item, index) => (
        <div
          key={index}
          onClick={() => setSelectedCategory(item.id)}
          className={`cursor-pointer rounded-xl p-6 text-white flex flex-col justify-between h-[300px] ${item.bg} relative overflow-hidden hover:scale-105 transition-transform duration-300`}
        >
          {/* Card overlay */}
          <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-all"></div>

          {/* Text */}
          <div className="relative z-10">
            <p className="text-sm font-semibold">{item.subtitle}</p>
            <h2 className="text-2xl font-bold mt-1">{item.title}</h2>
            <p className="text-sm mt-1 opacity-80">{item.discount}</p>
          </div>

          {/* Image */}
          <div className="relative z-10 mt-4 flex justify-end">
            <img
              src={item.image}
              alt={item.title}
              className="w-48 h-36 object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default FoodCards;
