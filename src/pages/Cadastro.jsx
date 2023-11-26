// src/components/pages/Cadastro.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import "./Cadastro.css"

// Criar um componente estilizado para o formulário
 
// Estilizar o formulário
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
  background-color: #38B6ff;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: #38B6ff;
    border: 2px solid #38B6ff;
    
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
      <h3>Cadastro</h3>
      <Form>
        <Label>
          <p>Nome de usuário:</p>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder= "Insira seu nome de usuário"
          />
        </Label>
        <Label>
          <p>E-mail:</p>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Insira seu e-mail"
          />
        </Label>
        <Label>
          <p>Senha:</p>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Insira sua senha"
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
