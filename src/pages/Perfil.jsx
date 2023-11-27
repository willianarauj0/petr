import React from 'react';
import { Link } from 'react-router-dom';

import Nav from '../componentes/header/Navbar';




const Perfil = () => {
  return (
    <div>
      
      <h2>Página de Perfil</h2>
      {/* Conteúdo do perfil aqui */}
      <Link to="/home">
        <button>voltar</button>
      </Link>
    </div>
  );
};

export default Perfil;