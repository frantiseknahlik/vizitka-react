import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import OMne from "./components/OMne.jsx";
import Dovednosti from "./components/Dovednosti.jsx";
import Kontakt from "./components/Kontakt.jsx";

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
