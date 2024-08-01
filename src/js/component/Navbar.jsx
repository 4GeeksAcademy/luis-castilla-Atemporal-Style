import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="" alt="Logo" width="30" height="30" className="d-inline-block align-text-top" />
          TEMPORADA
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownHombre" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                HOMBRE
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownHombre">
                <li><a className="dropdown-item" href="#">adidas</a></li>
                <li><a className="dropdown-item" href="#">nike</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMujer" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                MUJER
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMujer">
                <li><a className="dropdown-item" href="#">adidas</a></li>
                <li><a className="dropdown-item" href="#">nike</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownNinos" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                NIÑOS
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownNinos">
                <li><a className="dropdown-item" href="#">adidas</a></li>
                <li><a className="dropdown-item" href="#">nike</a></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" />
            <button className="btn btn-outline-success" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;