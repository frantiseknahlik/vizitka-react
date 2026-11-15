import { dovednosti } from "./data.js";

function Karta({ nazev, popis, tagy }) {
  return (
    <article className="card">
      <h3>{nazev}</h3>
      <p>{popis}</p>
      <ul className="tags">
        {tagy.map((t) => <li key={t}>{t}</li>)}
      </ul>
    </article>
  );
}

function Dovednosti() {
  return (
    <section id="dovednosti" className="section section--alt">
      <div className="container">
        <p className="eyebrow">02 / Dovednosti</p>
        <h2>Stack, se kterým pracuju.</h2>
        <div className="cards">
          {dovednosti.map((d) => <Karta key={d.nazev} {...d} />)}
        </div>
      </div>
    </section>
  );
}

export default Dovednosti;
