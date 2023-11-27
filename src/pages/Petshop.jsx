import React from 'react';
import { Link } from 'react-router-dom';


const Petshop = () => {
  return (
    <div>
      <h2>Petshop</h2>
      {/* Conteúdo do perfil aqui */}
      <Link to="/home">
        <button>voltar</button>
      </Link>
    </div>
  );
};

export default Petshop;