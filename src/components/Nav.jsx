// @flow
import React from 'react';
import SocialBtnGroup from './SocialBtnGroup';

const Nav = () => (
  <div>
    <nav className="navbar navbar-expand-md navbar-dark fixed-top my-navbar">
      <a className="my-navbar__icon" href="/">
        Keisuke Sasaki
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <SocialBtnGroup />
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#header">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#portfolio">
              Porfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#skills">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#career">
              Career
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#work">
              Work
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Nav;
