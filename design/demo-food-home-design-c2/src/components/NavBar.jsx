import React, { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { SideBar } from "./";

const NavBar = () => {
  const [delivery, setDelivery] = useState(true);

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleDelivery = () => {
    setDelivery((prev) => !prev);
  };

  const toggleSideBar = () => {
    setIsSideBarOpen((prev) => !prev);
  };

  return (
    <>
      <div className="max-w-[1440px] mx-auto p-2 flex  h-[70px] flex-row justify-between items-center ">
        {/* Left side */}
        <div className="flex flex-row gap-x-2 items-center">
          <FaHamburger
            className="cursor-pointer text-lg md:text-xl hover:text-green-500"
            onClick={toggleSideBar}
          />
          <a href="/" className="text-2xl md:text-3xl lg:text-4xl">
            Best <span className="font-bold">Eats</span>
          </a>
          <div className="hidden bg-gray-200 rounded-full lg:block">
            <button
              className="text-xs p-2 rounded-full"
              style={{
                backgroundColor: delivery ? "black" : "#ebebeb",
                color: delivery ? "white" : "black",
              }}
              onClick={toggleDelivery}
            >
              Delivery
            </button>
            <button
              className="text-xs p-2 rounded-full"
              style={{
                backgroundColor: !delivery ? "black" : "#ebebeb",
                color: delivery ? "black" : "white",
              }}
              onClick={toggleDelivery}
            >
              Pickup
            </button>
          </div>
        </div>

        {/* Search bar */}
        <div className="flex flex-row items-center gap-x-2 w-[200px] sm:w-[400px] lg:[w-500px] bg-gray-200 py-1 px-2 rounded-full">
          <AiOutlineSearch className="text-lg" />
          <input
            type="text"
            placeholder="Search foods"
            className="w-full bg-transparent focus:outline-none"
          />
        </div>

        {/* Cart Button */}
        <button className="hidden bg-black text-white text-sm px-4 py-2 rounded-full flex-row items-center gap-x-1 md:flex">
          <BsFillCartFill />
          <p>Cart</p>
        </button>
      </div>

      {/* Sidebar */}
      <SideBar isOpen={isSideBarOpen} onToggle={toggleSideBar} />
    </>
  );
};

export default NavBar;
