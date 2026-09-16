import { useState, useRef, useEffect } from "react";

const regalos = [
  {
    id: 1,
    titulo: "Un poco de magia para tu día",
    imagen: "/imagenes/regalo1.png",
    alt: "Ilustración mágica con luna creciente",
  },
  {
    id: 2,
    titulo: "Porque tus sueños iluminan todo",
    imagen: "/imagenes/regalo2.png",
    alt: "Castillo místico bajo la luna llena",
  },
  {
    id: 3,
    titulo: "Amigas en todas las órbitas",
    imagen: "/imagenes/regalo3.png",
    alt: "Abrazo mágico con el zorro estelar",
  },
];

function Galeria() {
  const [indiceMovil, setIndiceMovil] = useState(1); // Default to castle (center)
  const gridRef = useRef(null);

  // Al montar en móvil, desplazar al elemento 2 (Castillo) como la referencia
  useEffect(() => {
    if (gridRef.current && window.innerWidth < 850) {
      const cardWidth = gridRef.current.scrollWidth / regalos.length;
      gridRef.current.scrollLeft = cardWidth * 1;
    }
  }, []);

  function handleScroll() {
    if (gridRef.current && window.innerWidth < 850) {
      const scrollLeft = gridRef.current.scrollLeft;
      const cardWidth = gridRef.current.scrollWidth / regalos.length;
      const index = Math.round(scrollLeft / cardWidth);
      if (index >= 0 && index < regalos.length) {
        setIndiceMovil(index);
      }
    }
  }

  function scrollToCard(index) {
    if (gridRef.current) {
      const cardWidth = gridRef.current.scrollWidth / regalos.length;
      gridRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
      setIndiceMovil(index);
    }
  }

  function siguiente() {
    const nextIdx = (indiceMovil + 1) % regalos.length;
    scrollToCard(nextIdx);
  }

  return (
    <section className="galeria" id="galeria" aria-label="Regalos de otros mundos">
      <div className="seccion-head">
        <h2 className="seccion-titulo seccion-titulo--con-iconos">
          <img
            src="/imagenes/icono-estrella.png"
            alt=""
            className="titulo-icono"
            aria-hidden="true"
          />
          <span className="titulo-texto">
            Regalos de otros<br className="br-movil" /> mundos
          </span>
          <img
            src="/imagenes/icono-estrella.png"
            alt=""
            className="titulo-icono"
            aria-hidden="true"
          />
        </h2>
        <p className="seccion-subtitulo">HECHOS PARA TI, CON MUCHO CARIÑO</p>
      </div>

      <div className="galeria__carrusel-wrapper">
        <div
          className="galeria__grid"
          ref={gridRef}
          onScroll={handleScroll}
        >
          {regalos.map((regalo, i) => (
            <article key={regalo.id} className="tarjeta-arco">
              <div className="tarjeta-arco__frame">
                <img
                  src={regalo.imagen}
                  alt={regalo.alt}
                  className="tarjeta-arco__imagen"
                />
              </div>
              <p className="tarjeta-arco__texto">{regalo.titulo}</p>
            </article>
          ))}
        </div>

        {/* Flecha flotante sobre la tarjeta derecha que se asoma */}
        <button
          className="carrusel-flecha-flotante"
          type="button"
          onClick={siguiente}
          aria-label="Siguiente regalo"
        >
          &gt;
        </button>
      </div>

      {/* Controles del Carrusel (Puntos e Indicadores) */}
      <div className="carrusel-controles-movil">
        <div className="carrusel-puntos">
          {regalos.map((_, i) => (
            <button
              key={i}
              className={`punto${i === indiceMovil ? " activo" : ""}`}
              type="button"
              onClick={() => scrollToCard(i)}
              aria-label={`Ir al regalo ${i + 1}`}
            />
          ))}
        </div>
        <p className="carrusel-leyenda">Desliza para ver más</p>
      </div>
    </section>
  );
}

export default Galeria;