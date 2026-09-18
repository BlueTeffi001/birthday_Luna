import { useState } from "react";

const deseosZorro = [
  "Espero que tengas un muy feliz cumpleaños, que la pases rodeada de tus seres queridos, me has hecho pasar muchos buenos momentos, y espero seguir compartiendo más contigo - Marian ✨",
  "¡Feliz cumpleaños Luna! Que pases tú día lleno de cariño y de cosas que te gusten. Eres una persona muy admirable y querida por muchas. Que Dios te bendiga siempre 💖 -Romi",
  "Luna! Espero que disfrutes mucho en tu cumpleaños. Eres una persona muy inteligente, capaz y dedicada, te admiro mucho ✨ No te deseo más que bendiciones y prosperidad en tu día a dia. Te queremos! -Mafer",
  "¡Feliz cumpleaños Luna! Primero quiero decirte que te admiro mucho, tanto tu tenacidad como tu fortaleza no es algo que pueda pasarse por alto, de verdad espero siempre seas muy feliz y vivas rodeada de los que te aman. Te mando un abrazo, te quiero - Aylin",
  "¡Feliz cumpleaños, Luna! 🥹💗 Aunque no nos conocemos desde hace tanto tiempo, en este poquito tiempo has logrado ganarte un cariño muy especial de mi parte. Espero que hoy tengas un día precioso, rodeada de mucho amor, momentos felices y personas que te hagan sonreír. ✨ Te deseo todo lo bonito que la vida pueda regalarte y que este nuevo año venga lleno de cosas maravillosas para ti. ¡Disfruta muchísimo tu día! 🎂🌷💕 -Amada.",
  "🎂 Happy Birthday 🎂 Luna, espero que estés pasando un día muy bonito y que cada día este lleno de momentos felices, cosas lindas y muchos motivos para sonreír. Te aprecio mucho y me alegra haber coincidido contigo en esta bonita comunidad. 💕 ¡Que tengas un hermoso cumpleaños! ✨- Rai",
  "Muchas felicidades Lunita, espero que te la pases muy bonito, que este día tan especial esté lleno de amor y espero que no sólo hoy pero a lo largo de tu vida tengas momentos llenos de alegría. Te agradezco todo lo que has hecho por nosotras, me alegra mucho haberte conocido, te deseo un feliz cumpleaños. 💖🥰~Danny",
  "¡Feliz cumpleaños Lunita! 🩵 Espero que tengas un día lleno de felicidad rodeada de personas que te amen y te saquen una linda sonrisa. Que diosito te dé muchísima salud y fortaleza, gracias por ser un gran pilar para la comunidad. –Quien te quiere y te admira siempre, Dineth. 💖🫶🏻",
  "✨💕🥳¡Feliz Cumpleaños Lunaaaa!✨💕🥳 Una persona tan maravillosa y fuerte como vos se merece el mejor dia de todos y todas las alegrías posibles este año y por muchos años mas. Sos una reina total y te deseo de todo corazón un día feliz y lleno de amor - con cariño Valen",
  "Te de deseo un muy feliz cumpleaños lunita , espero que la pases bien en esta fecha tan especial, desde aquí te mando muchos abrazos y que te compre 5 litros de Coca-Cola para celebrar UwU - Wil",
  "Espero que nuestro cariño te alcance a través de la distancia este día en este día, que tus anhelos se hagan realidad y seas apreciada dónde vayas, te deseo un feliz cumpleaños, -Ale🐝",
  "¡Feliz cumpleaños, Luna! Deseo que tu corazón se llene de calidez con los regalitos -detalles- que cada una hizo para ti, queriendo demostrarte que hay mucho cariño, estima y respeto hacia a tu persona; y sobre todo que te apreciamos mucho. Espero que cada cumpleaños que pases cada año sean especiales y puedas disfrutarlas alrededor de las personas cercanas de tu círculo social. No olvides cuidar de ti misma. Disfruta de tu día mi querida Luna. — Jen.",
  "Abu Luni🌙, sos un sol siendo Luna, gracias por dar un poquito de tí y ser diferente en este mundo tan frío - Damy",
  "¡Feliz cumpleaños Luni! 🎂❄️🩵 Te quiero mucho, espero pases hermoso, y que apartir de ahora estés cada día más llena de salud y bendiciones. Sos una persona increíble gracias por escucharnos siempre cuando necesitamos. Espero todos tus deseos se cumplan y que disfrutes de tus regalitos 🫶🏻 - Solci",
  "Feliz cumpleaños querida Luna, que todos tus deseos se cumplan, sigue sonriendo por favor, eres valiosa y merces ser feliz siempre. gracias por existir, te quiero mucho - Teffi",
  "Querida Luna... En este día tan especial quiero desearte que tengas el mejor de los días al lado de tus seres queridos y que la alegría y las sonrisas no falten para ti... Una gran y maravillosa chica que en poco tiempo se ganó mi aprecio y cariño 💕 Que Dios te llene de muchas bendiciones para ti y que todas tus metas y sueños se cumplan... Y que todos tus días sean alegres y maravillosos 💕... Sigue siendo la increíble persona que eres 🌷... Te quiero muchísimo. - Con cariño, 🌷Crisbel🌷",
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
        <p className="zorro__prompt">✨ Haz tap al zorrito para ver un deseo ✨</p>
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