function Portada() {
  function irASorpresas() {
    const sorpresas = document.getElementById("sorpresas");
    if (sorpresas) sorpresas.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header className="portada" id="portada">
      <div className="portada__contenido">
        <h1 className="portada__titulo">Feliz cumpleaños, Luna</h1>
        <p className="portada__descripcion">
          Hoy el mundo celebra a alguien especial. Bajá y descubrí todo lo que
          tus mundos prepararon para vos.
        </p>
        <button className="boton" type="button" onClick={irASorpresas}>
          Descubre tus sorpresas
        </button>
      </div>
    </header>
  );
}

export default Portada;