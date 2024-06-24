import React from "react";
import { Button } from "antd";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center animated-background justify-center bg-gradient-to-r from-[#e3e2df] via-[#e3afbc] to-[#ee4c7c] text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center px-6 md:px-12 lg:px-24">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4">
          Welcome to Your Next Adventure
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8">
          Unleash your potential with our platform
        </p>
        <Button
          size="large"
          className="bg-[#5d001e] hover:bg-[#9a1750] border-none text-white font-bold"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Hero;
