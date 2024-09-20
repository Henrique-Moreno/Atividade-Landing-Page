import "./EbookCards.css"; 

export default function EbookCards() {
  const cardsData = [
    {
      title: "Vencedores",
      description:
        "Introdução aos Vencedores. Neste capítulo, exploramos as características que definem os vencedores e como você pode aplicar esses princípios em sua vida e negócios.",
      image:
        "https://images.unsplash.com/photo-1609895314390-cb64c186466a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Estratégias de Sucesso",
      description:
        "Estratégias de Sucesso. Aprenda as táticas que os vencedores usam para alcançar seus objetivos e como você pode implementá-las para transformar sua empresa.",
      image:
        "https://images.unsplash.com/photo-1594498257673-9f36b767286c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Superando Desafios",
      description:
        "Superando Desafios. Este capítulo aborda como lidar com obstáculos e transformá-los em oportunidades de crescimento e sucesso.",
      image:
        "https://images.unsplash.com/photo-1623751370867-159020187c16?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="ebook-cards-container">
      <h1 className="section-title">E-book Vencedores</h1>
      <p className="section-description">
        A YWZ transforma empresas com nossos e-books.
      </p>
      <div className="cards-wrapper">
        {cardsData.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={card.title} className="card-image" />
            <h2 className="card-title">{card.title}</h2>
            <p className="card-description">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
