const cisla = [
  { hodnota: "2024", popis: "začátek kódování" },
  { hodnota: "6", popis: "oblastí technologií" },
  { hodnota: "4", popis: "vlastní projekty" },
];

function OMne() {
  return (
    <section id="omne" className="section">
      <div className="container">
        <p className="eyebrow">01 / O mně</p>
        <h2>Nejen psát kód, ale rozumět tomu, co se děje pod kapotou.</h2>
        <div className="omne__grid">
          <div className="omne__text">
            <p>
              Studuju na IT škole a propojuju webový vývoj s kybernetickou bezpečností. Zajímá mě,
              jak systémy fungují, jak se dají prolomit a jak je správně zabezpečit.
            </p>
            <p>
              Učím se tím, že stavím: od kalkulačky podsítí přes skener portů až po šifrovaný
              správce hesel. Každý projekt je důvod pochopit další vrstvu, na které věci stojí.
            </p>
          </div>
          <div className="stats">
            {cisla.map((c) => (
              <div className="stat" key={c.popis}>
                <strong>{c.hodnota}</strong>
                <span>{c.popis}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OMne;
