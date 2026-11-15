import { kontakty } from "./data.js";

function Kontakt() {
  return (
    <section id="kontakt" className="section">
      <div className="container kontakt">
        <p className="eyebrow">03 / Kontakt</p>
        <h2>Pojďme spolu tvořit.</h2>
        <p className="kontakt__lead">
          Hledám stáž, praxi nebo zajímavý projekt, kde můžu znalosti uplatnit v praxi.
        </p>
        <div className="kontakt__list">
          {kontakty.map((k) => (
            <a key={k.label} href={k.href} target="_blank" rel="noopener noreferrer" className="kontakt__item">
              <span>{k.label}</span>
              <strong>{k.hodnota}</strong>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Kontakt;
