
import { useState, useEffect } from "react";
import Imagenes from "./Imagenes";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css"; // Importa la hoja de estilos
import { Link } from "react-router-dom";
import LazyLoad from 'react-lazyload'; // Importar react-lazyload

export default function Inicio() {
  const [desplegado, setDesplegado] = useState(false);
  const [showElements, setShowElements] = useState(false);

  useEffect(() => {
    setShowElements(true);
  }, []);

  const manejarClic = () => {
    setDesplegado(!desplegado);
  };

  const projects = [
    {
      href: "https://recetas-cocteles.netlify.app/",
      src: "./../imagen-portafolio/bebidas.webp",
      alt: "Recetas de Cocteles React",
      title: "React",
      description: "Aplicación de recetas de cócteles. Busca por bebida y obtiene información desde una API."
    },
    {
      href: "https://cotizador-cripto-reactstyledcomponent.netlify.app/",
      src: "./../imagen-portafolio/criptomonedas-api.webp",
      alt: "Cotizador de Criptomonedas React",
      title: "React",
      description: "Cotizador del valor actual de las criptomonedas más relevantes utilizando datos de una API, con la opción de seleccionar la moneda del país."
    },
    {
      href: "https://crm-clientes-con-indexedb.netlify.app/",
      src: "./../imagen-portafolio/crm-indexedb.webp",
      alt: "CRM con IndexedDB JavaScript",
      title: "JavaScript",
      description: "CRM para el registro y gestión de usuarios. Los datos son editables y se almacenan en IndexedDB."
    },
    {
      href: "https://buscador-con-filters.netlify.app/",
      src: "./../imagen-portafolio/buscador-autos-filter.webp",
      alt: "Buscador de Autos",
      title: "JavaScript, Tailwind CSS",
      description: "Buscador de autos utilizando JavaScript y filtros para encontrar el vehículo deseado."
    }
  ];

  const renderProjectItem = (project, index) => (
    <div key={index} className="project-item">
      <h3 className="project-title text-center text-white text-lg lg:text-xl font-display font-bold md:font-extrabold">{project.title}</h3>
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative">
          <LazyLoad height={200} offset={100} once>
            <img
              className="rounded-lg"
              src={project.src}
              alt={project.alt}
              loading="lazy" // Utiliza el atributo loading="lazy"
            />
          </LazyLoad>
          <div className="absolute rounded-lg inset-0 bg-gradient-to-t from-transparent via-transparent to-black opacity-40"></div>
        </div>
      </a>
      <p className="project-description  text-center text-white text-lg lg:text-xl font-display font-bold md:font-extrabold">{project.description}</p>
    </div>
  );
  
  const CustomPrevButton = () => (
    <img
      className="mt-0 mx-auto w-16 md:w-20"
      src="./../botones-svg/arrow-left-1-svgrepo-com.svg"
      alt="Prev"
    />
  );

  const CustomNextButton = () => (
    <img
      className="mx-auto w-16 md:w-20"
      src="./../botones-svg/arrow-right-1-svgrepo-com.svg"
      alt="Next"
    />
  );

  const [texto, setTexto] = useState("");
  const [ejecutado, setEjecutado] = useState(false);
  const [mostrarProyectos, setMostrarProyectos] = useState(false);
  const mensajeCompleto =
    " Hola, soy Adrian y estudié ingeniería informática. Me apasiona el desarrollo web y he trabajado en varios proyectos personales para practicar mis habilidades. También he tenido la oportunidad de colaborar en dos proyectos durante mi tiempo como becario. ¡Gracias por echarles un vistazo!";
  const palabras = mensajeCompleto.split(" ");
  useEffect(() => {
    if (!ejecutado) {
      let indice = 0;
      const intervalo = setInterval(() => {
        setTexto((textoPrevio) => {
          if (indice < palabras.length) {
            return textoPrevio + " " + palabras[indice];
          }
          return textoPrevio; // No agregar más palabras después de que todas hayan sido mostradas
        });
        indice++;
        if (indice === palabras.length) {
          clearInterval(intervalo);
          setEjecutado(true);
        }
      }, 60); // Ajusta este valor para cambiar la velocidad de la "escritura"
      return () => clearInterval(intervalo);
    }
  }, [ejecutado]);

  const [hideHeader, setHideHeader] = useState(false);
  useEffect(() => {
    document.title = 'Portafolio';
    const iconLink = document.createElement('link');
    iconLink.rel = 'icon';
    iconLink.href = './../fondos/portafolioIcono.ico'; // Reemplaza 'ruta-del-icono' con la ruta de tu ícono
    document.head.appendChild(iconLink);

    // Limpiar el icono cuando el componente se desmonte
    return () => {
      document.head.removeChild(iconLink);
    };
  }, []);

  return (
    <>
      <header
        className={`flex w-full justify-between bg-black p-5 ${hideHeader ? "hidden" : ""}`}
        style={{ position: "sticky", top: 0, zIndex: 999 }}
      >
        <h2 className="text-white font-extrabold text-3xl">:D</h2>
        <div className="flex flex-row gap-7">
          <a
            href="https://iztapalapa3-my.sharepoint.com/:b:/g/personal/l181100037_iztapalapa3_tecnm_mx/ESQ5Cd3KhcxOlQSYc2FcpUwBI5mIqnWNWQHUDBVVGNg_gQ?e=f4K1jZ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl font-bold"
          >
            CV
          </a>
          <a
            href="https://wa.me/525573297524"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-10"
              src="./icons-contacto/whatsapp-icon.svg"
              alt="WhatsApp"
            />
          </a>
          <a
            href="mailto:joseadriangonzalez6758@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-10"
              src="./icons-contacto/google-gmail.svg"
              alt="Gmail"
            />
          </a>
        </div>
      </header>
      <main
        style={{
          background: "linear-gradient(#d1d5db, black)",
          minHeight: "100vh",
          margin: 0,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div>
          <div className="curso">
            <div className="md:w-1/2 lg:w-3/4 flex flex-col w-full mx-auto lg:flex-row gap-4 justify-center items-center p-5">
              <div className="animate-slide-in">
                <img
                  src="./../img-perfil/img-perfil.jpeg"
                  alt="Perfil"
                  className="w-44"
                />
              </div>
              <div className="w-full text-center animate-slide-out p-4 md:p-8">
                <p className="text-white text-lg lg:text-xl font-display font-bold md:font-extrabold">
                  {texto}
                </p>
              </div>
            </div>
          </div>
          {ejecutado && (
            <div className="flex flex-col items-center justify-center">
              <p className="text-white font-display font-bold text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-10">
                Tecnologías utilizadas en los proyectos y en las que tengo experiencia
              </p>
              <div className="w-full md:w-1/2 mt-3 mx-auto rounded-lg">
                <Imagenes setMostrarProyectos={setMostrarProyectos} />
              </div>
            </div>
          )}
          {mostrarProyectos && (
            <div className="mt-10 mx-auto">
              <h2 className="text-white font-display text-center font-black text-2xl mb-3">
                Proyectos
              </h2>
              <div className="w-full md:w-5/6 mx-auto px-1 md:px-10 flex items-center justify-center">
                <AliceCarousel
                  mouseTracking
                  items={projects.map(renderProjectItem)}
                  stagePadding={{ paddingLeft: 50, paddingRight: 50 }}
                  responsive={{ 0: { items: 1 } }} // Muestra solo 1 elemento a la vez
                  renderPrevButton={() =>( 
                     <CustomPrevButton />
                     
                     )}
                  renderNextButton={() => <CustomNextButton />}
                  keyboardNavigation
                  touchTracking
                  autoPlay
              
                  autoPlayStrategy="none"
                  autoPlayInterval={3000}
                  animationDuration={1000}
                  animationType="fadeout"
                  infinite
                />
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
