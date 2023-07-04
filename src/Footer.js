import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <footer className="footer text-light" style={{backgroundColor: "#282c34"}}>
        <div className="footer container py-4">
            <div className="d-flex align-items-center justify-content-between">
                <div>
                    <h1 className="footer_title">Maheswar</h1>
                    <span className="footer_subtitle">Frontend Developer</span>
                </div>
                <div className="">
                    <ul className="list-unstyled d-flex gap-3 justify-content-center">
                        <li>
                          <Link className="nav-link text-light" to="/">Home</Link>
                        </li>
                        <li>
                          <Link className="nav-link text-light" to="/about">About</Link>
                        </li>
                        <li>
                          <Link className="nav-link text-light" to="/skill">Skill</Link>
                        </li>
                        <li>
                          <Link className="nav-link text-light" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div>
                <p className="copy m-0 text-center">© 2023 Maheswar | All Rights Reserved</p>
                </div>
            </div>                
        </div>
    </footer>
    </div>
  );
}

export default Footer;
