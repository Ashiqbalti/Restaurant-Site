import React from "react";
import { Link } from "react-router";
import hero from "../../assets/images/hero-food.png";
import discount from "../../assets/images/discount.png";

const Header = () => {
  return (
    <>
      {/* Main container */}
      <div
        className="relative flex justify-center items-center main-container  w-full h-[90vh] bg-center bg-cover md:px-20"
        style={{ background: `url(${hero})center center/cover no-repeat` }}
      >
        <div className="absolute inset-0 z-0 bg-black/40"></div>

        {/* //Sub container */}
        <div className=" z-10 in-container flex justify-between items-center text-white w-[90%]">
          {/* content */}
          <div>
            <small className=" text-xl mb-2">Starting at $24.00</small>
            <h3 className=" text-6xl/17 md:text-6xl font-extrabold">
              The best Food Collection 2025
            </h3>
            <p className=" text-xl my-2 md:text-base">Exclusive offer</p>

            <Link to={"/contact"}>
              <button className=" bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-md transition ">
                Order Now
              </button>
            </Link>
          </div>

          {/* Content 2 */}

          <div className="absolute right-6 bottom-10 md:right-20 md:bottom-20 z-10">
            <img
              className="w-60 md:w60"
              src={discount}
              alt="discount"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
