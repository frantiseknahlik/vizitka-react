import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import OMne from "./OMne.jsx";
import Dovednosti from "./Dovednosti.jsx";
import Kontakt from "./Kontakt.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <OMne />
        <Dovednosti />
        <Kontakt />
      </main>
      <footer className="footer">
        <p>© 2026 František. Postaveno v Reactu a Vite.</p>
      </footer>
    </>
  );
}

export default App;
