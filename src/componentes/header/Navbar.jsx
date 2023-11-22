// Certifique-se de importar o Link do react-router-dom
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse alinhamento" id="navbarNav">
        <ul className="navbar-nav ml-auto alinhamento">
          
          <li className="nav-item">
            <Link to="/perfil" className="nav-link">
              Perfil
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0 alncentraliza">
          <input
            className="form-control mr-sm-2"
            type="Pesquisar"
            placeholder="Pesquisar"
            aria-label="Pesquisar"
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Pesquisar
          </button>
        </form>
      </div>
    </nav>
  );
}

export default NavBar;
