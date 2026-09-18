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
    archivo: "/regalos-luna/regalo-danny.mp4",
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
    autor: "Rai",
    archivo: "/regalos-luna/regalo-luna-hbd.jpg",
    tipo: "imagen",
    etiqueta: "🎉 Tarjeta Festiva",
    cajaEstilo: "plateado",
  },
  {
    id: 10,
    titulo: "Recuerdo Especial I",
    autor: "Rai",
    archivo: "/regalos-luna/regalo-extra-1.png",
    tipo: "imagen",
    etiqueta: "🌌 Recuerdo Mágico",
    cajaEstilo: "azul",
  },
  {
    id: 11,
    titulo: "Recuerdo Especial II",
    autor: "Rai",
    archivo: "/regalos-luna/regalo-extra-2.png",
    tipo: "imagen",
    etiqueta: "🌙 Momento Especial",
    cajaEstilo: "celeste",
  },
  {
    id: 12,
    titulo: "Para Luna con cariño",
    autor: "Wil",
    archivo: "/regalos-luna/regalo-extra-3.jpg",
    tipo: "imagen",
    etiqueta: "💖 Regalo de Amigas",
    cajaEstilo: "plateado",
  },
  {
    id: 13,
    titulo: "Detalle Mágico I",
    autor: "Rai",
    archivo: "/regalos-luna/regalo-extra-4.jpg",
    tipo: "imagen",
    etiqueta: "✨ Ilustración Especial",
    cajaEstilo: "azul",
  },
  {
    id: 14,
    titulo: "Detalle Mágico II",
    autor: "Rai",
    archivo: "/regalos-luna/regalo-extra-5.jpg",
    tipo: "imagen",
    etiqueta: "🎁 Sorpresa de Cumpleaños",
    cajaEstilo: "celeste",
  },
  {
    id: 15,
    titulo: "Video para Luna",
    autor: "Romi",
    archivo: "/regalos-luna/regalo-romi.mp4",
    tipo: "video",
    etiqueta: "🎬 Mensaje de Video",
    cajaEstilo: "plateado",
  },

  {
    id: 16,
    titulo: "Para Lunita",
    autor: "Valen",
    archivo: "/regalos-luna/regalo-valen.jpg",
    tipo: "imagen",
    etiqueta: "🖼️ Sorpresa de Cumpleaños",
    cajaEstilo: "plateado",
  },

  {
    id: 17,
    titulo: "Un regalo para Luna",
    autor: "Dineth",
    archivo: "/regalos-luna/regalo-dineth.jpg",
    tipo: "imagen",
    etiqueta: "🖼️ Sorpresa de Cumpleaños",
    cajaEstilo: "azul",
  },
  
  {
    id: 18,
    titulo: "¡Feliz Cumpleaños!",
    autor: "Wil",
    archivo: "/regalos-luna/regalo-wil.jpeg",
    tipo: "imagen",
    etiqueta: "🖼️ Sorpresa de Cumpleaños",
    cajaEstilo: "celeste",
  },

  {
    id: 19,
    titulo: "¡Feliz Cumpleaños Luna! 🐝",
    autor: "Ale 🐝",
    archivo: "/regalos-luna/regalo-ale.jpg",
    tipo: "imagen",
    etiqueta: "🎨 Ilustración Especial",
    cajaEstilo: "azul",
  },

  {
    id: 20,
    titulo: "Happy Birthday Luna ❄️💙",
    autor: "Rai",
    archivo: "/regalos-luna/regalo-rai-3.jpg",
    tipo: "imagen",
    etiqueta: "❄️ Ilustración Invernal",
    cajaEstilo: "celeste",
  },

  {
    id: 21,
    titulo: "Happy Bday Luni 🎂❄️",
    autor: "Solci 🫶🏻",
    archivo: "/regalos-luna/regalo-solci.mp4",
    tipo: "video",
    etiqueta: "🎥 Video Especial",
    cajaEstilo: "plateado",
  },
];

// Ilustraciones SVG 3D vectoriales en azul noche, celeste y plateado con cintas satinadas y dijes
function IlustracionCaja({ estilo, abierta }) {
  const configs = {
    azul: {
      cajaBaseTop: "#1c3866",
      cajaBaseBottom: "#0b1836",
      cajaTapaTop: "#254a85",
      cajaTapaBottom: "#13284d",
      cintaGrad1: "#ffffff",
      cintaGrad2: "#e0ebf8",
      cintaGrad3: "#b3d2f7",
      brilloTapa: "#6499e4",
      bordeCaja: "#4d82cf",
      charmBg: "url(#gradOro)",
      charmTexto: "PARA TI ✨",
      estrellasCol: "#ffe599",
    },
    celeste: {
      cajaBaseTop: "#173663",
      cajaBaseBottom: "#0b1c37",
      cajaTapaTop: "#22477f",
      cajaTapaBottom: "#112648",
      cintaGrad1: "#e8f3ff",
      cintaGrad2: "#b5d8ff",
      cintaGrad3: "#7db8f8",
      brilloTapa: "#8ec2ff",
      bordeCaja: "#6ca8f5",
      charmBg: "url(#gradPlata)",
      charmTexto: "LUNA ✦",
      estrellasCol: "#ffffff",
    },
    plateado: {
      cajaBaseTop: "#142a52",
      cajaBaseBottom: "#08152e",
      cajaTapaTop: "#203e73",
      cajaTapaBottom: "#0f2040",
      cintaGrad1: "#ffffff",
      cintaGrad2: "#d9e7f9",
      cintaGrad3: "#a7caf5",
      brilloTapa: "#8fbcf8",
      bordeCaja: "#74a5ea",
      charmBg: "url(#gradOro)",
      charmTexto: "SIEMPRE 💖",
      estrellasCol: "#ffd966",
    },
  };

  const cfg = configs[estilo] || configs.azul;

  return (
    <svg viewBox="0 0 260 250" className="svg-caja-regalo-3d" aria-hidden="true">
      <defs>
        <linearGradient id={`gradCaja_${estilo}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={cfg.cajaBaseTop} />
          <stop offset="100%" stopColor={cfg.cajaBaseBottom} />
        </linearGradient>

        <linearGradient id={`gradTapa_${estilo}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={cfg.cajaTapaTop} />
          <stop offset="100%" stopColor={cfg.cajaTapaBottom} />
        </linearGradient>

        <linearGradient id={`gradCinta_${estilo}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={cfg.cintaGrad1} />
          <stop offset="50%" stopColor={cfg.cintaGrad2} />
          <stop offset="100%" stopColor={cfg.cintaGrad3} />
        </linearGradient>

        <linearGradient id="gradOro" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff2ac" />
          <stop offset="50%" stopColor="#ffd700" />
          <stop offset="100%" stopColor="#caa000" />
        </linearGradient>

        <linearGradient id="gradPlata" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#e2ecf9" />
          <stop offset="100%" stopColor="#b0cded" />
        </linearGradient>

        <radialGradient id={`haloGlow_${estilo}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0.9)" />
          <stop offset="45%" stopColor="rgba(197, 222, 253, 0.45)" />
          <stop offset="100%" stopColor="rgba(197, 222, 253, 0)" />
        </radialGradient>
      </defs>

      {/* 1. Halo Luminoso posterior */}
      <circle cx="130" cy="130" r="92" fill={`url(#haloGlow_${estilo})`} />

      {/* 2. Sombra 3D suave de suelo */}
      <ellipse cx="130" cy="220" rx="76" ry="12" fill="rgba(10, 24, 48, 0.22)" />

      {/* 3. Estrellitas brillantes flotantes */}
      <g opacity="0.9">
        <path d="M 38,65 Q 38,75 48,75 Q 38,75 38,85 Q 38,75 28,75 Q 38,75 38,65 Z" fill={cfg.estrellasCol} />
        <path d="M 218,60 Q 218,68 226,68 Q 218,68 218,76 Q 218,68 210,68 Q 218,68 218,60 Z" fill={cfg.estrellasCol} />
        <circle cx="60" cy="185" r="2" fill="#ffffff" opacity="0.75" />
        <circle cx="205" cy="175" r="2.5" fill="#ffffff" opacity="0.85" />
        <circle cx="190" cy="90" r="1.5" fill="#ffffff" opacity="0.9" />
      </g>

      {/* 4. Cuerpo de la Caja */}
      <rect
        x="52"
        y="118"
        width="156"
        height="94"
        rx="10"
        fill={`url(#gradCaja_${estilo})`}
        stroke={cfg.bordeCaja}
        strokeWidth="1.2"
      />

      {/* Constelaciones grabadas */}
      <g opacity="0.32" fill="none" stroke="#ffffff" strokeWidth="0.8">
        <path d="M 72,138 L 80,143 L 92,140 L 108,150" strokeDasharray="2,2" />
        <circle cx="72" cy="138" r="1.5" fill="#ffffff" />
        <circle cx="80" cy="143" r="1.5" fill="#ffffff" />
        <circle cx="92" cy="140" r="1.5" fill="#ffffff" />
        <circle cx="108" cy="150" r="2" fill="#ffffff" />
        <path d="M 174,158 A 8,8 0 1,0 182,170 A 10,10 0 1,1 174,158 Z" fill="#ffffff" stroke="none" opacity="0.6" />
      </g>

      {/* Cintas en el Cuerpo */}
      <rect x="118" y="118" width="24" height="94" fill={`url(#gradCinta_${estilo})`} />
      <rect x="52" y="156" width="156" height="20" fill={`url(#gradCinta_${estilo})`} />

      {/* 5. Tapa y Moño Satinado (Animados al abrirse) */}
      <g
        className="caja-tapa-grupo"
        style={{
          transform: abierta ? "translateY(-24px) rotate(-3deg)" : "translateY(0px)",
          transition: "transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        <rect
          x="44"
          y="94"
          width="172"
          height="28"
          rx="6"
          fill={`url(#gradTapa_${estilo})`}
          stroke={cfg.brilloTapa}
          strokeWidth="1.5"
        />
        <rect x="118" y="94" width="24" height="28" fill={`url(#gradCinta_${estilo})`} />

        {/* Bucles de Moño Satinado 3D */}
        <path
          d="M 130,94 C 80,44 50,72 125,94 Z"
          fill={`url(#gradCinta_${estilo})`}
          stroke="rgba(255,255,255,0.75)"
          strokeWidth="1"
        />
        <path d="M 128,94 C 92,58 72,74 123,94 Z" fill="rgba(10,24,48,0.12)" />

        <path
          d="M 130,94 C 180,44 210,72 135,94 Z"
          fill={`url(#gradCinta_${estilo})`}
          stroke="rgba(255,255,255,0.75)"
          strokeWidth="1"
        />
        <path d="M 132,94 C 168,58 188,74 137,94 Z" fill="rgba(10,24,48,0.12)" />

        {/* Caídas elegantes de la cinta */}
        <path
          d="M 123,96 C 102,118 92,142 85,166 L 99,163 C 105,146 114,126 126,98 Z"
          fill={`url(#gradCinta_${estilo})`}
          opacity="0.95"
        />
        <path
          d="M 137,96 C 158,118 168,142 175,166 L 161,163 C 155,146 146,126 134,98 Z"
          fill={`url(#gradCinta_${estilo})`}
          opacity="0.95"
        />

        {/* Nudo Central */}
        <circle cx="130" cy="94" r="10" fill={`url(#gradCinta_${estilo})`} stroke="#ffffff" strokeWidth="1.2" />
        <circle cx="127" cy="91" r="3" fill="#ffffff" opacity="0.85" />

        {/* Placa / Dije Colgante "PARA TI" */}
        <path d="M 125,100 Q 110,118 104,132" stroke="#d4af37" strokeWidth="1.5" fill="none" />
        <g transform="translate(104, 134) rotate(-10)">
          <rect x="-18" y="0" width="36" height="20" rx="4" fill={cfg.charmBg} stroke="#ffffff" strokeWidth="1" />
          <circle cx="0" cy="0" r="2" fill="#7a5c00" />
          <text x="0" y="14" fill="#142e58" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
            {cfg.charmTexto}
          </text>
        </g>
      </g>
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
            Sorpresas para ti
          </span>
          <img
            src="/imagenes/icono-estrella.png"
            alt=""
            className="titulo-icono"
            aria-hidden="true"
          />
        </h2>
        <p className="seccion-subtitulo">UN POQUITO DE CARIÑO, ENVUELTO PARA TI</p>
      </div>

      <div className="galeria__carrusel-wrapper">
        <div className="galeria__grid" ref={gridRef} onScroll={handleScroll}>
          {regalosList.map((regalo) => {
            const estaAbierto = abiertos[regalo.id];
            const estaAnimando = animandoId === regalo.id;

            return (
              <article
                key={regalo.id}
                className={`tarjeta-arco tarjeta-sorpresa${estaAbierto ? " esta-abierta" : ""}${estaAnimando ? " abriendose" : ""}`}
                onClick={() => handleAbrirRegalo(regalo)}
                role="button"
                tabIndex={0}
              >
                {/* Marco de Arco con Fondo Integrado */}
                <div className="tarjeta-arco__frame tarjeta-sorpresa__frame">
                  <IlustracionCaja estilo={regalo.cajaEstilo} abierta={estaAbierto} />
                </div>

                {/* Textos Informativos */}
                <p className="tarjeta-sorpresa__subhead">UNA SORPRESA PARA TI</p>
                <h3 className="tarjeta-sorpresa__autor">De: {regalo.autor}</h3>

                {/* Botón de Acción y Distintivo Abierto */}
                <div className="tarjeta-sorpresa__accion-wrapper">
                  <button
                    type="button"
                    className={`tarjeta-sorpresa__btn${estaAbierto ? " tarjeta-sorpresa__btn--abierto" : ""}`}
                  >
                    {estaAbierto ? "Volver a ver" : "Abrir regalo"}
                  </button>

                  {estaAbierto && (
                    <span className="tarjeta-sorpresa__badge-abierto">
                      Abierto
                    </span>
                  )}
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
              {regaloSeleccionado.tipo?.toLowerCase() === "imagen" && (
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
                      📥 Descargar Imagen
                    </a>
                  </div>
                </div>
              )}

              {regaloSeleccionado.tipo?.toLowerCase() === "video" && (
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

              {regaloSeleccionado.tipo?.toLowerCase() === "pdf" && (
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