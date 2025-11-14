import React, { useState } from "react";
import OrderPopup from "../../utlis/OrderPopup";

const dessertsItems = [
  {
    name: "Kheer",
    image: "/images/desserts/kheer.jpg",
    price: "Rs. 150",
    description: "Traditional rice pudding made with milk, sugar, and dry fruits.",
  },
{
  name: "Gajar ka Halwa",
  image: "/images/desserts/gajar-ka-halwa.jpg",
  price: "Rs. 200",
  description: "Sweet carrot dessert cooked in milk and ghee, topped with nuts.",
},
{
  name: "Suji ka Halwa",
  image: "/images/desserts/suji-ka-halwa.jpg",
  price: "Rs. 180",
  description: "Soft and rich semolina pudding cooked with ghee and cardamom.",
},
{
  name: "Gulab Jamun",
  image: "/images/desserts/gulab-jamun.jpg",
  price: "Rs. 160",
  description: "Soft fried milk balls soaked in aromatic sugar syrup.",
},
{
  name: "Rasgulla",
  image: "/images/desserts/rasgulla.jpg",
  price: "Rs. 180",
  description: "Spongy white cheese balls soaked in light sugar syrup.",
},
{
  name: "Barfi",
  image: "/images/desserts/barfi.jpg",
  price: "Rs. 150",
  description: "Dense and creamy sweet made from condensed milk and khoya.",
},
{
  name: "Jalebi",
  image: "/images/desserts/jalebi.jpg",
  price: "Rs. 120",
  description: "Crispy, coiled dessert soaked in sugar syrup — everyone’s favorite.",
},
{
  name: "Zarda",
  image: "/images/desserts/zarda.jpg",
  price: "Rs. 150",
  description: "Sweet yellow rice with raisins, coconut, and dry fruits.",
},
{
  name: "Shahi Tukray",
  image: "/images/desserts/shahi-tukray.jpg",
  price: "Rs. 180",
  description: "Royal bread pudding soaked in saffron milk and topped with nuts.",
},
{
  name: "Firni",
  image: "/images/desserts/shahi-tukray.jpg",
  price: "Rs. 130",
  description: "Creamy ground rice dessert flavored with cardamom and rose water.",
},
{
  name: "Rabri",
  image: "/images/desserts/rabri.jpg",
  price: "Rs. 160",
  description: "Thick sweetened milk layered with malai and nuts.",
},
{
  name: "Kulfi",
  image: "/images/desserts/kulfi.jpg",
  price: "Rs. 150",
  description: "Traditional frozen milk dessert flavored with pistachio and saffron.",
},
{
  name: "Sheer Khurma",
  image: "/images/desserts/sheer-khurma.jpg",
  price: "Rs. 200",
  description: "Festive dessert made with vermicelli, milk, dates, and dry fruits.",
},
{
  name: "Falooda",
  image: "/images/desserts/falooda.jpg",
  price: "Rs. 220",
  description: "Chilled dessert drink layered with vermicelli, jelly, and ice cream.",
},
{
  name: "Labe Sheeren",
  image: "/images/desserts/labe_sheeren.jpg",
  price: "Rs. 120",
  description: "A sweet and creamy traditional dessert, flavored with saffron and cardamom.",
},

];

const DessertsSection = () => {
     const [selectedItem, setSelectedItem] = useState(null);
  
  return (
    <section id="desserts" className="w-full bg-amber-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold mb-2">Desserts (Meetha)</h2>
          <p className="text-lg text-amber-500">Sweet, Creamy & Irresistible</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dessertsItems.map((item, index) => (
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

export default DessertsSection;
