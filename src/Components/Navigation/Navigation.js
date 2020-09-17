import React from 'react'
import {Link} from 'react-router-dom';
const Navigation=()=> {
    return (
        <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
     
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/korisnici"} className="nav-link">
              Korisnici
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Dodaj
            </Link>
          </li>
          <li className="nav-item">
          <Link to={"/firma"} className="nav-link">
            Firme
          </Link>
        </li>
        </div>
      </nav>
        </div>
    )
}

export default Navigation
