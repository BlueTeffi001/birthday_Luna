import { useState, useEffect, useRef } from "react";

function ReproductorMusica() {
  const [reproduciendo, setReproduciendo] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Forzar intento de reproducción inmediata al cargar la página
    const intentarPlay = () => {
      audio
        .play()
        .then(() => {
          setReproduciendo(true);
        })
        .catch(() => {
          // Si el navegador bloquea la reproducción sin interacción,
          // se activa automáticamente en cualquier leve movimiento o toque
          setReproduciendo(false);
        });
    };

    intentarPlay();

    // Eventos globales para activar la música de inmediato apenas el usuario toque, deslice o mueva el cursor
    const activarAutomatico = () => {
      if (audio.paused) {
        audio
          .play()
          .then(() => setReproduciendo(true))
          .catch(() => {});
      }
    };

    const eventos = ["click", "touchstart", "scroll", "mousemove", "pointerdown", "keydown"];
    eventos.forEach((evt) => window.addEventListener(evt, activarAutomatico, { passive: true }));

    return () => {
      eventos.forEach((evt) => window.removeEventListener(evt, activarAutomatico));
    };
  }, []);

  function toggleMusica() {
    const audio = audioRef.current;
    if (!audio) return;

    if (reproduciendo) {
      audio.pause();
      setReproduciendo(false);
    } else {
      audio
        .play()
        .then(() => setReproduciendo(true))
        .catch((err) => console.log("Error al reproducir:", err));
    }
  }

  return (
    <div className="reproductor-flotante">
      <audio
        ref={audioRef}
        src="/cancion-luna.mp3"
        autoPlay
        loop
        preload="auto"
      />

      <button
        className={`reproductor-btn${reproduciendo ? " en-reproduccion" : ""}`}
        type="button"
        onClick={toggleMusica}
        aria-label={reproduciendo ? "Pausar música de fondo" : "Reanudar música de fondo"}
        title={reproduciendo ? "Pausar música de fondo" : "Reanudar música de fondo"}
      >
        <span className="reproductor-icono">
          {reproduciendo ? "🎵" : "🔇"}
        </span>
        <span className="reproductor-texto">
          {reproduciendo ? "Pausar Música 🎵" : "Reanudar Música ▶️"}
        </span>
      </button>
    </div>
  );
}

export default ReproductorMusica;
