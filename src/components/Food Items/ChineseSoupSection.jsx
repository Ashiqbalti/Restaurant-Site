import React, { useState } from "react";
import OrderPopup from "../../utlis/OrderPopup";

const soups = [
  {
    name: "Hot & Sour Soup",
    image: "/images/soups/hot-&-sour-soup.jpg",
    price: "Rs. 400",
    description:
      "A tangy and spicy soup with chicken, tofu, mushrooms, and rich soy-based flavor.",
  },
  {
    name: "Sweet Corn Soup",
    image: "/images/soups/sweet-corn-soup.jpg",
    price: "Rs. 350",
    description:
      "Mild and creamy soup made with sweet corn, chicken, and egg whites.",
  },
  {
    name: "Chicken Clear Soup",
    image: "/images/soups/chicken-clear-soup.jpg",
    price: "Rs. 320",
    description:
      "A light, healthy chicken broth with vegetables and subtle seasoning.",
  },
  {
    name: "Manchow Soup",
    image: "/images/soups/manchow-soup.jpg",
    price: "Rs. 380",
    description:
      "Spicy and thick soup made with chicken, garlic, and crispy fried noodles.",
  },
  {
    name: "Talumein Soup",
    image: "/images/soups/talumein-soup.jpg",
    price: "Rs. 420",
    description:
      "A flavorful noodle soup packed with vegetables, chicken, and soy sauce.",
  },
];


const ChineseSoups = () => {
     const [selectedItem, setSelectedItem] = useState(null);
  
  return (
    <section className="w-full bg-amber-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold mb-2">Soups</h2>
          <p className="text-lg text-amber-500">
            Warm, Comforting, and Full of Flavor
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {soups.map((item, index) => (
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

export default ChineseSoups;
