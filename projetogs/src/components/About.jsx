import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about">
      <h2>Energia Solar em Painéis Flutuantes</h2>
      
      <section>
        <p>
          A tecnologia de painéis solares flutuantes, também conhecida como <em>floatovoltaics</em>, 
          consiste na instalação de painéis solares sobre superfícies de água, como lagos, 
          reservatórios e outras áreas aquáticas. Ao contrário dos painéis convencionais, que são 
          instalados em terra, os flutuantes utilizam plataformas para sustentar os módulos solares 
          sobre a água.
        </p>
      </section>

      <section>
        <h3>Como Funciona?</h3>
        <p>
          A estrutura é montada sobre boias ou plataformas flutuantes que suportam os módulos solares 
          e resistem a ventos e ondulações. Esses sistemas permitem que os painéis capturem a energia 
          solar e a convertam em eletricidade, assim como os sistemas terrestres.
        </p>
      </section>

      <section>
        <h3>Vantagens</h3>
        <ul>
          <li><strong>Eficiência Energética:</strong> A água age como um sistema de resfriamento natural, aumentando a eficiência dos painéis.</li>
          <li><strong>Redução da Evaporação:</strong> Cobrir reservatórios com painéis reduz a perda de água por evaporação.</li>
          <li><strong>Preservação de Espaço:</strong> Utilizar superfícies aquáticas evita o uso de terrenos.</li>
          <li><strong>Menor Impacto Ambiental:</strong> A instalação flutuante evita desmatamento e ocupação de áreas agrícolas.</li>
          <li><strong>Qualidade da Água:</strong> A sombra dos painéis pode inibir o crescimento de algas, preservando a qualidade da água.</li>
        </ul>
      </section>

      <section>
        <h3>Aplicações</h3>
        <ul>
          <li><strong>Usinas Hidrelétricas:</strong> Painéis flutuantes podem complementar a produção de energia durante períodos de baixa produção hídrica.</li>
          <li><strong>Reservatórios Agrícolas:</strong> Áreas de irrigação podem utilizar painéis para reduzir a evaporação.</li>
          <li><strong>Reservatórios Urbanos:</strong> Ideal para áreas onde o espaço em terra é limitado.</li>
        </ul>
      </section>

      <section>
        <h3>Desafios e Considerações</h3>
        <ul>
          <li><strong>Custo Inicial:</strong> Plataformas flutuantes e ancoragem aumentam os custos em relação a sistemas terrestres.</li>
          <li><strong>Impacto no Ecossistema:</strong> É importante avaliar o impacto ambiental e a preservação da vida aquática.</li>
          <li><strong>Resistência Climática:</strong> Estruturas flutuantes devem suportar condições meteorológicas adversas.</li>
        </ul>
      </section>

      <section>
        <h3>Impacto Ambiental</h3>
        <p>
          Painéis flutuantes são uma solução sustentável que apoia a transição para energias limpas, 
          reduzindo a dependência de combustíveis fósseis e diminuindo emissões de CO₂. Essa 
          tecnologia representa uma alternativa ideal para regiões com escassez de espaço em terra.
        </p>
      </section>

      <section>
        <h3>Conclusão</h3>
        <p>
          A energia solar em painéis flutuantes é uma inovação promissora, combinando eficiência 
          energética e conservação ambiental. Essa tecnologia é uma solução para o futuro, com 
          benefícios como preservação de recursos hídricos e uso otimizado do espaço.
        </p>
      </section>

      <Link to="/" className="link-voltar">Voltar para Home</Link>
    </div>
  );
}

export default About;
