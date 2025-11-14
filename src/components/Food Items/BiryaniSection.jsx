import React, { useState } from "react";
import OrderPopup from "../../utlis/OrderPopup";
const biryaniItems = [
  {
    name: "Chicken Biryani",
    image: "/images/biryani/chicken-biryani.jpg",
    price: "Rs. 350",
    description: "Aromatic basmati rice cooked with tender chicken and rich spices.",
  },
  {
    name: "Beef Biryani",
    image: "/images/biryani/beef-biryani.jpg",
    price: "Rs. 400",
    description: "Spicy beef layered with flavorful rice and herbs.",
  },
   {
  name: "Beef Rasili Biryani",
  image: "/images/biryani/beef-rasili-biryani.jpg",
  price: "Rs. 450",
  description: "A rich and spicy beef biryani cooked with aromatic rice, herbs, and a special Rasili sauce.",
},
  {
    name: "Mutton Biryani",
    image: "/images/biryani/mutton-biryani.jpg",
    price: "Rs. 480",
    description: "Juicy mutton pieces cooked in traditional biryani masala.",
  },
  {
    name: "Sindhi Biryani",
    image: "/images/biryani/sindhi-biryani.jpg",
    price: "Rs. 420",
    description: "A bold and spicy biryani with Sindhi-style masala and green chilies.",
  },
  {
    name: "Bombay Biryani",
    image: "/images/biryani/bombay-biryani.jpg",
    price: "Rs. 430",
    description: "Tangy and flavorful biryani from the streets of Bombay.",
  },
  {
    name: "Tikka Biryani",
    image: "/images/biryani/tikka-biryani.jpg",
    price: "Rs. 450",
    description: "Smoky chicken tikka mixed with spiced rice for a unique taste.",
  },
  {
    name: "Anda Biryani",
    image: "/images/biryani/anda-biryani.jpg",
    price: "Rs. 320",
    description: "Egg biryani cooked with mild spices and basmati rice.",
  },
  {
    name: "Kabuli Pulao",
    image: "/images/biryani/kabuli-pulao.jpg",
    price: "Rs. 500",
    description: "Afghani-style pulao with raisins, carrots, and tender meat.",
  },
  {
    name: "Yakhni Pulao",
    image: "/images/biryani/yakhni-pulao.jpg",
    price: "Rs. 380",
    description: "Fragrant rice cooked in bone broth and light spices.",
  },
  {
    name: "Matar Pulao",
    image: "/images/biryani/matar-pulao.jpg",
    price: "Rs. 300",
    description: "Simple yet delicious peas pulao cooked with ghee.",
  },
  {
    name: "Aloo Biryani",
    image: "/images/biryani/aloo-biryani.jpg",
    price: "Rs. 310",
    description: "Vegetarian biryani with spiced potatoes and basmati rice.",
  },
];

const BiryaniSection = () => {



   const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section id="biryani" className="w-full bg-amber-100  py-16 px-6" 
  //    style={{
  //   backgroundImage: `url('/aboutBg/about-bg.png')`,
  //   backgroundPosition: "center",
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  // }}
  >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold mb-2">Biryani & Pulao</h2> 
          <p className="text-lg text-amber-500">Royal & Flavorful Chef’s Special</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {biryaniItems.map((item, index) => (
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

export default BiryaniSection;
