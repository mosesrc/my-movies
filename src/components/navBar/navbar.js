import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
        {/*navbar content*/}
        <div className='container-fluid'>
          <Link to='/' className='navbar-brand'>
            Navbar
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link to='/' className='nav-link active' aria-current='page'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/menu' className='nav-link'>
                  Menu
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/about' className='nav-link'>
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;

/*
<div className='nav'>
        <Link to='/'>Home</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/about'>About</Link>
      </div>

*/
