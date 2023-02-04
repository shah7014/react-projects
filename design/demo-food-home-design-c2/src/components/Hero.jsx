import React from "react";
import { heroImage } from "../data/data";
import { HeadlineCard } from "./";

const Hero = () => {
  return (
    <div className="max-w-[1440px] mx-auto p-2">
      {/* Main Image */}
      <div className="max-h-[500px] relative">
        {/* Text over image */}
        <div className="absolute w-full h-full max-h-[500px] bg-black/70 flex flex-col justify-center gap-y-1">
          <h2 className="text-white text-3xl md:text-6xl lg:text-7xl font-bold px-4">
            The <span className="text-orange-400">Best</span>
          </h2>
          <h2 className="text-white text-3xl md:text-6xl lg:text-7xl font-bold px-4">
            <span className="text-orange-400">Foods</span> Delivered
          </h2>
        </div>

        {/* Image */}
        <img
          alt="burger"
          src={heroImage}
          className="w-full max-h-[500px] object-cover"
        />
      </div>

      {/* Headline Cards */}
      <div className="mt-8 grid grid-cols-1 gap-y-4 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-4">
        <HeadlineCard
          title="Sun's Out, BOGO's Out"
          subtitle="Through 8/26"
          image="https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <HeadlineCard
          title="New Restaurants"
          subtitle="Added daily"
          image="https://images.pexels.com/photos/2098134/pexels-photo-2098134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <HeadlineCard
          title="We Deliver Desserts Too"
          subtitle="Tasty Treats"
          image="https://images.pexels.com/photos/9863714/pexels-photo-9863714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
      </div>
    </div>
  );
};

export default Hero;
