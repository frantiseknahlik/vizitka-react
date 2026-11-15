import { useState, useEffect } from "react";
import { jmeno, menu } from "./data.js";

function Header() {
  const [otevreno, setOtevreno] = useState(false); // mobilní menu
  const [scrolled, setScrolled] = useState(false); // stín po odrolování

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={"header" + (scrolled ? " header--scrolled" : "")}>
      <div className="container header__inner">
        <a href="#home" className="logo">
          {jmeno}<span className="logo__dot">.</span>
        </a>
        <button
          className="burger"
          aria-label="Menu"
          aria-expanded={otevreno}
          onClick={() => setOtevreno(!otevreno)}
        >
          <span /><span /><span />
        </button>
        <nav className={"nav" + (otevreno ? " nav--open" : "")}>
          {menu.map((m) => (
            <a key={m.id} href={"#" + m.id} onClick={() => setOtevreno(false)}>
              {m.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
