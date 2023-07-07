import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg " style={{backgroundColor: "#282c34"}}>
  <div className="container-fluid">
    <a className="navbar-brand text-light link-opacity-75-hover" href="/">Maheswar's React app</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-info text-decoration-underline" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/skill">Skill</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="d-flex" >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active text-info text-decoration-underline" aria-current="page" to="/">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active text-light " aria-current="page" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active text-light " aria-current="page" to="/register">Register</Link>
          </li>
        </ul> 
      </div>
    </div>
  </div>
</nav>
    </>
  );
}

export default Header;
