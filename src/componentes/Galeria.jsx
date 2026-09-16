import { useState, useRef, useEffect } from "react";

const regalosList = [
  {
    id: 1,
    titulo: "Happy Luna Day 🖤",
    autor: "Jen",
    archivo: "/regalos-luna/regalo-jen-1.png",
    tipo: "imagen",
    etiqueta: "🖼️ Arte Digital",
    cajaEstilo: "azul",
  },
  {
    id: 2,
    titulo: "Happy Luna Day 🖤 (Parte II)",
    autor: "Jen",
    archivo: "/regalos-luna/regalo-jen-2.png",
    tipo: "imagen",
    etiqueta: "🖼️ Arte Digital",
    cajaEstilo: "celeste",
  },
  {
    id: 3,
    titulo: "BD Girl Luna 💕",
    autor: "Crisbel 🌷",
    archivo: "/regalos-luna/regalo-crisbel.jpg",
    tipo: "imagen",
    etiqueta: "🖼️ Ilustración",
    cajaEstilo: "plateado",
  },
  {
    id: 4,
    titulo: "HBD, Luna!! 💫",
    autor: "Mafer",
    archivo: "/regalos-luna/regalo-mafer.mp4",
    tipo: "video",
    etiqueta: "🎥 Video Especial",
    cajaEstilo: "azul",
  },
  {
    id: 5,
    titulo: "Video para Lunita",
    autor: "Danny",
    archivo: "/regalos-luna/regalo-danny.mov",
    tipo: "video",
    etiqueta: "🎬 Mensaje de Video",
    cajaEstilo: "celeste",
  },
  {
    id: 6,
    titulo: "Carta Especial para Luna",
    autor: "Zayne",
    archivo: "/regalos-luna/carta-zayne.pdf",
    tipo: "pdf",
    etiqueta: "📄 Carta de Cumpleaños",
    cajaEstilo: "plateado",
  },
  {
    id: 7,
    titulo: "HBD Luna ✨",
    autor: "Rai",
    archivo: "/regalos-luna/regalo-rai-1.png",
    tipo: "imagen",
    etiqueta: "🎨 Arte de Cumpleaños",
    cajaEstilo: "azul",
  },
  {
    id: 8,
    titulo: "HBD Luna 🎨",
    autor: "Rai",
    archivo: "/regalos-luna/regalo-rai-2.jpg",
    tipo: "imagen",
    etiqueta: "✨ Ilustración Mística",
    cajaEstilo: "celeste",
  },
  {
    id: 9,
    titulo: "¡Feliz Cumpleaños, Luna!",
    autor: "Con mucho cariño",
    archivo: "/regalos-luna/regalo-luna-hbd.jpg",
    tipo: "imagen",
    etiqueta: "🎉 Tarjeta Festiva",
    cajaEstilo: "plateado",
  },
  {
    id: 10,
    titulo: "Recuerdo Especial I",
    autor: "Mundos de Luna",
    archivo: "/regalos-luna/regalo-extra-1.png",
    tipo: "imagen",
    etiqueta: "🌌 Recuerdo Mágico",
    cajaEstilo: "azul",
  },
  {
    id: 11,
    titulo: "Recuerdo Especial II",
    autor: "Mundos de Luna",
    archivo: "/regalos-luna/regalo-extra-2.png",
    tipo: "imagen",
    etiqueta: "🌙 Momento Especial",
    cajaEstilo: "celeste",
  },
  {
    id: 12,
    titulo: "Para Luna con cariño",
    autor: "Detalle Especial",
    archivo: "/regalos-luna/regalo-extra-3.jpg",
    tipo: "imagen",
    etiqueta: "💖 Regalo de Amigas",
    cajaEstilo: "plateado",
  },
  {
    id: 13,
    titulo: "Detalle Mágico I",
    autor: "Mundos de Luna",
    archivo: "/regalos-luna/regalo-extra-4.jpg",
    tipo: "imagen",
    etiqueta: "✨ Ilustración Especial",
    cajaEstilo: "azul",
  },
  {
    id: 14,
    titulo: "Detalle Mágico II",
    autor: "Mundos de Luna",
    archivo: "/regalos-luna/regalo-extra-5.jpg",
    tipo: "imagen",
    etiqueta: "🎁 Sorpresa de Cumpleaños",
    cajaEstilo: "celeste",
  },
];

// Ilustraciones SVG en azul, celeste y plateado para las cajas de regalo
function IlustracionCaja({ estilo, abierta }) {
  if (estilo === "azul") {
    return (
      <svg viewBox="0 0 200 240" className="svg-caja-regalo" aria-hidden="true">
        <defs>
          <linearGradient id="gradAzul" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e3e6f" />
            <stop offset="100%" stopColor="#0f2244" />
          </linearGradient>
          <linearGradient id="cintaPlata" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e2eeff" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#b8d4f8" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="120" r="70" fill="rgba(255,255,255,0.06)" />
        {/* Cuerpo */}
        <rect x="45" y="90" width="110" height="95" rx="8" fill="url(#gradAzul)" stroke="#b8d4f8" strokeWidth="1.5" />
        {/* Tapa */}
        <rect
          x="40"
          y={abierta ? "55" : "72"}
          width="120"
          height="24"
          rx="4"
          fill="#264a7f"
          stroke="#e2eeff"
          strokeWidth="1.5"
          style={{ transition: "transform 0.3s ease, y 0.3s ease" }}
        />
        {/* Cintas */}
        <rect x="90" y={abierta ? "55" : "72"} width="20" height={abierta ? "130" : "113"} fill="url(#cintaPlata)" />
        <rect x="45" y="125" width="110" height="18" fill="url(#cintaPlata)" />
        {/* Moño */}
        <path d={abierta ? "M 82,55 C 60,25 95,30 98,55 Z" : "M 82,72 C 60,40 95,45 98,72 Z"} fill="url(#cintaPlata)" />
        <path d={abierta ? "M 118,55 C 140,25 105,30 102,55 Z" : "M 118,72 C 140,40 105,45 102,72 Z"} fill="url(#cintaPlata)" />
        <circle cx="100" cy={abierta ? "55" : "72"} r="7" fill="#ffffff" />
        <text x="30" y="55" fill="#ffffff" fontSize="14">✦</text>
        <text x="160" y="80" fill="#ffffff" fontSize="12">✨</text>
      </svg>
    );
  }

  if (estilo === "celeste") {
    return (
      <svg viewBox="0 0 200 240" className="svg-caja-regalo" aria-hidden="true">
        <defs>
          <linearGradient id="gradCeleste" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#96c5f7" />
            <stop offset="100%" stopColor="#5b9bd5" />
          </linearGradient>
          <linearGradient id="cintaNoche" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#142e58" />
            <stop offset="100%" stopColor="#264a7f" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="120" r="70" fill="rgba(255,255,255,0.12)" />
        <rect x="45" y="90" width="110" height="95" rx="8" fill="url(#gradCeleste)" stroke="#ffffff" strokeWidth="1.5" />
        <rect
          x="40"
          y={abierta ? "55" : "72"}
          width="120"
          height="24"
          rx="4"
          fill="#7cb3ed"
          stroke="#ffffff"
          strokeWidth="1.5"
          style={{ transition: "transform 0.3s ease, y 0.3s ease" }}
        />
        <rect x="90" y={abierta ? "55" : "72"} width="20" height={abierta ? "130" : "113"} fill="url(#cintaNoche)" />
        <rect x="45" y="125" width="110" height="18" fill="url(#cintaNoche)" />
        <path d={abierta ? "M 82,55 C 60,25 95,30 98,55 Z" : "M 82,72 C 60,40 95,45 98,72 Z"} fill="url(#cintaNoche)" />
        <path d={abierta ? "M 118,55 C 140,25 105,30 102,55 Z" : "M 118,72 C 140,40 105,45 102,72 Z"} fill="url(#cintaNoche)" />
        <circle cx="100" cy={abierta ? "55" : "72"} r="7" fill="#ffffff" />
        <text x="160" y="55" fill="#ffffff" fontSize="14">✦</text>
        <text x="25" y="85" fill="#ffffff" fontSize="12">✨</text>
      </svg>
    );
  }

  // Estilo Plateado / Cristal
  return (
    <svg viewBox="0 0 200 240" className="svg-caja-regalo" aria-hidden="true">
      <defs>
        <linearGradient id="gradPlata" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#d0e2fa" />
        </linearGradient>
        <linearGradient id="cintaAzul" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2c5ca3" />
          <stop offset="100%" stopColor="#142e58" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="120" r="70" fill="rgba(255,255,255,0.2)" />
      <rect x="45" y="90" width="110" height="95" rx="8" fill="url(#gradPlata)" stroke="#2c5ca3" strokeWidth="1.5" />
      <rect
        x="40"
        y={abierta ? "55" : "72"}
        width="120"
        height="24"
        rx="4"
        fill="#e8f2ff"
        stroke="#2c5ca3"
        strokeWidth="1.5"
        style={{ transition: "transform 0.3s ease, y 0.3s ease" }}
      />
      <rect x="90" y={abierta ? "55" : "72"} width="20" height={abierta ? "130" : "113"} fill="url(#cintaAzul)" />
      <rect x="45" y="125" width="110" height="18" fill="url(#cintaAzul)" />
      <path d={abierta ? "M 82,55 C 60,25 95,30 98,55 Z" : "M 82,72 C 60,40 95,45 98,72 Z"} fill="url(#cintaAzul)" />
      <path d={abierta ? "M 118,55 C 140,25 105,30 102,55 Z" : "M 118,72 C 140,40 105,45 102,72 Z"} fill="url(#cintaAzul)" />
      <circle cx="100" cy={abierta ? "55" : "72"} r="7" fill="#2c5ca3" />
      <text x="35" y="65" fill="#142e58" fontSize="14">✦</text>
      <text x="165" y="75" fill="#142e58" fontSize="12">✨</text>
    </svg>
  );
}

function Galeria() {
  const [indiceMovil, setIndiceMovil] = useState(0);
  const [regaloSeleccionado, setRegaloSeleccionado] = useState(null);
  const [abiertos, setAbiertos] = useState({});
  const [animandoId, setAnimandoId] = useState(null);
  const gridRef = useRef(null);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") setRegaloSeleccionado(null);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  function handleScroll() {
    if (gridRef.current && window.innerWidth < 850) {
      const scrollLeft = gridRef.current.scrollLeft;
      const cardWidth = gridRef.current.scrollWidth / regalosList.length;
      const index = Math.round(scrollLeft / cardWidth);
      if (index >= 0 && index < regalosList.length) {
        setIndiceMovil(index);
      }
    }
  }

  function scrollToCard(index) {
    if (gridRef.current) {
      const cardWidth = gridRef.current.scrollWidth / regalosList.length;
      gridRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
      setIndiceMovil(index);
    }
  }

  function siguiente() {
    const nextIdx = (indiceMovil + 1) % regalosList.length;
    scrollToCard(nextIdx);
  }

  function anterior() {
    const prevIdx = (indiceMovil - 1 + regalosList.length) % regalosList.length;
    scrollToCard(prevIdx);
  }

  function handleAbrirRegalo(regalo) {
    setAnimandoId(regalo.id);
    setTimeout(() => {
      setAnimandoId(null);
      setAbiertos((prev) => ({ ...prev, [regalo.id]: true }));
      setRegaloSeleccionado(regalo);
    }, 450);
  }

  function cerrarModal() {
    setRegaloSeleccionado(null);
  }

  function modalAnterior() {
    if (!regaloSeleccionado) return;
    const currentIdx = regalosList.findIndex((r) => r.id === regaloSeleccionado.id);
    const prevIdx = (currentIdx - 1 + regalosList.length) % regalosList.length;
    const prevRegalo = regalosList[prevIdx];
    setAbiertos((prev) => ({ ...prev, [prevRegalo.id]: true }));
    setRegaloSeleccionado(prevRegalo);
  }

  function modalSiguiente() {
    if (!regaloSeleccionado) return;
    const currentIdx = regalosList.findIndex((r) => r.id === regaloSeleccionado.id);
    const nextIdx = (currentIdx + 1) % regalosList.length;
    const nextRegalo = regalosList[nextIdx];
    setAbiertos((prev) => ({ ...prev, [nextRegalo.id]: true }));
    setRegaloSeleccionado(nextRegalo);
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
        <div className="galeria__grid" ref={gridRef} onScroll={handleScroll}>
          {regalosList.map((regalo) => {
            const estaAbierto = abiertos[regalo.id];
            const estaAnimando = animandoId === regalo.id;

            return (
              <article
                key={regalo.id}
                className={`tarjeta-arco tarjeta-sorpresa${estaAnimando ? " abriendose" : ""}`}
                onClick={() => handleAbrirRegalo(regalo)}
                role="button"
                tabIndex={0}
              >
                {/* Marco en forma de Arco Místico */}
                <div className="tarjeta-arco__frame tarjeta-sorpresa__frame">
                  <IlustracionCaja estilo={regalo.cajaEstilo} abierta={estaAbierto} />

                  <div className="tarjeta-sorpresa__lazo-badge">
                    {estaAbierto ? "✨ Abierto" : "🎁 Sorpresa"}
                  </div>
                </div>

                {/* Textos Informativos de la Caja Cerrada / Abierta */}
                <p className="tarjeta-sorpresa__subhead">Una sorpresa para ti</p>
                <p className="tarjeta-sorpresa__autor">De: {regalo.autor}</p>

                <div className="tarjeta-sorpresa__accion">
                  {estaAbierto ? "Abierto · Volver a ver 💖" : "Toca para abrir ✨"}
                </div>
              </article>
            );
          })}
        </div>

        {/* Flechas de navegación en el carrusel */}
        <button
          className="carrusel-flecha-flotante carrusel-flecha--izq"
          type="button"
          onClick={anterior}
          aria-label="Regalo anterior"
        >
          &lt;
        </button>
        <button
          className="carrusel-flecha-flotante carrusel-flecha--der"
          type="button"
          onClick={siguiente}
          aria-label="Siguiente regalo"
        >
          &gt;
        </button>
      </div>

      {/* Controles en móvil */}
      <div className="carrusel-controles-movil">
        <div className="carrusel-puntos">
          {regalosList.map((_, i) => (
            <button
              key={i}
              className={`punto${i === indiceMovil ? " activo" : ""}`}
              type="button"
              onClick={() => scrollToCard(i)}
              aria-label={`Ir al regalo ${i + 1}`}
            />
          ))}
        </div>
        <p className="carrusel-leyenda">
          Toca cualquier regalo para abrirlo ({indiceMovil + 1} / {regalosList.length})
        </p>
      </div>

      {/* ---------- POPUP / MODAL CON EL REGALO ORIGINAL COMPLETO ---------- */}
      {regaloSeleccionado && (
        <div className="modal-overlay" onClick={cerrarModal} role="dialog" aria-modal="true">
          <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
            <button className="modal-cerrar" type="button" onClick={cerrarModal} aria-label="Cerrar regalo">
              &times;
            </button>

            <header className="modal-header">
              <span className="modal-tag">{regaloSeleccionado.etiqueta}</span>
              <h3 className="modal-titulo">{regaloSeleccionado.titulo}</h3>
              <p className="modal-autor">De: {regaloSeleccionado.autor}</p>
            </header>

            <div className="modal-body">
              {regaloSeleccionado.tipo === "imagen" && (
                <div className="modal-imagen-wrapper">
                  <img
                    src={regaloSeleccionado.archivo}
                    alt={regaloSeleccionado.titulo}
                    className="modal-media-imagen"
                  />
                  <div className="modal-acciones-group">
                    <a
                      href={regaloSeleccionado.archivo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-action-btn modal-action-btn--abrir"
                    >
                      🔗 Abrir en otra ventana ↗
                    </a>
                    <a
                      href={regaloSeleccionado.archivo}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-action-btn modal-action-btn--descargar"
                    >
                       Descargar Imagen
                    </a>
                  </div>
                </div>
              )}

              {regaloSeleccionado.tipo === "video" && (
                <div className="modal-video-wrapper">
                  <video
                    src={regaloSeleccionado.archivo}
                    controls
                    autoPlay
                    playsInline
                    className="modal-media-video"
                  >
                    Tu navegador no soporta reproducción directa de este formato.
                  </video>
                  <div className="modal-acciones-group">
                    <a
                      href={regaloSeleccionado.archivo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-action-btn modal-action-btn--abrir"
                    >
                      🔗 Abrir en otra ventana ↗
                    </a>
                    <a
                      href={regaloSeleccionado.archivo}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-action-btn modal-action-btn--descargar"
                    >
                      📥 Descargar Video
                    </a>
                  </div>
                </div>
              )}

              {regaloSeleccionado.tipo === "pdf" && (
                <div className="modal-pdf-wrapper">
                  <iframe
                    src={regaloSeleccionado.archivo}
                    title="Carta de cumpleaños para Luna"
                    className="modal-media-pdf"
                  />
                  <div className="modal-acciones-group">
                    <a
                      href={regaloSeleccionado.archivo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-action-btn modal-action-btn--abrir"
                    >
                      🔗 Abrir en otra ventana ↗
                    </a>
                    <a
                      href={regaloSeleccionado.archivo}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-action-btn modal-action-btn--descargar"
                    >
                      📥 Descargar Carta (PDF)
                    </a>
                  </div>
                </div>
              )}
            </div>

            <footer className="modal-footer">
              <button className="modal-nav-btn" type="button" onClick={modalAnterior}>
                &larr; Anterior
              </button>
              <button className="modal-nav-btn" type="button" onClick={modalSiguiente}>
                Siguiente &rarr;
              </button>
            </footer>
          </div>
        </div>
      )}
    </section>
  );
}

export default Galeria;