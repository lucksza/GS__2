import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about">
      <h2>Energia Solar em Painéis Flutuantes</h2>

      <div className="card-container">
        <div className="card">
          <h3>O que é?</h3>
          <p>
            A tecnologia de painéis solares flutuantes, também conhecida como <em>floatovoltaics</em>, 
            consiste na instalação de painéis solares sobre superfícies de água, como lagos, 
            reservatórios e outras áreas aquáticas.
          </p>
        </div>

        <div className="card">
          <h3>Como Funciona?</h3>
          <p>
            A estrutura é montada sobre boias ou plataformas flutuantes que suportam os módulos solares 
            e resistem a ventos e ondulações.
          </p>
        </div>

        <div className="card">
          <h3>Vantagens</h3>
        </div>
        
        <div className="card">
          <p><strong>Eficiência Energética:</strong> A água age como um sistema de resfriamento natural, aumentando a eficiência dos painéis.</p>
        </div>

        <div className="card">
          <p><strong>Redução da Evaporação:</strong> Cobrir reservatórios com painéis reduz a perda de água por evaporação.</p>
        </div>

        <div className="card">
          <p><strong>Preservação de Espaço:</strong> Utilizar superfícies aquáticas evita o uso de terrenos.</p>
        </div>

        <div className="card">
          <p><strong>Menor Impacto Ambiental:</strong> A instalação flutuante evita desmatamento e ocupação de áreas agrícolas.</p>
        </div>

        <div className="card">
          <p><strong>Qualidade da Água:</strong> A sombra dos painéis pode inibir o crescimento de algas, preservando a qualidade da água.</p>
        </div>

        <div className="card">
          <h3>Aplicações</h3>
        </div>

        <div className="card">
          <p><strong>Usinas Hidrelétricas:</strong> Painéis flutuantes podem complementar a produção de energia durante períodos de baixa produção hídrica.</p>
        </div>

        <div className="card">
          <p><strong>Reservatórios Agrícolas:</strong> Áreas de irrigação podem utilizar painéis para reduzir a evaporação.</p>
        </div>

        <div className="card">
          <p><strong>Reservatórios Urbanos:</strong> Ideal para áreas onde o espaço em terra é limitado.</p>
        </div>

        <div className="card">
          <h3>Desafios e Considerações</h3>
        </div>

        <div className="card">
          <p><strong>Custo Inicial:</strong> Plataformas flutuantes e ancoragem aumentam os custos em relação a sistemas terrestres.</p>
        </div>

        <div className="card">
          <p><strong>Impacto no Ecossistema:</strong> É importante avaliar o impacto ambiental e a preservação da vida aquática.</p>
        </div>

        <div className="card">
          <p><strong>Resistência Climática:</strong> Estruturas flutuantes devem suportar condições meteorológicas adversas.</p>
        </div>

        <div className="card">
          <h3>Impacto Ambiental</h3>
          <p>Painéis flutuantes são uma solução sustentável que apoia a transição para energias limpas, reduzindo a dependência de combustíveis fósseis e diminuindo emissões de CO₂.</p>
        </div>

        <div className="card">
          <h3>Conclusão</h3>
          <p>A energia solar em painéis flutuantes é uma inovação promissora, combinando eficiência energética e conservação ambiental.</p>
        </div>
      </div>

      <Link to="/" className="link-voltar">Voltar para Home</Link>
    </div>
  );
}

export default About;
