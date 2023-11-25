import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledLoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.backgroundColor};
`;

const StyledLoginForm = styled.div`
  width: 300px;
  text-align: center;
  padding: 20px;
  border: 1px solid #ff1212;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.048);
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  text-align: left;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
`;

const StyledButton = styled.button`
  background-color: #007bffa2;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #315881;
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#B7CFDE');

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
    <StyledLoginContainer backgroundColor={backgroundColor}>
      {isLoggedIn ? (
        <p>Redirecionando...</p>
      ) : (
        <StyledLoginForm>
          <h2>Login</h2>
          <form>
            <StyledLabel>
              Nome de usuário:
              <StyledInput
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </StyledLabel>
            <br />
            <StyledLabel>
              Senha:
              <StyledInput
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </StyledLabel>
            <br />
            <StyledButton type="button" onClick={handleLogin}>
              Login
            </StyledButton>
            <br />
            <StyledButton type="button" onClick={handleCadastroClick}>
              Cadastro
            </StyledButton>
            <div className="color-picker">{/* Adicione a lógica para a escolha da cor aqui */}</div>
          </form>
        </StyledLoginForm>
      )}
    </StyledLoginContainer>
  );
};

export default Login;
