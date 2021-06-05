import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => (
  <main className="navbar">
    <div className="title">
      <h3>Math Magicians</h3>
    </div>
    <div className="links">
      <Link to="/" className="btn-link">Home </Link>
      <br />
      <Link to="/app" className="btn-link">Calculator </Link>
      <br />
      <Link to="/quote" className="btn-link">Quote</Link>
    </div>
  </main>
);

export default Navbar;
