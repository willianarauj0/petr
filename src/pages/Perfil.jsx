import React from 'react';
import './Perfil.css';
import MeuSvg from './Logo.svg';
import Nav from '../componentes/header/Navbar';

const Perfil = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>PetShop Profile</h1>
      </div>
      <div className="profile-content">
        <img
          className="profile-picture"
          src={MeuSvg}
          alt="PetShop Logo"
        />
        <div className="profile-details">
          <input type="text" value="PetGo"  />
          <input type="text" value="Rua Clementino Ferreira, 123"  />
          <input type="text" value="+55 14 988877524" />
          <p>Email: petshop@example.com</p>
        </div>
      </div>
    </div>
  );
};



export default Perfil;
