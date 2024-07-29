import { useState, useEffect } from "react";
import Imagenes from "./components/Imagenes";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css"; // Importa la hoja de estilos
import LazyLoad from "react-lazyload"; // Importar react-lazyload
import Header from "./components/Header";
import { projects } from "./data";
export default function Inicio() {
  const [showElements, setShowElements] = useState(false);

  useEffect(() => {
    setShowElements(true);
  }, []);

  const renderProjectItem = (project, index) => (
    <div key={index} className="project-item">
      <h3 className="project-title text-center text-white text-lg lg:text-xl font-display font-bold md:font-extrabold">
        {project.title}
      </h3>
      <a href={project.href} target="_blank" rel="noopener noreferrer">
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
      <p className="project-description  text-center text-white text-lg lg:text-xl font-display font-bold md:font-extrabold">
        {project.description}
      </p>
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

  useEffect(() => {
    document.title = "Portafolio";
    const iconLink = document.createElement("link");
    iconLink.rel = "icon";
    iconLink.href = "./../fondos/portafolioIcono.ico";
    document.head.appendChild(iconLink);

    // Limpiar el icono cuando el componente se desmonte
    return () => {
      document.head.removeChild(iconLink);
    };
  }, []);

  return (
    <>
      <Header />
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
                  src="./../img-perfil/img-perfil.webp"
                  alt="Perfil"
                  className="w-44"
                  style={{
                    transition: "opacity 0.5s",
                    opacity: "0",
                    backgroundColor: "#f0f0f0",
                  }}
                  onLoad={(e) => (e.target.style.opacity = "1")}
                />
              </div>
              <div className="w-full text-center animate-slide-out p-4 md:p-8">
                <p className="text-white text-lg  lg:text-2xl font-display font-bold md:font-extrabold">
                  {texto}
                </p>
              </div>
            </div>
          </div>
          {ejecutado && (
            <div className="flex flex-col items-center justify-center">
              <p className="text-white font-display font-bold text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-10">
                Tecnologías utilizadas en los proyectos y en las que tengo
                experiencia
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
                  renderPrevButton={() => <CustomPrevButton />}
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
