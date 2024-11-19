import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import validarCPF from '../utils/valida_cpf';

function Login() {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userSession = sessionStorage.getItem('userSession');
    if (userSession) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleCpfChange = (event) => {
    setCpf(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validarCPF(cpf)) {
      setError('CPF inválido. Por favor, verifique o número e tente novamente.');
      return;
    }
    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    setError('');
    const encryptedData = btoa(JSON.stringify({ cpf, password }));
    sessionStorage.setItem('userSession', encryptedData);

    alert('Login bem-sucedido!');
    setIsLoggedIn(true);
    navigate('/dashboard');
  };

  const handleLogout = () => {
    sessionStorage.removeItem('userSession');
    setIsLoggedIn(false);
    alert('Você saiu com sucesso!');
  };

  return (
    <div className="login">
      <h2>{isLoggedIn ? 'Bem-vindo!' : 'Login'}</h2>
      {isLoggedIn ? (
        <div>
          <p>Você já está logado.</p>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            value={cpf}
            onChange={handleCpfChange}
            placeholder="Digite seu CPF"
          />
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Digite sua senha"
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button className="login-button" type="submit">
            Entrar
          </button>
        </form>
      )}
    </div>
  );
}

export default Login;
