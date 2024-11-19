import { Link } from 'react-router-dom';

function Solution() {
  const sections = [
    {
      title: 'Conceito',
      content: `A energia solar flutuante, também conhecida como Floating Photovoltaics (FPV), é uma tecnologia inovadora que utiliza painéis solares instalados em estruturas flutuantes sobre superfícies aquáticas, como lagos, reservatórios, represas e até mesmo oceanos calmos. 
      
      Essa abordagem oferece uma alternativa sustentável e eficiente para gerar eletricidade, aproveitando áreas inutilizadas e minimizando o impacto no uso de terrenos agrícolas ou urbanos. 
      
      Princípio de Funcionamento:
      - Painéis fotovoltaicos captam a luz solar e a convertem em energia elétrica.
      - Estruturas flutuantes sustentam os painéis e permitem a instalação em locais estratégicos.
      - A proximidade com a água ajuda a resfriar os painéis, aumentando sua eficiência.`,
    },
    {
      title: 'Vantagens',
      content: `A energia solar flutuante apresenta diversos benefícios:
      
      - Economia de Espaço: Utiliza superfícies aquáticas inutilizadas, evitando o uso de terras agrícolas ou urbanas.
      - Maior Eficiência: A água resfria naturalmente os painéis solares, aumentando sua eficiência em até 10%.
      - Redução da Evaporação: Cobrem a superfície da água, ajudando a preservar recursos hídricos.
      - Sustentabilidade: Reduz emissões de carbono e contribui para a mitigação das mudanças climáticas.
      - Compatibilidade com Infraestrutura Existente: Facilita a integração com redes de transmissão de hidrelétricas.`,
    },
    {
      title: 'Desafios',
      content: `Apesar das vantagens, a energia solar flutuante enfrenta alguns obstáculos:
      
      - Custos Iniciais Elevados: Estruturas flutuantes e instalação requerem investimentos significativos.
      - Manutenção Especializada: Exposição à umidade aumenta a necessidade de manutenção.
      - Impactos Ambientais: Alterações nos ecossistemas aquáticos devem ser monitoradas.
      - Durabilidade: O ambiente aquático pode acelerar a corrosão dos materiais.`,
    },
    {
      title: 'Aplicações Práticas',
      content: `A energia solar flutuante já é utilizada em diversos países:
      
      - China: Líder mundial, com instalações em minas de carvão inundadas.
      - Japão: Projetos em lagos para atender à demanda de energia limpa.
      - Índia: Usinas flutuantes em reservatórios para áreas rurais e urbanas.
      - Brasil: Usinas como a de Balbina integram energia solar e hidrelétrica.`,
    },
    {
      title: 'Impacto Ambiental e Sustentabilidade',
      content: `A energia solar flutuante contribui para os Objetivos de Desenvolvimento Sustentável (ODS):
      
      - ODS 7: Expande o acesso à energia renovável.
      - ODS 13: Reduz emissões de carbono, combatendo o aquecimento global.
      - ODS 6: Conserva recursos hídricos, minimizando a evaporação.`,
    },
    {
      title: 'Proposta de Expansão',
      content: `Medidas para popularizar a tecnologia:
      
      - Políticas de Incentivo: Subsídios e linhas de crédito para projetos de energia limpa.
      - Parcerias Público-Privadas (PPP): Colaboração entre governos e empresas.
      - Investimento em Pesquisa: Desenvolvimento de materiais duráveis e estudos ambientais.
      - Educação: Sensibilização sobre os benefícios para comunidades locais e investidores.`,
    },
  ];

  return (
    <div className="solution">
      <h1>Solução: Energia Solar Flutuante</h1>
      <p className="solution-intro">
        Descubra como a energia solar flutuante pode transformar o uso de recursos naturais para
        produzir energia limpa e sustentável.
      </p>
      <div className="solution-sections">
        {sections.map((section, index) => (
          <div key={index} className="section-card">
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </div>
        ))}
      </div>
      <Link to="/" className="back-button">
        Voltar para Home
      </Link>
    </div>
  );
}

export default Solution;
