import React, { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import {
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { DELIVERY, PICKUP } from "../utils/constants";

const NavBar = () => {
  const [deliveryMethod, setDeliveryMethod] = useState(DELIVERY);

  const [isSearchBoxFocused, setSearchBoxFocused] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const selectedBtnClass = "bg-black text-white";
  const unselectedBtnClass = "bg-gray-500 text-black";

  let deliveryStyleClass = selectedBtnClass;
  let pickupStyleClass = unselectedBtnClass;

  if (deliveryMethod === PICKUP) {
    deliveryStyleClass = unselectedBtnClass;
    pickupStyleClass = selectedBtnClass;
  }

  return (
    <div className="h-24 flex flex-row justify-between items-center py-4 px-2 sticky top-0 z-10">
      {/* hamburger_menu + title + buttons */}
      <div className="flex flex-row gap-4 items-center">
        <FaHamburger className="text-xl md:text-2xl" />
        <h1 className="text-sm md:text-xl lg:text-2xl">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex bg-gray-500 rounded-full">
          <button
            className={`py-2 px-2 rounded-full ${deliveryStyleClass}`}
            onClick={() => setDeliveryMethod(DELIVERY)}
          >
            Delivery
          </button>
          <button
            className={`py-2 px-2 rounded-full ${pickupStyleClass}`}
            onClick={() => setDeliveryMethod(PICKUP)}
          >
            Pickup
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex">
        <div className="flex items-center rounded-l-full border border-gray-400 w-[200px] md:w-[400px] lg:w-[600px]">
          {isSearchBoxFocused && (
            <div className="px-3 py-3 rounded-full ">
              <AiOutlineSearch className="text-xl" />
            </div>
          )}
          <input
            placeholder="Search"
            className="px-4 py-2 flex-1 rounded-l-full focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setSearchBoxFocused(true)}
            onBlur={() => setSearchBoxFocused(false)}
          />
          <div
            className="px-3 py-3 rounded-full hover:bg-gray-200 cursor-pointer"
            onClick={() => setSearchTerm("")}
          >
            <AiOutlineClose className="text-xl" />
          </div>
        </div>
        {/* search icon */}
        <div
          className="self-stretch py-1 px-4 bg-gray-400 rounded-r-full flex items-center cursor-pointer"
          title="Search"
        >
          <AiOutlineSearch className="text-2xl" />
        </div>
      </div>

      {/* Cart */}
      <button className="bg-black text-white rounded-full px-4 py-2 gap-2 items-center hidden md:flex">
        <AiOutlineShoppingCart />
        <span>Cart</span>
      </button>
    </div>
  );
};

export default NavBar;
