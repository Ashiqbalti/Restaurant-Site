import React, { useState } from "react";
import OrderPopup from "../../utlis/OrderPopup";

const starters = [
  {
    name: "Chicken Manchurian",
    image: "/images/starters/chicken-manchurian.jpg",
    price: "Rs. 550",
    description: "Crispy chicken in a spicy tangy Manchurian sauce with vegetables.",
  },
  {
    name: "Veg Manchurian",
    image: "/images/starters/veg-manchurian.jpg",
    price: "Rs. 480",
    description: "Vegetable dumplings tossed in Manchurian gravy full of flavor.",
  },
  {
    name: "Chicken Spring Rolls",
    image: "/images/starters/chicken-spring-rolls.jpg",
    price: "Rs. 400",
    description: "Crispy golden rolls filled with seasoned chicken and vegetables.",
  },
  {
    name: "Veg Spring Rolls",
    image: "/images/starters/veg-spring-rolls.jpg",
    price: "Rs. 350",
    description: "Crispy rolls stuffed with spiced veggies served with chili dip.",
  },
  {
    name: "Chicken 65",
    image: "/images/starters/chicken-65.jpg",
    price: "Rs. 600",
    description: "South Indian spiced fried chicken tossed in curry leaves and yogurt sauce.",
  },
  {
    name: "Chilli Chicken (Dry & Gravy)",
    image: "/images/starters/chilli-chicken.jpg",
    price: "Rs. 620",
    description: "Tender chicken pieces stir-fried in chili-garlic sauce with bell peppers.",
  },
  {
    name: "Honey Chili Potato",
    image: "/images/starters/honey-chili-potato.jpg",
    price: "Rs. 380",
    description: "Crispy potato fingers coated with honey, chili, and sesame glaze.",
  },
  {
    name: "Chicken Lollipops",
    image: "/images/starters/chicken-lollipops.jpg",
    price: "Rs. 520",
    description: "Juicy chicken drumettes fried crisp and tossed in spicy sauce.",
  },
  {
    name: "Crispy Corn",
    image: "/images/starters/crispy-corn.jpg",
    price: "Rs. 300",
    description: "Golden fried corn kernels seasoned with masala and lime.",
  },
];

const ChineseStarters = () => {
     const [selectedItem, setSelectedItem] = useState(null);
  
  return (
    <section className="w-full bg-amber-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold mb-2">Starters & Appetizers</h2>
          <p className="text-lg text-amber-500">
            Crispy, Tangy & Irresistibly Delicious
          </p>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {starters.map((item, index) => (
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

export default ChineseStarters;
    