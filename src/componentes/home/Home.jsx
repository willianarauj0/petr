import { Link } from 'react-router-dom';
import Logo from './Logo';

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
          
        </div>
      </nav>
      {/* Elementos abaixo da barra de navegação */}
      <div className="container">
        <h1>Olá Willian!</h1>
        <p>PetGo</p>
      </div>
    </div>
  );
}

export default Home;
