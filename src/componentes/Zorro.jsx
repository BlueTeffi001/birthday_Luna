import { useState } from "react";

const deseosZorro = [
  "Que la magia te acompañe en cada nuevo paso que des. ✨",
  "Gracias por iluminar nuestros mundos con tu presencia. 🌙",
  "¡Feliz cumpleaños, Luna! Que se cumplan todos tus mayores sueños. 🎂",
  "Este zorro estelar siempre velará por tus aventuras. 🦊",
];

function Zorro() {
  const [indice, setIndice] = useState(0);
  const [mostrandoMensaje, setMostrandoMensaje] = useState(false);

  function revelarDeseo() {
    setMostrandoMensaje(true);
    setIndice((prev) => (prev + 1) % deseosZorro.length);
  }

  return (
    <section className="zorro-section" id="zorro" aria-label="Zorro guardián">
      <div className="zorro__container" onClick={revelarDeseo} role="button" tabIndex={0}>
        <img
          src="/imagenes/zorro.png"
          alt="Zorro celestial durmiendo sobre flores azules"
          className="zorro__imagen"
        />
        <p className="zorro__prompt">Tengo un deseo para ti...</p>
      </div>

      {mostrandoMensaje && (
        <div className="zorro__globo-mensaje" role="status">
          <p>{deseosZorro[indice]}</p>
        </div>
      )}
    </section>
  );
}

export default Zorro;