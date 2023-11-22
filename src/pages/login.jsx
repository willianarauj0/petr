// src/components/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Autenticação simulada
    if (username && password) {
      setLoggedIn(true);
      navigate('/home');
    }
  };

  const handleCadastroClick = () => {
    navigate('/cadastro');
  };

  return (
    <div>
      {isLoggedIn ? (
        <p>Redirecionando...</p>
      ) : (
        <div>
          <h2>Login</h2>
          <form>
            <label>
              Nome de usuário:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <br />
            <label>
              Senha:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <button type="button" onClick={handleLogin}>
              Login
            </button>
            <br />
            <button type="button" onClick={handleCadastroClick}>
              Cadastro
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
