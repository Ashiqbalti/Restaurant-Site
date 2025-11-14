import React, { useState } from "react";
import OrderPopup from "../../utlis/OrderPopup";

const qormaItems = [
 {
  name: "Chicken Qorma",
  image: "/images/qorma/chicken-qorma.jpg",
  price: "Rs. 550",
  description: "Rich Mughlai-style chicken qorma cooked with yogurt and aromatic spices.",
},
{
  name: "Mutton Qorma",
  image: "/images/qorma/mutton-qorma.jpg",
  price: "Rs. 750",
  description: "Slow-cooked mutton qorma in a flavorful spiced gravy.",
},
{
  name: "Beef Nihari",
  image: "/images/qorma/beef-nihari.jpg",
  price: "Rs. 700",
  description: "Classic Pakistani breakfast dish simmered overnight for deep flavor.",
},
{
  name: "Nalli Nihari",
  image: "/images/qorma/nalli-nihari.jpg",
  price: "Rs. 850",
  description: "Tender beef shank slow-cooked in a spicy gravy — melt in your mouth!",
},
{
  name: "Haleem",
  image: "/images/qorma/haleem.jpg",
  price: "Rs. 500",
  description: "Thick, rich stew made with wheat, lentils, and slow-cooked meat.",
},
{
  name: "Katakat",
  image: "/images/qorma/katakat.jpg",
  price: "Rs. 600",
  description: "Famous Karachi street food made from finely chopped organ meats and spices.",
},
{
  name: "Aloo Gosht",
  image: "/images/qorma/aloo-gosht.jpg",
  price: "Rs. 580",
  description: "Home-style curry with tender meat and soft potatoes in spicy gravy.",
},
{
  name: "Keema Matar",
  image: "/images/qorma/keema-matar.jpg",
  price: "Rs. 560",
  description: "Minced meat with green peas — a perfect comfort meal.",
},
{
  name: "Paye",
  image: "/images/qorma/paye.jpg",
  price: "Rs. 850",
  description: "Traditional Pakistani trotters curry — rich, spicy, and slow-cooked overnight.",
},

];

const QormaNihariSection = () => {
     const [selectedItem, setSelectedItem] = useState(null);
  
  return (
    <section id="qorma" className="w-full bg-amber-100 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold mb-2">Qorma, Nihari & Main Dishes</h2>
          <p className="text-lg text-amber-500">Rich, Spicy, and Deeply Flavorful</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {qormaItems.map((item, index) => (
            <div key={index} 
              onClick={() => setSelectedItem(item)}
            className="bg-white text-gray-900 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-1">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <div className="flex justify-between items-center">
                  
                  <span className="text-lg font-bold text-orange-600">
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

export default QormaNihariSection;
