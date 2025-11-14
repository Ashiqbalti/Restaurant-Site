import React, { useState } from "react";
import OrderPopup from "../../utlis/OrderPopup";

const bbqItems = [
  {
  name: "Chicken Tikka",
  image: "/images/bbq/chicken-tikka.jpg",
  price: "Rs. 350",
  description: "Grilled chicken leg piece marinated in spicy masala and cooked to perfection.",
},
  {
    name: "Malai Boti",
    image: "/images/bbq/malai-boti.jpg",
    price: "Rs. 380",
    description: "Tender chicken cubes marinated in creamy malai sauce and grilled until juicy.",
  },
  {
    name: "Chicken Boneless Tikka",
    image: "/images/bbq/boneless-tikka.jpg",
    price: "Rs. 370",
    description: "Soft, boneless chicken pieces infused with BBQ flavors.",
  },
  {
    name: "Chicken Leg Boti",
    image: "/images/bbq/leg-boti.jpg",
    price: "Rs. 360",
    description: "Succulent leg pieces grilled with traditional spices.",
  },
  {
    name: "Chicken Chest Tikka",
    image: "/images/bbq/chest-tikka.jpg",
    price: "Rs. 360",
    description: "Smoky grilled chicken breast with a hint of lemon and spice.",
  },
{
  name: "Seekh Kabab",
  image: "/images/bbq/seekh-kebab.jpg",
  price: "Rs. 300",
  description: "Minced beef kebabs grilled over charcoal with desi spices.",
},
{
  name: "Beef Bihari Boti",
  image: "/images/bbq/beef-bihari-boti.jpg",
  price: "Rs. 420",
  description: "Tender beef pieces marinated in bihari-style masala with smoky aroma.",
},
{
  name: "Reshmi Kabab",
  image: "/images/bbq/reshmi-kebab.jpg",
  price: "Rs. 380",
  description: "Silky smooth chicken kebabs with mild and creamy flavors.",
},
{
  name: "BBQ Platter",
  image: "/images/bbq/bbq-platter.jpg",
  price: "Rs. 950",
  description: "A mix of tikka, boti, and kebabs served with naan and raita.",
},
 {
    name: "Chicken Shashlik Boti",
    image: "/images/bbq/shashlik-boti.jpg",
    price: "Rs. 400",
    description: "Grilled chicken cubes with veggies and sweet & sour BBQ sauce.",
  },{
      name: "Chicken Wings Boti",
      image: "/images/bbq/wings-boti.jpg",
      price: "Rs. 350",
      description: "Juicy wing meat cooked on skewers for an authentic BBQ taste.",
    },
    {
      name: "Beef Seekh Kabab",
      image: "/images/bbq/beef-seekh.jpg",
      price: "Rs. 380",
      description: "Traditional spicy minced beef grilled on skewers.",
    },
    {
      name: "Beef Kebab",
      image: "/images/bbq/beef-kebab.jpg",
      price: "Rs. 370",
      description: "Classic beef kebabs with rich smoky flavor.",
    },
    {
      name: "Chicken Kebab",
      image: "/images/bbq/chicken-kebab.jpg",
      price: "Rs. 350",
      description: "Soft and juicy minced chicken kebabs cooked over charcoal.",
    },
    {
      name: "Reshmi Kebab",
      image: "/images/bbq/reshmi-kebab.jpg",
      price: "Rs. 360",
      description: "Creamy and silky chicken kebabs marinated in yogurt and cream.",
    },
    {
      name: "Chicken Dhaka Kebab",
      image: "/images/bbq/dhaka-kebab.jpg",
      price: "Rs. 370",
      description: "Crispy Dhaka-style kebabs made with minced chicken and spices.",
    },
     {
        name: "Beef Gilafi Kebab",
        image: "/images/bbq/beef-gilafi.jpg",
        price: "Rs. 400",
        description: "Spiced beef kebabs wrapped in a flavorful capsicum coating.",
      },
      {
        name: "Chicken Lolipop BBQ",
        image: "/images/bbq/lolipop-bbq.jpg",
        price: "Rs. 320",
        description: "Spicy chicken lollipops coated with BBQ masala.",
      },

];

const BBQSection = () => {

     const [selectedItem, setSelectedItem] = useState(null);
  
  return (
    <section id="bbq" className=" w-full bg-amber-100 py-16 px-6">

      <div className=" z-10 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold mb-2">BBQ & Tikka</h2>
          <p className="text-lg text-amber-500">Smoky, Spicy, and Irresistible</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bbqItems.map((item, index) => (
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
                  <button className="bg-orange-600 text-white px-3 py-1 rounded hover:bg-orange-700 transition">
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

export default BBQSection;
