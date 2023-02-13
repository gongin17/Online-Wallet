import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { useContext } from "react";
import AuthContext from "../Service/AuthContext";
import '../App.css';
const NavBar = () => {
  let { logoutUser } = useContext(AuthContext);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" to="">
           Online Wallet
          </a>
          <button
                  className="navbar-toggler" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#mainmenu" 
                  aria-controls="mainmenu" 
                  aria-expanded="false" 
                  aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainmenu">
            <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <a className="nav-link" href="/dashboard">
                  Dashboard
                </a>
              </li>
             

              <li className="nav-item">
                <a className="nav-link" href="/transactions-history">
                  Activity
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/money-transfer">
                  Transfer
                </a>
              </li>

              <li className="nav-item">
               
                <Link 
                className="nav-link" 
                to="#"
                onClick={logoutUser}
                >
                  logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
