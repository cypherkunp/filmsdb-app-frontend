import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <i className="fas fa-video fa-9x" />
        <div className="collapse navbar-collapse m-1" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="btn btn-primary" href="#" role="button">
                Add <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
