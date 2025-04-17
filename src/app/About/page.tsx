import React from "react";

function About() {
  return (
    <section className="flex justify-between items-center w-full h-screen">
      <div className="mt-10 mb-5"> 
        <h1>About Us</h1>
        <p className="text-base sm:text-lg text-gray-600 text-center"> 
          We are a team of passionate developers and designers dedicated to creating exceptional digital experiences.
        </p>
      </div>
      <div className="flex items-center ml-8 md:ml-5 xl:ml-20">
        <img
          src="/Assets/KenithDev.svg"
          alt="KenithDev"
          className="w-80 h-80 sm:w-60 sm:h-60 md:w-70 md:h-70 lg:w-100 lg:h-100 xl:w-130 xl:h-130 object-cover rounded-full border-8 border-[#3b83f63a] animate-glow" 
        />
      </div>
    </section>
  );
}

export default About;
