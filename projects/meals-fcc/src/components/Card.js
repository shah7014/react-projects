import React from "react";
import { BsHandThumbsUp } from "react-icons/bs";

const Card = (props) => {
  return (
    <div className="rounded-md flex flex-col pb-4 space-y-3 bg-white drop-shadow-xl cursor-pointer hover:scale-105 ease-in-out duration-500">
      <img src={props.img} alt={props.name} className="w-[100%]" />
      <div className="flex flex-row px-6 justify-between items-center">
        <p className="text-black text-lg md:text-xl">{props.name}</p>
        <BsHandThumbsUp className="text-lg cursor-pointer hover:text-xl" />
      </div>
    </div>
  );
};

export default Card;
