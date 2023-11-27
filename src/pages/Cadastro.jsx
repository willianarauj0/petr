import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import './Cadastro.css';

const CadastroContainer = styled.div`
  /* Estilos do container do cadastro */
`;

const Form = styled.form`
  /* Estilos do formulário */
`;

const Label = styled.label`
  /* Estilos do rótulo */
`;

const Input = styled.input`
  /* Estilos do campo de entrada */
`;

const Button = styled.button`
  /* Estilos do botão */
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
        <label>
          <p>Nome de usuário:</p>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          <p>E-mail:</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Insira seu e-mail"
          />
        </label>
        <label>
          <p>Senha:</p>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Insira sua senha"
          />
        </label>
        <Button type="button" onClick={handleCadastro}>
          Cadastrar
        </Button>
      </Form>
    </CadastroContainer>
  );
};

export default Cadastro;
