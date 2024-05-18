import React, { useState, useEffect } from 'react';

export default function Imagenes({setMostrarProyectos}) {
  const imagenes = [
    { src: './../logos-frameworks-librerias-leng/javascript.svg', alt: 'logo-javascript', name: 'JavaScript' },
    { src: './../logos-frameworks-librerias-leng/react.svg', alt: 'logo-react', name: 'React' },
    { src: './../logos-frameworks-librerias-leng/php.svg', alt: 'logo-php', name: 'PHP' },
    { src: './../logos-frameworks-librerias-leng/laravel.svg', alt: 'logo-laravel', name: 'Laravel' },
    { src: './../logos-frameworks-librerias-leng/livewire.svg', alt: 'logo-livewire', name: 'Livewire' },
    { src: './../logos-frameworks-librerias-leng/mysql.svg', alt: 'logo-mysql', name: 'MySQL' },
    { src: './../logos-frameworks-librerias-leng/postgresql.svg', alt: 'logo-postgresql', name: 'PostgreSQL' },
    { src: './../logos-frameworks-librerias-leng/ubuntu.svg', alt: 'logo-ubuntu', name: 'Ubuntu' },
  ];

  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleCount((prevCount) => Math.min(prevCount + 1, imagenes.length));
    }, 500); // Muestra una nueva imagen cada 2 segundos

    return () => clearInterval(timer);
  }, [imagenes.length]);
  useEffect(() => {
    if (visibleCount === imagenes.length) {
      setMostrarProyectos(true);
    }
  }, [visibleCount, imagenes.length]);
  

  return (
    <div className="grid  grid-cols-2 lg:grid-cols-3 gap-8 md:gap-1 items-center">
      {imagenes.map((imagen, index) => (
        <div
          key={index}
          className={`flex flex-col mx-auto mb-2 w-28 transition-opacity duration-1000 ease-in-out ${index < visibleCount ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
           
            src={imagen.src}
            alt={imagen.alt}
          />
          <p className="text-white font-display font-bold text-center text-lg mb-3">
            {imagen.name}
          </p>
        </div>
      ))}
    </div>
  );
}
