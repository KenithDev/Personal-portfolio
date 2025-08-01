"use client";
import React, { useState } from "react";
import { Globe, BrandGithub, ChevronLeft, ChevronRight, X } from "@mynaui/icons-react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  techs: string[];
  imageSrc: string;
  description: string;
  githubUrl?: string;
  liveUrl?: string;
  gallery?: string[]; // Array de URLs de imágenes adicionales
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  techs,
  imageSrc,
  description,
  githubUrl,
  liveUrl,
  gallery = [],
}) => {
  const [open, setOpen] = useState(false);
  const [imageViewerOpen, setImageViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Combinar imagen principal con galería
  const allImages = [imageSrc, ...gallery];

  const openImageViewer = (index: number) => {
    setCurrentImageIndex(index);
    setImageViewerOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') setImageViewerOpen(false);
  };

  return (
    <>
      <div className="relative bg-black/30 backdrop-blur-sm rounded-xl p-1 border border-blue-500 text-white shadow-md hover:shadow-blue-600 transition duration-300 w-full max-w-xs sm:max-w-sm md:max-w-md">
        <Image
          src={imageSrc}
          alt={title}
          width={300}
          height={180}
          className="rounded-t-lg object-cover w-full h-auto cursor-pointer"
          onClick={() => openImageViewer(0)}
        />
        <div className="p-4 px-4">
          <h2 className="text-xl font-extrabold mb-2">{title}</h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {techs.map((tech) => (
              <span
                key={tech}
                className="text-xs border border-blue-500 text-white rounded-full px-3 py-0.5"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex justify-between items-center mt-4 px-2">
            <div className="flex gap-3 text-white text-lg">
              {githubUrl && (
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <BrandGithub className="hover:text-blue-400 transition" />
                </a>
              )}
              {liveUrl && (
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <Globe className="hover:text-blue-400 transition" />
                </a>
              )}
            </div>

            <button
              onClick={() => setOpen(true)}
              className="text-sm bg-transparent border border-blue-500 px-6 py-1 rounded-full hover:bg-blue-600 transition"
            >
              Ver más
            </button>
          </div>
        </div>
      </div>

      {/* Modal Principal */}
      {open && (
        <div className="fixed inset-0 z-50 bg-white/10 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0f0c1d] border border-blue-500 p-6 rounded-xl w-full max-w-sm sm:max-w-md md:max-w-2xl text-white relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-3 text-blue-400 hover:text-blue-200 text-lg z-10"
            >
              ✕
            </button>

            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <p className="text-sm mb-6 text-justify">{description}</p>

            {/* Galería de imágenes */}
            {allImages.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Galería</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {allImages.map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-video cursor-pointer group overflow-hidden rounded-lg border border-blue-500/30 hover:border-blue-500 transition-all"
                      onClick={() => openImageViewer(index)}
                    >
                      <Image
                        src={image}
                        alt={`${title} - Imagen ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white text-sm font-medium">Ver imagen</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-4 justify-center text-lg">
              {githubUrl && (
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <BrandGithub className="hover:text-blue-400 transition" />
                </a>
              )}
              {liveUrl && (
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <Globe className="hover:text-purple-400 transition" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Visor de Imágenes en Pantalla Completa */}
      {imageViewerOpen && (
        <div 
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Botón cerrar */}
          <button
            onClick={() => setImageViewerOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-blue-400 transition z-10"
          >
            <X size={32} />
          </button>

          {/* Navegación anterior */}
          {allImages.length > 1 && (
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 transition z-10 p-2"
            >
              <ChevronLeft size={32} />
            </button>
          )}

          {/* Imagen principal */}
          <div className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center">
            <Image
              src={allImages[currentImageIndex]}
              alt={`${title} - Imagen ${currentImageIndex + 1}`}
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>

          {/* Navegación siguiente */}
          {allImages.length > 1 && (
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-blue-400 transition z-10 p-2"
            >
              <ChevronRight size={32} />
            </button>
          )}

          {/* Indicador de imagen actual */}
          {allImages.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {allImages.length}
            </div>
          )}

          {/* Miniaturas */}
          {allImages.length > 1 && (
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto px-4">
              {allImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative w-16 h-12 flex-shrink-0 rounded border-2 overflow-hidden transition ${
                    index === currentImageIndex 
                      ? 'border-blue-500' 
                      : 'border-white/30 hover:border-white/60'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Miniatura ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ProjectCard;