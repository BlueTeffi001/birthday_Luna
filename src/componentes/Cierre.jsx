function Cierre() {
  return (
    <footer className="cierre" id="cierre">
      <div className="cierre__dedicatoria-especial">
        {/* Elementos decorativos animaciones flotantes */}
        <span className="cierre__estrella-flotante cierre__estrella--1" aria-hidden="true">✨</span>
        <span className="cierre__estrella-flotante cierre__estrella--2" aria-hidden="true">🌙</span>
        <span className="cierre__estrella-flotante cierre__estrella--3" aria-hidden="true">✦</span>
        <span className="cierre__estrella-flotante cierre__estrella--4" aria-hidden="true">💖</span>

        <p className="cierre__texto-dedicatoria cierre__texto-destacado">
          Esta página está dedicada a mi querida <strong className="cierre__nombre-resaltado">Cecilia</strong>, como un pequeño recordatorio de que siempre hay personas que piensan en ti, que te llevan en sus corazones y que te adoran profundamente. ❤️
        </p>

        <div className="cierre__separador-estelar">
          <span className="cierre__destello-icono" aria-hidden="true">✦</span>
          <span className="cierre__corazon-latido" aria-hidden="true">💖</span>
          <span className="cierre__destello-icono" aria-hidden="true">✦</span>
        </div>

        <p className="cierre__texto-dedicatoria">
          Si algún día te sientes sola o necesitas recordar lo especial que eres, vuelve a este lugar. Aquí encontrarás un pedacito del cariño de algunas personas que te quieren y que desean verte siempre feliz. 💕
        </p>

        <div className="cierre__firma-box">
          <p className="cierre__firma-saludo">Con mucho cariño,</p>
          <p className="cierre__firma-nombre">Blue / Teffi</p>
          <p className="cierre__firma-rol">dev de esta pequeña página 💙</p>
        </div>
      </div>
    </footer>
  );
}

export default Cierre;