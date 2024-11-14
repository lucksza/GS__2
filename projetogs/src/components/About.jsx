import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about">
      <h2>Energia Solar em Painéis Flutuantes</h2>

      <div className="card-container">
        <div className="card">
          <h3>O que é?</h3>
          <p>
            Painéis solares flutuantes são instalados sobre superfícies de água, como lagos e reservatórios.
          </p>
        </div>

        <div className="card">
          <h3>Como Funciona?</h3>
          <p>
            Instalações sobre plataformas flutuantes captam energia solar e a convertem em eletricidade.
          </p>
        </div>

        <div className="card">
          <h3>Vantagens</h3>
          <p>
            A água resfria naturalmente os painéis, melhorando a eficiência e reduzindo a evaporação.
          </p>
        </div>

        <div className="card">
          <h3>Impacto Ambiental</h3>
          <p>
            Reduz a dependência de combustíveis fósseis e as emissões de CO₂.
          </p>
        </div>
      </div>

      <Link to="/" className="link-voltar">Voltar para Home</Link>
    </div>
  );
}

export default About;
