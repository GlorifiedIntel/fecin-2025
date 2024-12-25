import React from "react";

const Hero = () => {
  return (
    <section className="fecin-hero-bg text-white text-center py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">
        Bringing God's Word  <span className="text-green-500">to Every Language, Every Heart</span>
        </h2>
        <p className="fecin-text">
        Empowering Communities Through the Translation of the Holy Bible
        </p>
        <div className="flex justify-center space-x-4">
          <button className="fecin-button">
            Support Us
          </button>
          <button className="bg-transparent border border-white text-white hover:bg-white hover:text-blue-900 font-bold py-2 px-4 rounded">
            Watch Video
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
