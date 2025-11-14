import React, { useState } from "react";
import OrderPopup from "../../utlis/OrderPopup";

const mainCourseItems = [
  {
  name: "Chicken Fried Rice",
  image: "/images/mainCourse/chicken-fried-rice.jpg",
  price: "Rs. 550",
  description:
    "Classic wok-tossed fried rice with tender chicken, eggs, and fresh vegetables.",
},
{
  name: "Veg Fried Rice",
  image: "/images/mainCourse/veg-fried-rice.jpg",
  price: "Rs. 450",
  description:
    "Aromatic rice stir-fried with colorful vegetables and light soy seasoning.",
},
{
  name: "Egg Fried Rice",
  image: "/images/mainCourse/egg-fried-rice.jpg",
  price: "Rs. 480",
  description:
    "Delicious fried rice tossed with scrambled eggs and soy sauce for rich flavor.",
},
{
  name: "Chicken Chow Mein",
  image: "/images/mainCourse/chicken-chow-mein.jpg",
  price: "Rs. 600",
  description:
    "Soft noodles stir-fried with chicken, vegetables, and savory sauces.",
},
{
  name: "Veg Chow Mein",
  image: "/images/mainCourse/veg-chow-mein.jpg",
  price: "Rs. 500",
  description:
    "Crispy noodles tossed with fresh vegetables, garlic, and soy-based sauce.",
},
{
  name: "Chicken Hakka Noodles",
  image: "/images/mainCourse/chicken-hakka-noodles.jpg",
  price: "Rs. 620",
  description:
    "Street-style Hakka noodles with juicy chicken, peppers, and Chinese spices.",
},
{
  name: "Veg Hakka Noodles",
  image: "/images/mainCourse/veg-hakka-noodles.jpg",
  price: "Rs. 520",
  description:
    "Fresh noodles stir-fried with vegetables and soy sauce for perfect flavor.",
},
{
  name: "Garlic Chicken",
  image: "/images/mainCourse/garlic-chicken.jpg",
  price: "Rs. 650",
  description:
    "Crispy fried chicken tossed in a bold garlic sauce with spring onions.",
},
{
  name: "Chilli Garlic Chicken",
  image: "/images/mainCourse/chilli-garlic-chicken.jpg",
  price: "Rs. 670",
  description:
    "Spicy and tangy chicken cooked with garlic, chili paste, and bell peppers.",
},
{
  name: "Schzwan Chicken",
  image: "/images/mainCourse/schzwan-chicken.jpg",
  price: "Rs. 700",
  description:
    "Fiery Szechuan-style chicken with red chilies and garlic in thick sauce.",
},
{
  name: "Paneer in Black Bean Sauce",
  image: "/images/mainCourse/paneer-black-bean.jpg",
  price: "Rs. 620",
  description:
    "Soft paneer cubes tossed in savory black bean sauce with Chinese herbs.",
},
{
  name: "Beef in Black Bean Sauce",
  image: "/images/mainCourse/beef-black-bean.jpg",
  price: "Rs. 750",
  description:
    "Tender beef slices stir-fried with black bean sauce and vegetables.",
},

];

const ChineseMainCourse = () => {
     const [selectedItem, setSelectedItem] = useState(null);
  
  return (
    <section className="w-full bg-amber-100 py-16 px-6 ">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold mb-2">Main Course</h2>
          <p className="text-lg text-yellow-600">
            Wok-Tossed, Spicy & Perfectly Cooked
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainCourseItems.map((item, index) => (
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

export default ChineseMainCourse;
