import React from "react";
import Booking from "./Booking";

const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-[95vh]"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1514235986586-9b1e33c38fa3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-full">
            <h1 className="mb-5 text-4xl md:text-5xl text-white font-bold">
              Book Your Space
            </h1>
            <div className="mb-5">
              <Booking />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
