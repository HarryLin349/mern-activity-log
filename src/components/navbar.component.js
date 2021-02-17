import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg navbar-custom">
        <Link to="/" className="navbar-brand"><i className="fas fa-book"></i> Activity Log</Link>
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
          <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="navbar-item">
          <Link to="/log" className="nav-link">View Log</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Log An Activity</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create New User</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}