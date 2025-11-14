import React, { useState } from "react";
import OrderPopup from "../../utlis/OrderPopup";

const bbqItems = [
   {
    name: "Chicken Biryani",
    image: "/images/biryani/chicken-biryani.jpg",
    price: "Rs. 350",
    description: "Aromatic basmati rice cooked with tender chicken and rich spices.",
  },
   {
  name: "Beef Rasili Biryani",
  image: "/images/biryani/beef-rasili-biryani.jpg",
  price: "Rs. 450",
  description: "A rich and spicy beef biryani cooked with aromatic rice, herbs, and a special Rasili sauce.",
},
  {
    name: "Chicken Tikka",
    image: "/images/bbq/chicken-tikka.jpg",
    price: "Rs. 350",
    description: "Grilled chicken leg piece marinated in spicy masala and cooked to perfection.",
  },

 {
      name: "Beef Kebab",
      image: "/images/bbq/beef-kebab.jpg",
      price: "Rs. 370",
      description: "Classic beef kebabs with rich smoky flavor.",
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
    name: "Chicken Karahi",
    image:
      "/images/karahi/chicken-karahi.jpg",
    price: "Rs. 550",
    description:
      "Classic Pakistani karahi made with fresh tomatoes, garlic, and green chilies.",
  },
{
  name: "Mutton Qorma",
  image: "/images/qorma/mutton-qorma.jpg",
  price: "Rs. 750",
  description: "Slow-cooked mutton qorma in a flavorful spiced gravy.",
},
{
  name: "Katakat",
  image: "/images/qorma/katakat.jpg",
  price: "Rs. 600",
  description: "Famous Karachi street food made from finely chopped organ meats and spices.",
},
{
  name: "Labe Sheeren",
  image: "/images/desserts/labe-sheeren.jpg",
  price: "Rs. 120",
  description: "A sweet and creamy traditional dessert, flavored with saffron and cardamom.",
},
{
  name: "Kheer",
  image: "/images/desserts/kheer.jpg",
  price: "Rs. 150",
  description: "Traditional rice pudding made with milk, sugar, and dry fruits.",
},


];

const SpecialFood = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section
      id="SpecialFood"
      className="w-full bg-gradient-to-br from-amber-700 to-orange-700 text-white py-16 px-6"
      style={{
        backgroundImage: `url('/aboutBg/about-bg.png')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold mb-2">Our Special</h2>
          <p className="text-lg text-yellow-200">Grilled to Perfection, Freshly Served 🔥</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bbqItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedItem(item)}
              className="bg-white text-gray-900 rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 cursor-pointer"
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
                  <span className="text-lg font-bold text-amber-600">
                    {/* {item.price} */}

                  </span>
                  <button className="bg-amber-500 text-white px-3 py-1 rounded hover:bg-amber-600 transition">
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

export default SpecialFood;
