function Dedicatoria() {
  return (
    <section className="dedicatoria" id="dedicatoria" aria-label="Dedicatoria grupal">
      {/* Separador estelar entre Galería y Dedicatoria */}
      <div className="separador-seccion-wrapper">
        <img
          src="/imagenes/separador-luna-estrellas.png"
          alt=""
          className="separador-seccion-img"
          aria-hidden="true"
        />
      </div>

      <div className="seccion-head">
        <h2 className="seccion-titulo seccion-titulo--con-iconos">
          <img
            src="/imagenes/icono-estrella.png"
            alt=""
            className="titulo-icono"
            aria-hidden="true"
          />
          <span className="titulo-texto">
            Qué bonito coincidir contigo
          </span>
          <img
            src="/imagenes/icono-estrella.png"
            alt=""
            className="titulo-icono"
            aria-hidden="true"
          />
        </h2>
      </div>
    </section>
  );
}

export default Dedicatoria;