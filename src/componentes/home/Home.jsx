import React from "react";

function home () {
    return (  <nav className="navbar navbar-expand-lg navbar-light bg-light">

    <div className="collapse navbar-collapse alinhamento" id="navbarNav">
        <ul className="navbar-nav ml-auto alinhamento nav">
            <li className="nav-item active">
                <a className="nav-link" href="#">
                    Home
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    Cadastro
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    Animais
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

export default home;