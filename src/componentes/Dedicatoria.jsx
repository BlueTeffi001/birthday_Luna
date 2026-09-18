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

      {/* Tarjeta de Dedicatoria Especial */}
      <div className="dedicatoria__carta-box">
        <p className="dedicatoria__texto">
          Querida Luna... En este día tan especial quiero desearte que tengas el mejor de los días al lado de tus seres queridos y que la alegría y las sonrisas no falten para ti... Una gran y maravillosa chica que en poco tiempo se ganó mi aprecio y cariño 💕
        </p>
        <p className="dedicatoria__texto">
          Que Dios te llene de muchas bendiciones para ti y que todas tus metas y sueños se cumplan... Y que todos tus días sean alegres y maravillosos 💕... Sigue siendo la increíble persona que eres 🌷... Te quiero muchísimo.
        </p>
        <div className="dedicatoria__firma">
          <p className="dedicatoria__saludo">Con mucho cariño,</p>
          <p className="dedicatoria__autor">🌷 Crisbel 🌷</p>
        </div>
      </div>
    </section>
  );
}

export default Dedicatoria;