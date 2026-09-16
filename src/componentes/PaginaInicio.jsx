import Portada from "./Portada.jsx";
import Galeria from "./Galeria.jsx";
import Dedicatoria from "./Dedicatoria.jsx";
import Zorro from "./Zorro.jsx";
import Cierre from "./Cierre.jsx";
import ReproductorMusica from "./ReproductorMusica.jsx";

function PaginaInicio() {
  return (
    <>
      <ReproductorMusica />
      <Portada />
      <Galeria />
      <Dedicatoria />
      <Zorro />
      <Cierre />
    </>
  );
}

export default PaginaInicio;