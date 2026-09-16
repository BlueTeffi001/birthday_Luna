import { useState, useEffect, useRef } from "react";

function ReproductorMusica() {
  const [reproduciendo, setReproduciendo] = useState(false);
  const audioRef = useRef(null);
  const manualmentePausadoRef = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const eventos = ["click", "touchstart", "scroll", "mousemove", "pointerdown", "keydown"];

    const removerListeners = () => {
      eventos.forEach((evt) => window.removeEventListener(evt, activarAutomatico));
    };

    const activarAutomatico = () => {
      // Si el usuario pausó intencionalmente, no auto-reproducir
      if (manualmentePausadoRef.current) return;

      if (audio.paused) {
        audio
          .play()
          .then(() => {
            setReproduciendo(true);
            removerListeners();
          })
          .catch(() => {});
      }
    };

    // Intentar reproducción inmediata al montar
    audio
      .play()
      .then(() => {
        setReproduciendo(true);
      })
      .catch(() => {
        setReproduciendo(false);
        // Si el navegador requiere interacción previa, añadir listeners globales
        eventos.forEach((evt) => window.addEventListener(evt, activarAutomatico, { passive: true }));
      });

    return () => {
      removerListeners();
    };
  }, []);

  function toggleMusica(e) {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const audio = audioRef.current;
    if (!audio) return;

    if (reproduciendo) {
      manualmentePausadoRef.current = true;
      audio.pause();
      setReproduciendo(false);
    } else {
      manualmentePausadoRef.current = false;
      audio
        .play()
        .then(() => setReproduciendo(true))
        .catch((err) => console.log("Error al reproducir:", err));
    }
  }

  return (
    <div className="reproductor-flotante" onClick={(e) => e.stopPropagation()}>
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
