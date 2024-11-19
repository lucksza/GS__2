import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import home1 from '../assets/image/home.png';
import home2 from '../assets/image/home2.png';
import home3 from '../assets/image/home3.png';

function Home() {
  const slides = [home1, home2, home3];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval); 
  }, [slides.length]);

  return (
    <div className="home">
      <h1 className="home-title">Energia Solar em Painéis Flutuantes</h1>


      <div className="slideshow">
        <img
          src={slides[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="slideshow-image"
        />
        <div className="cooldown">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
            ></span>
          ))}
        </div>
      </div>


      <div className="home-description">
        <p>
          A energia solar em painéis flutuantes é uma solução inovadora que utiliza superfícies aquáticas, 
          como reservatórios e lagos, para a instalação de painéis solares. Essa abordagem não apenas economiza 
          espaço em terra, mas também melhora a eficiência dos painéis ao reduzir a temperatura graças à proximidade 
          com a água.
        </p>
      </div>


      <div className="home-cards">
        <div className="card">
          <h3>Eficiência</h3>
          <p>Painéis flutuantes são mais eficientes devido ao resfriamento pela água.</p>
        </div>
        <div className="card">
          <h3>Sustentabilidade</h3>
          <p>Redução da dependência de combustíveis fósseis e diminuição de emissões.</p>
        </div>
        <div className="card">
          <h3>Economia de Espaço</h3>
          <p>Utiliza superfícies aquáticas sem ocupar terrenos produtivos.</p>
        </div>
      </div>

      <Link to="/about" className="link-more-info">
        Saiba Mais
      </Link>
    </div>
  );
}

export default Home;
