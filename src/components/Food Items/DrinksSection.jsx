import React, { useState } from "react";
import OrderPopup from "../../utlis/OrderPopup";

const drinksItems = [
  {
  name: "Meethi Lassi",
  image: "/images/drinks/meethi-lassi.jpg",
  price: "Rs. 120",
  description: "Sweet and creamy yogurt-based drink perfect for summer refreshment.",
},
{
  name: "Namkeen Lassi",
  image: "/images/drinks/namkeen-lassi.jpg",
  price: "Rs. 100",
  description: "Refreshing salty lassi made with yogurt, salt, and cumin.",
},
{
  name: "Rooh Afza",
  image: "/images/drinks/rooh-afza.jpg",
  price: "Rs. 80",
  description: "Classic rose-flavored syrup drink served chilled with water or milk.",
},
{
  name: "Sugarcane Juice",
  image: "/images/drinks/sugarcane-juice.jpg",
  price: "Rs. 90",
  description: "Freshly pressed sugarcane juice served cold — naturally sweet and energizing.",
},
{
  name: "Pakola",
  image: "/images/drinks/pakola.jpg",
  price: "Rs. 80",
  description: "Iconic Pakistani green soda — the taste of nostalgia and celebration.",
},
{
  name: "Doodh Soda",
  image: "/images/drinks/doodh-soda.jpg",
  price: "Rs. 100",
  description: "Refreshing blend of milk and soda with sugar and ice — creamy fizz delight.",
},
{
  name: "Mango Shake",
  image: "/images/drinks/mango-shake.jpg",
  price: "Rs. 150",
  description: "Rich, smooth, and creamy shake made with ripe mangoes and milk.",
},
{
  name: "Falooda Drink",
  image: "/images/drinks/falooda-drink.jpg",
  price: "Rs. 200",
  description: "Chilled dessert drink layered with jelly, vermicelli, and ice cream.",
},
{
  name: "Doodh Patti",
  image: "/images/drinks/doodh-patti.jpg",
  price: "Rs. 60",
  description: "Strong and aromatic milk tea brewed with rich flavor — Pakistan’s favorite.",
},
{
  name: "Green Tea / Kahwa",
  image: "/images/drinks/green-tea-kahwa.jpg",
  price: "Rs. 80",
  description: "Soothing herbal tea infused with cardamom, cinnamon, and saffron.",
},

];

const DrinksSection = () => {
     const [selectedItem, setSelectedItem] = useState(null);
  
  return (
    <section id="drinks" className="w-full bg-amber-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold mb-2">Drinks & Beverages</h2>
          <p className="text-lg text-amber-500">Cool, Refreshing & Energizing</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {drinksItems.map((item, index) => (
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
                  <button className="bg-emerald-600 text-white px-3 py-1 rounded hover:bg-emerald-700 transition">
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

export default DrinksSection;
