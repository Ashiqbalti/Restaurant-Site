import React, { useState } from "react";
import OrderPopup from "../../utlis/OrderPopup";

const karahiItems = [
  {
    name: "Chicken Karahi",
    image:
      "/images/karahi/chicken-karahi.jpg",
    price: "Rs. 550",
    description:
      "Classic Pakistani karahi made with fresh tomatoes, garlic, and green chilies.",
  },
  {
    name: "Mutton Karahi",
    image:
      "/images/karahi/mutton-karahi.jpg",
    price: "Rs. 750",
    description:
      "Tender mutton cooked in desi ghee and rich tomato gravy.",
  },
  {
    name: "Beef Karahi",
    image:
      "/images/karahi/beef-karahi.jpg",
    price: "Rs. 700",
    description:
      "Spicy beef karahi with flavorful masala and coriander topping.",
  },
  {
    name: "White Chicken Karahi",
    image:
      "/images/karahi/white-karahi.jpg",
    price: "Rs. 600",
    description:
      "Creamy karahi cooked in yogurt and white pepper for a rich, mild flavor.",
  },
  {
    name: "Green Chicken Karahi",
    image:
      "/images/karahi/green-karahi.jpg",
    price: "Rs. 580",
    description:
      "Zesty karahi cooked with fresh coriander and green chilies for a spicy twist.",
  },
  {
    name: "Special Handi",
    image:
      "/images/karahi/special-handi.jpg",
    price: "Rs. 800",
    description:
      "Chef’s special creamy handi cooked with secret spices and butter.",
  },
  {
    name: "Boneless Chicken Handi",
    image:
      "/images/karahi/boneless-chicken.jpg",
    price: "Rs. 650",
    description:
      "Boneless chicken cubes in smooth buttery gravy with herbs.",
  },
  {
    name: "Tikka Karahi",
    image:
      "/images/karahi/tikka-karahi.jpg",
    price: "Rs. 620",
    description:
      "Smoky grilled chicken tikka cooked in spicy karahi masala.",
  },
  {
    name: "Lahori Karahi",
    image:
      "/images/karahi/lahori-karahi.jpg",
    price: "Rs. 700",
    description:
      "Traditional Lahori-style karahi full of bold spices and fresh flavor.",
  },
  {
    name: "Koyla Karahi",
    image:
      "/images/karahi/koyela-karahi.jpg",
    price: "Rs. 750",
    description:
      "Smoked karahi infused with charcoal aroma for authentic taste.",
  },
  {
    name: "Peshawari Karahi",
    image:
      "/images/karahi/peshawari-karahi.jpg",
    price: "Rs. 780",
    description:
      "Rich and flavorful karahi made with desi ghee and minimal spices.",
  },
];

const KarahiSection = () => {
     const [selectedItem, setSelectedItem] = useState(null);
  
  return (
    <section id="karahi" className="w-full bg-amber-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold mb-2">Karahi & Handi</h2>
          <p className="text-lg text-amber-500">Bold, Smoky, and Full of Flavor</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {karahiItems.map((item, index) => (
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

export default KarahiSection;
