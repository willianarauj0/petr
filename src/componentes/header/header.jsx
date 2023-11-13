import React from "react";

function Cabecalho() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <div className="collapse navbar-collapse alinhamento" id="navbarNav">
                <ul className="navbar-nav ml-auto alinhamento nav">
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
                <form className="form-inline my-2 my-lg-0 alncentraliza">
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
    );
}

export default Cabecalho;