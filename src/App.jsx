import { Routes, Route, Navigate } from "react-router-dom";
import PaginaInicio from "./componentes/PaginaInicio.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PaginaInicio />} />
      {/* Ruta única por ahora. Para agregar páginas (ej. /regalo-para-luna)
          se añade un <Route> más aquí. Cualquier ruta desconocida vuelve al inicio. */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;