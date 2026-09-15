import { useState } from "react";

// Imágenes/slides: cada objeto se reemplaza por una <img> real
const slides = [
  { numero: 1, texto: "Foto/aspecto del día uno" },
  { numero: 2, texto: "Foto/aspecto del día dos" },
  { numero: 3, texto: "Foto/aspecto del día tres" },
];

function Sorpresas() {
  const [activa, setActiva] = useState(1);

  return (
    <section
      className="sorpresas"
      id="sorpresas"
      aria-label="Sorpresas visuales"
    >
      {/* AQUÍ VA EL BANNER: reemplazar contenido o fondo por la imagen real */}
      <div className="banner" id="banner">
        <p className="banner__placeholder">
          Banner — espacio para una imagen/wish
        </p>
      </div>

      <div className="sorpresas__botones">
        {slides.map((imagen) => (
          <button
            key={imagen.numero}
            className="boton boton--secundario"
            type="button"
            onClick={() => setActiva(imagen.numero)}
          >
            Imagen {imagen.numero}
          </button>
        ))}
      </div>

      <div className="gallery-visual">
        {/* Cada .imagen-placeholder se reemplaza por una <img> real */}
        {slides.map((imagen) => (
          <div
            key={imagen.numero}
            id={`imagen-${imagen.numero}`}
            className={`imagen-placeholder${
              activa === imagen.numero ? " activa" : ""
            }`}
          >
            <p>{imagen.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Sorpresas;