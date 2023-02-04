import React from "react";

const HeadlineCard = ({ title, subtitle, image }) => {
  return (
    <div className="relative max-h-[230px] rounded-xl">
      {/* Overlay */}
      <div className="bg-black/50 absolute h-full w-full flex flex-col justify-between px-2 rounded-xl">
        <div className="mt-2 flex flex-col gap-y-1">
          <h3 className="text-lg sm:text-2xl text-white">{title}</h3>
          <p className="text-sm sm:text-xl text-white/80">{subtitle}</p>
        </div>
        <button className="bg-white text-black text-xl px-4 py-1 mb-4 rounded-full self-start">
          Order Now
        </button>
      </div>

      {/* Image */}
      <img
        alt="food"
        src={image}
        className="w-full max-h-[230px] object-cover rounded-xl"
      />
    </div>
  );
};

export default HeadlineCard;
