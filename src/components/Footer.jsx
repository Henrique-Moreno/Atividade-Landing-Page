import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} YWZ. Todos os direitos reservados.
        </p>
        <div className="footer-links">
          <a href="#sobre" className="footer-link">
            Sobre
          </a>
          <a href="#servicos" className="footer-link">
            Serviços
          </a>
          <a href="#contato" className="footer-link">
            Contato
          </a>
        </div>
      </div>
    </footer>
  );
}
