import { useState } from "react";

// AQUÍ VAN LOS MENSAJES REALES del zorro: se muestran por turno
const mensajesZorro = [
  "¡Feliz cumpleaños! Que tengas un día increíble. 🎂",
  "Este zorro te quiere mucho. 🦊",
  "Que la magia te acompañe todo el año. ✨",
  "Sos una persona muy especial para tus mundos. 💙",
];

function Zorro() {
  const [indice, setIndice] = useState(0);
  const [mensaje, setMensaje] = useState("");

  function mostrarZorro() {
    setMensaje(mensajesZorro[indice]);
    setIndice((indice + 1) % mensajesZorro.length);
  }

  return (
    <section className="zorro" id="zorro" aria-label="Zorro interactivo">
      <h2 className="titulo-seccion">Tu zorro guardián</h2>
      <button
        className="zorro__boton"
        id="zorro-boton"
        type="button"
        aria-label="Tocar al zorro"
        onClick={mostrarZorro}
      >
        <span className="zorro__emoji" aria-hidden="true">🦊</span>
      </button>
      <p className="zorro__mensaje" id="zorro-mensaje" role="status">
        {mensaje}
      </p>
    </section>
  );
}

export default Zorro;