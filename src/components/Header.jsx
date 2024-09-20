import "./Header.css";

export default function Header() {
  return (
    <header className="header-container">
      <div className="header-content">
        <h1 className="header-title">YWZ</h1>
        <nav className="header-nav">
          <ul className="nav-list">
            <li>
              <a href="#sobre" className="nav-link">
                Sobre
              </a>
            </li>
            <li>
              <a href="#servicos" className="nav-link">
                Serviços
              </a>
            </li>
            <li>
              <a href="#contato" className="nav-link">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
