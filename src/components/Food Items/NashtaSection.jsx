import React, { useState } from "react";
import OrderPopup from "../../utlis/OrderPopup";

const breakfastItems = [
 {
  name: "Halwa Puri",
  image: "/images/nashta/halwa-puri.jpg",
  price: "Rs. 180",
  description: "Traditional breakfast platter with soft puris, suji halwa, and spicy chanay.",
},
{
  name: "Chanay",
  image: "/images/nashta/chanay.jpg",
  price: "Rs. 120",
  description: "Spicy chickpeas cooked with masala and served with naan or puri.",
},
{
  name: "Aloo Bhujia",
  image: "/images/nashta/aloo-bhujia.jpg",
  price: "Rs. 100",
  description: "Crispy and spicy fried potatoes served with paratha or roti.",
},
{
  name: "Anda Fry",
  image: "/images/nashta/anda-fry.jpg",
  price: "Rs. 80",
  description: "Sunny side up eggs fried perfectly in desi ghee.",
},
{
  name: "Omelette",
  image: "/images/nashta/omelette.jpg",
  price: "Rs. 100",
  description: "Fluffy egg omelette with onions, chilies, and coriander.",
},
{
  name: "Paratha",
  image: "/images/nashta/paratha.jpg",
  price: "Rs. 80",
  description: "Golden fried paratha — crispy outside, soft inside.",
},
{
  name: "Nihari with Naan",
  image: "/images/nashta/nihari-with-naan.jpg",
  price: "Rs. 350",
  description: "Tender beef nihari served hot with fresh naan — a breakfast classic.",
},
{
  name: "Suji Halwa",
  image: "/images/nashta/suji-halwa.jpg",
  price: "Rs. 120",
  description: "Sweet semolina halwa cooked in ghee and garnished with nuts.",
},
{
  name: "Lassi",
  image: "/images/nashta/lassi.jpg",
  price: "Rs. 100",
  description: "Refreshing traditional yogurt drink — served sweet or salted.",
},
{
  name: "Doodh Patti",
  image: "/images/nashta/doodh-patti.jpg",
  price: "Rs. 60",
  description: "Strong and creamy milk tea brewed to perfection.",
},

];

const BreakfastSection = () => {
     const [selectedItem, setSelectedItem] = useState(null);
  
  return (
    <section id="nashta" className="w-full bg-amber-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold mb-2">Nashta (Breakfast)</h2>
          <p className="text-lg text-amber-500">Start Your Morning with Traditional Flavors</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {breakfastItems.map((item, index) => (
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
                  <button className="bg-yellow-600 text-white px-3 py-1 rounded hover:bg-yellow-700 transition">
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

export default BreakfastSection;
