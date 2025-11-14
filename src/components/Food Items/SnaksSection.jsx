import React, { useState } from "react";
import OrderPopup from "../../utlis/OrderPopup";

const snacksItems = [
 {
  name: "Aloo Samosa",
  image: "/images/snacks/aloo-samosa.jpg",
  price: "Rs. 60",
  description: "Crispy fried samosa stuffed with spicy mashed potatoes.",
},
{
  name: "Chicken Samosa",
  image: "/images/snacks/chicken-samosa.jpg",
  price: "Rs. 80",
  description: "Golden fried pastry filled with flavorful minced chicken.",
},
{
  name: "Keema Samosa",
  image: "/images/snacks/keema-samosa.jpg",
  price: "Rs. 90",
  description: "Deep-fried crispy samosa packed with minced beef and spices.",
},
{
  name: "Vegetable Pakora",
  image: "/images/snacks/vegetable-pakora.jpg",
  price: "Rs. 70",
  description: "Crispy fritters made from fresh vegetables coated in chickpea batter.",
},
 {
    name: "Chicken Wings",
    image: "/images/bbq/chicken-wings.jpg",
    price: "Rs. 320",
    description: "Crispy grilled wings with tangy masala glaze.",
  },
  {
    name: "Chicken Popcorn",
    image: "/images/bbq/chicken-popcorn.jpg",
    price: "Rs. 300",
    description: "Crunchy bite-sized chicken snacks for a perfect BBQ starter.",
  },
 
  {
    name: "Chicken Nugget",
    image: "/images/bbq/chicken-nugget.jpg",
    price: "Rs. 250",
    description: "Crispy golden chicken nuggets with smoky flavor.",
  },
  {
    name: "Chicken Cheese Nugget",
    image: "/images/bbq/cheese-nugget.jpg",
    price: "Rs. 280",
    description: "Delicious cheese-filled nuggets with a creamy, melty center.",
  },
  
  {
    name: "Chicken Donut",
    image: "/images/bbq/chicken-donut.jpg",
    price: "Rs. 280",
    description: "Crispy fried chicken donut rings with a BBQ twist.",
  },
 
  {
    name: "Chicken Fries",
    image: "/images/bbq/chicken-fries.jpg",
    price: "Rs. 250",
    description: "Crispy chicken strips with BBQ flavor.",
  },
{
  name: "Bread Pakora",
  image: "/images/snacks/bread-pakora.jpg",
  price: "Rs. 60",
  description: "Bread slices stuffed with spicy filling and deep-fried till golden.",
},
{
  name: "Dahi Bhallay",
  image: "/images/snacks/dahi-bhallay.jpg",
  price: "Rs. 120",
  description: "Soft lentil balls topped with yogurt, chutneys, and masala.",
},
{
  name: "Papri Chaat",
  image: "/images/snacks/papri-chaat.jpg",
  price: "Rs. 100",
  description: "Crispy papri topped with potatoes, yogurt, and tamarind chutney.",
},
{
  name: "Chana Chaat",
  image: "/images/snacks/chana-chaat.jpg",
  price: "Rs. 80",
  description: "Tangy chickpea salad mixed with onions, tomatoes, and masala.",
},
{
  name: "Fruit Chaat",
  image: "/images/snacks/fruit-chaat.jpg",
  price: "Rs. 100",
  description: "Fresh seasonal fruits mixed with spicy chaat masala.",
},
{
  name: "Bun Kabab",
  image: "/images/snacks/bun-kabab.jpg",
  price: "Rs. 150",
  description: "Spicy Pakistani-style burger with shami kabab and chutney.",
},
{
  name: "Anda Shami",
  image: "/images/snacks/anda-shami.jpg",
  price: "Rs. 130",
  description: "Egg and shami kabab combo served in desi style.",
},
{
  name: "Chicken Roll",
  image: "/images/snacks/chicken-roll.jpg",
  price: "Rs. 180",
  description: "Paratha roll filled with spicy grilled chicken and chutney.",
},
{
  name: "Gol Gappay",
  image: "/images/snacks/gol-gappay.jpg",
  price: "Rs. 100",
  description: "Crispy puris filled with tangy imli water and chickpeas.",
},
{
  name: "Masala Fries",
  image: "/images/snacks/masala-fries.jpg",
  price: "Rs. 120",
  description: "Golden fries seasoned with spicy masala and herbs.",
},
{
  name: "Jalebi",
  image: "/images/snacks/jalebi.jpg",
  price: "Rs. 100",
  description: "Crispy sweet coils soaked in sugar syrup — a festival favorite.",
},


];

const SnacksSection = () => {
     const [selectedItem, setSelectedItem] = useState(null);
  
  return (
    <section id="snacks" className="w-full bg-amber-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold mb-2">Snacks & Street Food</h2>
          <p className="text-lg text-amber-500">Crispy, Tangy & Full of Flavor</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {snacksItems.map((item, index) => (
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
                  <button className="bg-pink-600 text-white px-3 py-1 rounded hover:bg-pink-700 transition">
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

export default SnacksSection;
