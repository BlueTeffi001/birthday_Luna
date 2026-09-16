import { useState, useEffect } from "react";

const facetas = [
  {
    id: 1,
    nombre: "Luna silvestre",
    emoji: "🌒",
    src: "/imagenes/banner1.png",
    alt: "Faceta guerrera de Luna",
  },
  {
    id: 2,
    nombre: "Luna celestial",
    emoji: "🌓",
    src: "/imagenes/banner2.png",
    alt: "Faceta principal de Luna con tiara y lechuza",
  },
  {
    id: 3,
    nombre: "Luna sabia",
    emoji: "🌕",
    src: "/imagenes/banner3.png",
    alt: "Faceta de Luna con anteojos",
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

  return (
    <header className="portada" id="portada">

      {/* --- VISTA ESCRITORIO (Banner Panorámico 2:1) --- */}
      <div className="vista-desktop">
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

        <div className="facetas-container">
          <h3 className="facetas__titulo">✦ Las facetas de Luna ✦</h3>
          <div className="facetas__iconos">
            {facetas.map((faceta, indice) => (
              <button
                key={faceta.id}
                className={`boton-faceta${activa === indice ? " activa" : ""}`}
                type="button"
                aria-label={`Ver ${faceta.nombre}`}
                onClick={() => setActiva(indice)}
              >
                {faceta.emoji}
              </button>
            ))}
          </div>
          <p className="facetas__ayuda">
            Toca una luna para cambiar su apariencia
          </p>
        </div>
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
        <p className="portada__leyenda-movil">Los sueños también viven aquí</p>

        {/* Selector de facetas en móvil */}
        <div className="facetas-container">
          <h3 className="facetas__titulo">✦ Las facetas de Luna ✦</h3>
          <div className="facetas__iconos">
            {facetas.map((faceta, indice) => (
              <button
                key={faceta.id}
                className={`boton-faceta${activa === indice ? " activa" : ""}`}
                type="button"
                aria-label={`Ver ${faceta.nombre}`}
                onClick={() => setActiva(indice)}
              >
                {faceta.emoji}
              </button>
            ))}
          </div>
          <p className="facetas__ayuda">
            Toca una luna para cambiar su apariencia
          </p>
        </div>

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