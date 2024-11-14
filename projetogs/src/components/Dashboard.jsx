import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [dados, setDados] = useState({
    producaoAtual: 120, // kWh
    producaoDiaria: 3200, // kWh
    eficiencia: 92, // %
    temperaturaPainel: 28, // °C
    co2Evitado: 500, // kg CO₂
    nivelAgua: 85, // %
  });


  useEffect(() => {
    const interval = setInterval(() => {
      setDados((prevDados) => ({
        producaoAtual: Math.floor(Math.random() * (150 - 100 + 1)) + 100,
        producaoDiaria: prevDados.producaoDiaria + Math.floor(Math.random() * 10),
        eficiencia: Math.floor(Math.random() * (95 - 90 + 1)) + 90,
        temperaturaPainel: Math.floor(Math.random() * (30 - 25 + 1)) + 25,
        co2Evitado: prevDados.co2Evitado + 5,
        nivelAgua: prevDados.nivelAgua - 0.1,
      }));
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard">
      <h2>Dashboard - Energia Solar em Painéis Flutuantes</h2>
      <div className="dashboard-content">
        <div className="card">
          <h3>Produção de Energia Atual</h3>
          <p>{dados.producaoAtual} kWh</p>
        </div>
        <div className="card">
          <h3>Produção Diária</h3>
          <p>{dados.producaoDiaria} kWh</p>
        </div>
        <div className="card">
          <h3>Eficiência dos Painéis</h3>
          <p>{dados.eficiencia}%</p>
        </div>
        <div className="card">
          <h3>Temperatura dos Painéis</h3>
          <p>{dados.temperaturaPainel}°C</p>
        </div>
        <div className="card">
          <h3>CO₂ Evitado</h3>
          <p>{dados.co2Evitado} kg</p>
        </div>
        <div className="card">
          <h3>Nível da Água</h3>
          <p>{dados.nivelAgua.toFixed(1)}%</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
