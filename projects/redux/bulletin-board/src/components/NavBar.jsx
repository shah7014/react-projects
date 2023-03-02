import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  return (
    <div className="bg-black text-white font-bold h-[100px] sticky top-0 z-5">
      <div className="max-w-[1000px] mx-auto p-2 flex flex-row justify-between items-center h-[100%]">
        <h1 className="text-2xl md:text-3xl lg:text-4xl">
          <Link to="/">Redux Blog</Link>
        </h1>
        <ul className="hidden flex-row gap-12 text-xl md:flex md:text-2xl lg:text-3xl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/post">Posts</Link>
          </li>
        </ul>
        <GiHamburgerMenu className="flex cursor-pointer text-2xl md:hidden" />
      </div>
    </div>
  );
};

export default NavBar;
