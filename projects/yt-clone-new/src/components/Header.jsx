import React, { useContext, useState } from "react";
import largeLogo from "../images/yt-logo.png";
import smallLogo from "../images/yt-logo-mobile.png";
import { AiOutlineSearch } from "react-icons/ai";
import { AppContext } from "../context/AppContext";
import { Link, useNavigate } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { SlMenu } from "react-icons/sl";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { mobileMenuOpen, setMobileMenuOpen } = useContext(AppContext);

  const navigate = useNavigate();

  const handleEnterClick = (e) => {
    if (e.key === "Enter" && searchTerm.length > 0) {
      navigate(`/searchResults/${searchTerm}`);
    }
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((data) => !data);
  };

  return (
    <div className="sticky top-0 z-10 flex flex-row justify-between items-center px-4 h-14 md:px-5">
      {/* different image for screen size + icon for mobile menu */}
      <div className="flex flex-row gap-1 h-5">
        <div className="flex items-center md:hidden">
          {mobileMenuOpen && (
            <CgClose
              className=" text-xl text-white cursor-pointer"
              onClick={toggleMobileMenu}
            />
          )}
          {!mobileMenuOpen && (
            <SlMenu
              className="text-xl text-white cursor-pointer"
              onClick={toggleMobileMenu}
            />
          )}
        </div>
        <Link to="/">
          <img src={largeLogo} alt="logo" className="h-full hidden md:flex" />
          <img src={smallLogo} alt="logo" className="h-full md:hidden" />
        </Link>
      </div>

      {/* input + search icon */}
      <div className="flex items-center h-8 md:h-10">
        <input
          placeholder="Search"
          className="bg-transparent text-white pl-4 focus:outline-none border border-[#303030] rounded-l-3xl h-full w-44 md:w-64 lg:w-[500px] "
        />
        <AiOutlineSearch className="text-white h-full bg-gray-500 rounded-r-3xl cursor-pointer w-[40px] md:w-[60px]" />
      </div>

      {/* icons */}
    </div>
  );
};

export default Header;
