import { useState, useEffect } from "react";

const slova = ["weby", "bezpečnost", "sítě", "C#"];

function Hero() {
  const [i, setI] = useState(0);

  // každé 2 s se vymění slovo v hlavním textu
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % slova.length), 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="badge"><span className="badge__dot" /> Volný pro stáže</p>
          <h1>
            Ahoj, jsem <span className="grad">František</span>.
          </h1>
          <p className="hero__lead">
            Student IT, který staví <span className="swap" key={i}>{slova[i]}</span> a učí se,
            jak je správně zabezpečit.
          </p>
          <div className="hero__btns">
            <a href="#dovednosti" className="btn btn--primary">Moje dovednosti</a>
            <a href="#kontakt" className="btn btn--ghost">Napiš mi</a>
          </div>
        </div>
        <div className="hero__photo">
          <div className="photo-frame">
            <img src="https://raw.githubusercontent.com/frantiseknahlik/muj-web/main/images/moje-foto2.jpg" alt="Fotka Františka" />
          </div>
          <div className="chip chip--a">&lt;web /&gt;</div>
          <div className="chip chip--b">$ nmap -sV</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
