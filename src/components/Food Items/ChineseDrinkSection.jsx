import React, { useState } from "react";
import OrderPopup from "../../utlis/OrderPopup";

const chineseDrinks = [
 {
  name: "Chinese Green Tea",
  image: "/images/drinks/chinese-green-tea.jpg",
  price: "Rs. 180",
  description:
    "Traditional Chinese green tea brewed to perfection — light, calming, and refreshing.",
},
{
  name: "Cold Drinks (Pakistani Style)",
  image: "/images/drinks/cold-drinks.jpg",
  price: "Rs. 120",
  description:
    "Refreshing cold drinks like Pepsi, 7up, and Pakola — the perfect desi combo with Chinese meals.",
},
];

const ChineseDrinks = () => {
     const [selectedItem, setSelectedItem] = useState(null);
  
  return (
    <section className="w-full bg-amber-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold mb-2">Chinese Drinks</h2>
          <p className="text-lg text-amber-500">Refreshing Complements to Every Meal</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {chineseDrinks.map((item, index) => (
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

export default ChineseDrinks;
