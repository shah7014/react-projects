import React from "react";
import { AiOutlineClose, AiFillTag } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { IoHelpCircleSharp } from "react-icons/io5";
import { BsFillArrowDownSquareFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";

const SideBar = ({ isOpen, onToggle }) => {
  return (
    <>
      {/* Overlay */}

      {isOpen && (
        <div
          className="h-[100vh] w-[100vw] bg-black/80 fixed top-0 left-0"
          onClick={onToggle}
        ></div>
      )}

      {/* Actual sidebar */}
      <div
        className="h-[100vh] bg-white w-[300px] flex flex-col py-8 px-4 z-10 fixed top-0 duration-500"
        style={{ left: isOpen ? "0px" : "-100%" }}
      >
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-2xl">
            Best <span className="font-bold">Eats</span>
          </h1>
          <AiOutlineClose
            className="text-2xl cursor-pointer hover:text-red-400"
            onClick={onToggle}
          />
        </div>
        <div className="mt-8 flex flex-col gap-y-4 text-gray-800">
          <a href="/" className="flex gap-x-4 items-center">
            <TbTruckDelivery className="text-xl" />
            <p className="text-xl">Orders</p>
          </a>
          <a href="/" className="flex gap-x-4 items-center">
            <MdFavorite className="text-xl" />
            <p className="text-xl">Favorites</p>
          </a>
          <a href="/" className="flex gap-x-4 items-center">
            <FaWallet className="text-xl" />
            <p className="text-xl">Wallet</p>
          </a>
          <a href="/" className="flex gap-x-4 items-center">
            <IoHelpCircleSharp className="text-xl" />
            <p className="text-xl">Help</p>
          </a>
          <a href="/" className="flex gap-x-4 items-center">
            <AiFillTag className="text-xl" />
            <p className="text-xl">Prmotions</p>
          </a>
          <a href="/" className="flex gap-x-4 items-center">
            <BsFillArrowDownSquareFill className="text-xl" />
            <p className="text-xl">Besty Deal</p>
          </a>
          <a href="/" className="flex gap-x-4 items-center">
            <FaUserFriends className="text-xl" />
            <p className="text-xl">Invite Friends</p>
          </a>
        </div>
      </div>
    </>
  );
};
export default SideBar;
