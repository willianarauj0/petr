import React, { useState } from 'react';


const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aqui você pode realizar a autenticação, por exemplo, fazendo uma chamada a uma API.
    // Por simplicidade, estamos apenas verificando se um nome de usuário e uma senha foram inseridos.
    if (username && password) {
      onLogin();
    }
  };

  return (
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
      </form>
    </div>
  );
};

export default LoginForm;