import React from 'react';
import { Link } from 'react-router-dom';
import MeuSvg from './SVG';  // Certifique-se de ter o caminho correto para o arquivo
import Nav from '../header/Navbar';

function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse alinhamento" id="navbarNav">
          <ul className="navbar-nav ml-auto alinhamento nav">
            <li className="nav-item active">
              <Link to="/perfil" className="nav-link">
                Perfil
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Petshop" className="nav-link">
                PetShop
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Vet" className="nav-link">
                Veterinarios
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Elementos abaixo da barra de navegação */}
      <div className="container">
        <h1>Olá Willian!</h1>
        <p>Atualmente você está em...</p>
        <p>Pompéia
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="21" viewBox="0 0 37 21" fill="none" style={{ margin: '0 70px' }}>
  <path d="M4.3475 0L18.5 12.9798L32.6525 0L37 3.99595L18.5 21L0 3.99595L4.3475 0Z" fill="#362B4B"/>
</svg>
        </p>
       
        <MeuSvg />  {/* Adicionando o componente SVG */}
      </div>
    </div>
  );
}

export default Home;
