import React from 'react';
import './layout.css';
import Logo from '../../assets/i.webp';
import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    // <div className='navbar-container'>
    //   <ul className="nav">
    //     <li className="nav-item logo">
    //       <Link className="nav-link active fs-5 nav__link" to="/">
    //         <img width={130} src={Logo} alt="Logo" />
    //       </Link>
    //     </li>
    // <li className="nav-item links">
    //   <Link className="nav-link fs-5 nav__link text-dark" to="/">Furniture</Link>
    // </li>
    // <li className="nav-item links">
    //   <input className="form-control search_input" type="search" placeholder="Search" aria-label="Search" />
    // </li>
    // <li className="nav-item links">
    //   <Link className="nav-link fs-5 nav__link text-dark" to="/">Worker's Task</Link>
    // </li>
    // <li className="nav-item links">
    //   <Link className="nav-link fs-5 nav__link text-dark" to="/">Contact</Link>
    // </li>
    //   </ul>
    // </div>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img width={130} src={Logo} alt="Logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Furniture</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Worker's Task</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Contact</Link>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2 search_input" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
      <Outlet />
    </nav>
  );
};