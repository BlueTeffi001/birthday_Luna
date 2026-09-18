import { useMemo } from "react";

const SIMBOLOS_NIEVE = ["❄", "❅", "❆", "✨", "•"];

function EfectoNieve() {
  const copos = useMemo(() => {
    return Array.from({ length: 32 }).map((_, index) => {
      const simbolo = SIMBOLOS_NIEVE[index % SIMBOLOS_NIEVE.length];
      const left = Math.random() * 100;
      const duracion = 7 + Math.random() * 11;
      const retraso = Math.random() * -15;
      const tamano = 0.6 + Math.random() * 0.95;
      const opacidad = 0.35 + Math.random() * 0.55;
      const oscilacion = 15 + Math.random() * 30;

      return {
        id: index,
        simbolo,
        estilo: {
          left: `${left}%`,
          animationDuration: `${duracion}s`,
          animationDelay: `${retraso}s`,
          fontSize: `${tamano}rem`,
          opacity: opacidad,
          "--sway-offset": `${oscilacion}px`,
        },
      };
    });
  }, []);

  return (
    <div className="efecto-nieve-contenedor" aria-hidden="true">
      {copos.map((copo) => (
        <span key={copo.id} className="copo-nieve" style={copo.estilo}>
          {copo.simbolo}
        </span>
      ))}
    </div>
  );
}

export default EfectoNieve;

