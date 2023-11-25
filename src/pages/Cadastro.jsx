// src/components/pages/Cadastro.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Criar um componente estilizado para o formulário
const Form = styled.form`
  max-width: 400px;
  margin: 0 auto;
`;

// Estilizar o rótulo e o campo de entrada
const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const CadastroContainer = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const Cadastro = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCadastro = () => {
    // Lógica de cadastro simulada
    if (username && email && password) {
      alert('Cadastro realizado com sucesso!');
      navigate('/home');
    } else {
      alert('Preencha todos os campos.');
    }
  };

  return (
    <CadastroContainer>
      <h2>Cadastro</h2>
      <Form>
        <Label>
          Nome de usuário:
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Label>
        <Label>
          E-mail:
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Label>
        <Label>
          Senha:
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Label>
        <Button type="button" onClick={handleCadastro}>
          Cadastrar
        </Button>
      </Form>
    </CadastroContainer>
  );
};

export default Cadastro;
