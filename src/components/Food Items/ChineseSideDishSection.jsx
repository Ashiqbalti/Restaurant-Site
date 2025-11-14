import React, { useState } from "react";
import OrderPopup from "../../utlis/OrderPopup";

const sideDishes = [
  {
    name: "Crispy Noodles",
    image: "/images/sideDishes/crispy-noodles.jpg",
    price: "Rs. 180",
    description: "Crispy fried noodles served as a crunchy topping or side snack.",
  },
  {
    name: "Fried Wontons",
    image: "/images/sideDishes/fried-wontons.jpg",
    price: "Rs. 220",
    description: "Golden, crispy wontons filled with seasoned chicken or vegetables.",
  },
  {
    name: "Steamed Rice",
    image: "/images/sideDishes/steamed-rice.jpg",
    price: "Rs. 150",
    description: "Soft, fluffy white rice — perfect to pair with any Chinese main course.",
  },
  {
    name: "Chinese Salad",
    image: "/images/sideDishes/chinese-salad.jpg",
    price: "Rs. 200",
    description: "A refreshing salad with cabbage, carrots, and sesame dressing.",
  },
];


const ChineseSideDishes = () => {
     const [selectedItem, setSelectedItem] = useState(null);
  
  return (
    <section className="w-full bg-amber-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold mb-2">Side Dishes & Extras</h2>
          <p className="text-lg text-amber-500">Perfect Complements to Your Meal</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sideDishes.map((item, index) => (
            <div
              key={index}
                onClick={() => setSelectedItem(item)}
              className="bg-white text-gray-900 rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-1">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-red-600">
                    {/* {item.price} */}
                    </span>
                  <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
         {/* Popup */}
        {selectedItem && (
          <OrderPopup item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </div>
    </section>
  );
};

export default ChineseSideDishes;
