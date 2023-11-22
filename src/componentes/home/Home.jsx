// Importe o Link do react-router-dom
import { Link } from 'react-router-dom';

function Home() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse alinhamento" id="navbarNav">
        <ul className="navbar-nav ml-auto alinhamento nav">
          {/* Use o componente Link para realizar a navegação para o perfil */}
          <li className="nav-item active">
            <Link to="/perfil" className="nav-link">
              Perfil
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            <Link to="/Petshop" className="nav-link">
              PetShop
              </Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Veterinarios
            </a>
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

export default Home;