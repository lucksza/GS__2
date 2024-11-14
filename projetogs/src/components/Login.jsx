import { useState } from 'react';
import { Link } from 'react-router-dom';
import validarCPF from '../utils/valida_cpf'; // Ajuste o caminho conforme necessário

function Login() {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

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
    alert("Login bem-sucedido!"); // Apenas para demonstração
  };

  return (
    <div className="login">
      <h2>Login</h2>
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
        
        <button className="login-button" type="submit">Entrar</button>
      </form>
      <p>
        Não tem uma conta? <Link to="/register">Registre-se aqui</Link>
      </p>
    </div>
  );
}

export default Login;
