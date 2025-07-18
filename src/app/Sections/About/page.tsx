import React from "react";

function About() {
  return (
    <section className="flex flex-col justify-center items-center px-4 gap-10 md:px-6 md:flex-row md:gap-30 lg:px-10">
      <div className="w-full md:w-1/2 flex flex-col gap-5 items-center text-center md:text-left"> 
        <h1 className="text-4xl font-bold ">About Us</h1>
        <p className="text-lg sm:text-lg text-gray-600 text-center"> 
          We are a team of passionate developers and designers dedicated to creating exceptional digital experiences.
        </p>
      </div>
      <div className="flex items-center">
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
