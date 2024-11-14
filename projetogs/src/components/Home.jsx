import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h2>Bem-vindo à Energia Solar em Painéis Flutuantes</h2>
      <p>
        Exploramos soluções sustentáveis para um futuro mais verde. Nossa tecnologia de
        painéis solares flutuantes é projetada para aproveitar o espaço em corpos d'água,
        gerando energia limpa e eficiente com impacto ambiental reduzido.
      </p>
      <div className="home-image">
        {}
        <img src="/src/image/home.png" alt="Energia Solar em Painéis Flutuantes" />
      </div>
      <p>
        <Link to="/about">Saiba mais sobre nossa solução</Link>
      </p>
    </div>
  );
}

export default Home;
