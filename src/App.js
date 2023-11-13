import './App.css';

function App() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <h1>PetGo</h1>
          </div>
          <div className="col-10">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Another Link
                    </a>
                  </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="App">
          <p>Conteúdo da página aqui.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
