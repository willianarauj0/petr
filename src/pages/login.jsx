// src/components/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';




const Login = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#fff');

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

  // Aplicar a cor de fundo diretamente ao body
  document.body.style.backgroundColor = backgroundColor;

  return (
    <div className="login-container">
      {isLoggedIn ? (
        <p>Redirecionando...</p>
      ) : (
        <div className="login-form">
          <h3>Tudo que seu pet prescisa</h3>
          <h1>PetGo</h1>
          <form>
            <label>
            Login:
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
            <button type="login button" onClick={handleLogin}>
              Entrar
            </button>
            <br />
            <button type="login button" onClick={handleCadastroClick}>
              Cadastro
            </button>
            
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
