import "./Hero.css"; // Importando o CSS

export default function Hero() {
  return (
    <div className="hero-container">
      <h1 className="hero-title">Uma solução que irá te entregar X</h1>
      <p className="hero-description">
        Você sabe que, para alcançar o sucesso, é fundamental ter parceiros que
        te impulsionem a ir mais longe.
      </p>
      <div className="hero-buttons">
        <button className="btn btn-primary">Cadastre-se</button>
        <button className="btn btn-secondary">Veja mais</button>
      </div>
    </div>
  );
}
