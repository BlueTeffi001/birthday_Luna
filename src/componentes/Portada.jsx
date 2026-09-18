import { useState, useEffect } from "react";

const facetas = [
  {
    id: 1,
    nombre: "Luna silvestre",
    subtitulo: "Guerrera del bosque",
    src: "/imagenes/banner1.png",
    alt: "Faceta guerrera de Luna",
    icono: "/imagenes/luna-nueva-3.png",
  },
  {
    id: 2,
    nombre: "Luna celestial",
    subtitulo: "Guardián estelar",
    src: "/imagenes/banner2.png",
    alt: "Faceta principal de Luna con tiara y lechuza",
    icono: "/imagenes/luna-nueva-1.png",
  },
  {
    id: 3,
    nombre: "Luna sabia",
    subtitulo: "Luz de conocimiento",
    src: "/imagenes/banner3.png",
    alt: "Faceta de Luna con anteojos",
    icono: "/imagenes/luna-nueva-2.png",
  },
];

function Portada() {
  // Default active faceta is 1 (banner2.png - celestial)
  const [activa, setActiva] = useState(1);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setActiva((indice) => (indice + 1) % facetas.length);
    }, 8000);
    return () => clearInterval(intervalo);
  }, []);

  function irAGaleria() {
    const galeria = document.getElementById("galeria");
    if (galeria) galeria.scrollIntoView({ behavior: "smooth" });
  }

  function renderSelectorFacetas() {
    return (
      <div className="facetas-orbitales">
        <div className="facetas-orbitales__orbes">
          {facetas.map((faceta, indice) => {
            const esActiva = activa === indice;
            return (
              <button
                key={faceta.id}
                type="button"
                className={`orbe-lunar-user${esActiva ? " activa" : ""}`}
                onClick={() => setActiva(indice)}
                aria-label={`Ver faceta ${faceta.nombre}`}
              >
                <img
                  src={faceta.icono}
                  alt={faceta.nombre}
                  className="luna-user-img"
                />
              </button>
            );
          })}
        </div>

        <p className="facetas-orbitales__leyenda">
          ✨ Toca una luna para cambiar su apariencia 🌙
        </p>
      </div>
    );
  }

  return (
    <header className="portada" id="portada">

      {/* --- VISTA ESCRITORIO (Banner Panorámico 2:1) --- */}
      <div className="vista-desktop">
        {/* Banner Panorámico */}
        <div className="portada__full-banner">
          <img
            className="portada__full-banner-img"
            src={facetas[activa].src}
            alt={facetas[activa].alt}
          />
          <div className="portada__banner-wrapper">
            <div className="portada__banner-content">
              {/* Adorno estelar arriba del texto */}
              <img
                src="/imagenes/adorno-estrella.png"
                alt=""
                className="portada__adorno-estrella"
                aria-hidden="true"
              />
              <p className="portada__subhead">HOY CELEBRAMOS CONTIGO ✦</p>
              <h1 className="portada__titulo">
                Feliz<br />
                cumpleaños,<br />
                Luna <span className="portada__luna-icon">☾</span>
              </h1>
              <p className="portada__descripcion">
                Un rincón de recuerdos, regalos y palabras para ti.
              </p>
              <button className="boton-principal" type="button" onClick={irAGaleria}>
                Descubre tus sorpresas &rarr;
              </button>
              {/* Divisor de perlas lunares debajo del botón */}
              <img
                src="/imagenes/divisor-lunar.png"
                alt=""
                className="portada__divisor-lunar-img"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        {/* Lunas superpuestas encima de la imagen en la parte inferior derecha */}
        {renderSelectorFacetas()}
      </div>

      {/* --- VISTA MÓVIL --- */}
      <div className="vista-movil">
        {/* Adorno estelar arriba del texto en móvil */}
        <img
          src="/imagenes/adorno-estrella.png"
          alt=""
          className="portada__adorno-estrella"
          aria-hidden="true"
        />
        <p className="portada__subhead">HOY CELEBRAMOS CONTIGO ✦</p>
        <h1 className="portada__titulo-movil">
          Feliz cumpleaños,<br />
          Luna <span className="portada__luna-icon">☾</span>
        </h1>
        <p className="portada__descripcion-movil">
          Un rincón de recuerdos, regalos y palabras para ti.
        </p>

        {/* Retrato abovedado central */}
        <div className="portada__marco-movil">
          <img
            className="portada__retrato-movil"
            src={facetas[activa].src}
            alt={facetas[activa].alt}
          />
        </div>

        {/* Selector de facetas en móvil */}
        {renderSelectorFacetas()}

        {/* Botón CTA y divisor abajo en móvil */}
        <div className="portada__cta-movil">
          <button className="boton-principal" type="button" onClick={irAGaleria}>
            Descubre tus sorpresas &rarr;
          </button>
          <img
            src="/imagenes/divisor-lunar.png"
            alt=""
            className="portada__divisor-lunar-img"
            aria-hidden="true"
          />
        </div>
      </div>
    </header>
  );
}

export default Portada;