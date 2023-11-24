import { Link } from 'react-router-dom';

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
      {/* Elementos abaixo da barra de navegação */}
      <div className="container">
        <h1>PetGo</h1>
        <p>PetGo</p>
      </div>
    </div>
  );
}

export default Home;
