// Cabecalho.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './NavBar.css';

function Cabecalho() {
  const navigate = useNavigate();

  const handlePerfilClick = () => {
    // Adicione o caminho para a página de perfil
    navigate('/Perfil');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse alinhamento" id="navbarNav">
        <ul className="navbar-nav ml-auto alinhamento nav">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/link" className="nav-link">
              Link
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/animais" className="nav-link">
              Animais
            </Link>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={handlePerfilClick}>
              Perfil
            </button>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0 alncentraliza">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Pesquisar
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Cabecalho;
