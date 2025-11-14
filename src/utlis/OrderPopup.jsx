import React, { useState } from "react";

const OrderPopup = ({ item, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  if (!item) return null;

  // Convert price string like "Rs. 250" or "250" into number
  const numericPrice = Number(item.price.toString().replace(/[^0-9]/g, ""));
  const totalPrice = numericPrice * quantity;

  const handleOrder = () => {
    const phoneNumber = "923002118767"; // 🔹 your WhatsApp number
    const message = ` Order Detail
 Item: ${item.name}
Please confirm my order.`;

// Quantity: ${quantity}
//  Price per item: Rs. ${numericPrice}
//  Total: Rs. ${totalPrice}

   const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
const url = isMobile
  ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

window.open(url, "_blank");
    onClose();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-lg w-11/12 sm:w-96 p-6 relative text-center"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-lg"
        >
          ✕
        </button>

        <img
          src={item.image}
          alt={item.name}
          className="w-40 h-32 mx-auto object-contain"
        />
        <h2 className="text-2xl font-bold mt-3 text-gray-800">{item.name}</h2>
        <p className="text-gray-600 mt-1">{item.description}</p>
        {/* <p className="text-lg font-semibold text-green-600 mt-2">
          Rs. {numericPrice}
        </p> */}

        {/* Quantity Selector */}
        {/* <div className="mt-4 flex items-center justify-center gap-3">
          <label className="text-gray-700 font-medium">Quantity:</label>
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="border border-gray-300 rounded-md px-3 py-1 text-gray-700 focus:outline-none"
          >
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div> */}

        {/* Show total price */}
        <p className="text-lg font-semibold text-gray-800 mt-3">
          {/* Total: Rs. {totalPrice} */}
        </p>

        <button
          onClick={handleOrder}
          className="mt-5 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full w-full transition"
        >
          Send Order on WhatsApp
        </button>
      </div>
    </div>
  );
};

export default OrderPopup;
