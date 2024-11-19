import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1>Energia Solar Flutuante</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/solution">Solução</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/login">Login</Link>
        <Link to="/register" className="register-button">Registrar</Link> {/* Botão de Registrar */}
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    </header>
  );
}

export default Header;
