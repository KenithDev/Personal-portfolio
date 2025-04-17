"use client"
// src/components/Hero.tsx
import React from "react";7
import { useRouter } from 'next/navigation'

// Estilos
import "./index.css";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="mt-10 md:mt-20 flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Texto */}
        <div className="flex flex-col justify-center gap-6 py-8 md:py-12">
          <h1 className="text-4xl xl:text-6xl font-bold text-center md:text-left">
            Hi. I'm <br />
            <span className="text-blue-500">Kenith Guanilo</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 text-center md:text-left">
            Front-end Web Developer & UX/UI Designer creating intuitive and
            engaging digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-5 py-3 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-full transform transition duration-300 ease-in-out hover:scale-105" onClick={() => router.push('/About')}>
              View Projects
            </button>
            <button className="px-5 py-3 text-sm font-medium text-white rounded-full border-2 border-blue-500 transform transition duration-300 ease-in-out hover:scale-105"> 
              About me 
            </button>
          </div>
        </div>

        {/* Imagen */}
        <div className="flex items-center justify-center ml-8 md:ml-5 xl:ml-20">
          <img
            src="/Assets/KenithDev.svg"
            alt="KenithDev"
            className="w-80 h-80 sm:w-60 sm:h-60 md:w-70 md:h-70 lg:w-100 lg:h-100 xl:w-130 xl:h-130 object-cover rounded-full border-8 border-[#3b83f63a] animate-glow" 
          />
        </div>
      </div>
    </section>
  );
}
