import React, { useState } from "react";
import OrderPopup from "../../utlis/OrderPopup";

const breadsItems = [
 {
  name: "Roghni Naan",
  image: "/images/bread/roghni-naan.jpg",
  price: "Rs. 70",
  description: "Soft and fluffy naan brushed with butter and sesame seeds.",
},
{
  name: "Plain Naan",
  image: "/images/bread/plain-naan.jpg",
  price: "Rs. 50",
  description: "Classic tandoori naan baked fresh and perfect with every curry.",
},
{
  name: "Garlic Naan",
  image: "/images/bread/garlic-naan.jpg",
  price: "Rs. 90",
  description: "Naan topped with aromatic garlic and fresh coriander.",
},
{
  name: "Taftaan",
  image: "/images/bread/taaftaan.jpg",
  price: "Rs. 100",
  description: "Soft, slightly sweet bread enriched with milk and saffron.",
},
{
  name: "Sheermal",
  image: "/images/bread/sheermal.jpg",
  price: "Rs. 120",
  description: "Traditional sweet and soft bread flavored with cardamom and milk.",
},
{
  name: "Lachha Paratha",
  image: "/images/bread/lachha-paratha.jpg",
  price: "Rs. 80",
  description: "Layered crispy paratha fried in desi ghee for a flaky texture.",
},
{
  name: "Aloo Paratha",
  image: "/images/bread/aloo-paratha.jpg",
  price: "Rs. 120",
  description: "Stuffed paratha with spiced mashed potatoes and herbs.",
},
{
  name: "Qeema Paratha",
  image: "/images/bread/qeema-paratha.jpg",
  price: "Rs. 150",
  description: "Filled with spicy minced meat and cooked to golden perfection.",
},
{
  name: "Tandoori Roti",
  image: "/images/bread/tandoori-roti.jpg",
  price: "Rs. 40",
  description: "Crisp and wholesome roti baked fresh in the clay tandoor.",
},
{
  name: "Puri",
  image: "/images/bread/puri.jpg",
  price: "Rs. 80",
  description: "Deep-fried golden bread, crispy outside and soft inside.",
},

];

const BreadsSection = () => {
     const [selectedItem, setSelectedItem] = useState(null);
  
  return (
    <section id="breads" className="w-full  bg-amber-100 py-16 px-6">

      <div className=" z-10 max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold mb-2">Breads (Roti / Naan / Paratha)</h2>
          <p className="text-lg text-amber-500">Fresh from the Tandoor — Soft, Crispy & Perfectly Golden</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {breadsItems.map((item, index) => (
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
                 
                  <span className="text-lg font-bold text-orange-600">
                    {/* {item.price} */}

                  </span>
                  <button className="bg-amber-600 text-white px-3 py-1 rounded hover:bg-amber-700 transition">
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

export default BreadsSection;
