// Regalos de otros mundos: se rellena con <img> y dedicatorias reales
const regalos = [
  { id: 1, dedicatoria: "Dedicatoria de este mundo…" },
  { id: 2, dedicatoria: "Dedicatoria de este mundo…" },
  { id: 3, dedicatoria: "Dedicatoria de este mundo…" },
  { id: 4, dedicatoria: "Dedicatoria de este mundo…" },
];

function Galeria() {
  return (
    <section className="galeria" id="galeria" aria-label="Regalos de otros mundos">
      <h2 className="titulo-seccion">Regalos de otros mundos</h2>
      <div className="galeria__grilla">
        {regalos.map((regalo) => (
          <article className="tarjeta" key={regalo.id}>
            {/* Reemplazar por: <img src="..." alt="..." /> */}
            <div className="tarjeta__imagen">
              <p className="tarjeta__placeholder">Foto aquí</p>
            </div>
            <p className="tarjeta__dedicatoria">{regalo.dedicatoria}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Galeria;