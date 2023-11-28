import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


function Nav () {
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
            <Link to="/Veterinario" className="nav-link">
              Veterinarios
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </div>

  );
}

export default Nav ;