// @flow
import React from 'react';

const Nav = () => (
  <div>
    <nav className="navbar navbar-expand-md navbar-dark fixed-top my-navbar">
      <a className="navbar-brand my-navbar__icon" href="/">
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
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a href="/" className="btn btn-sm btn-outline-light my-navber-sns-btn">
              E-mail
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="btn btn-sm btn-outline-light my-navber-sns-btn">
              Github
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="btn btn-sm btn-outline-light my-navber-sns-btn">
              Linkedin
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="btn btn-sm btn-outline-light my-navber-sns-btn">
              Facebook
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="btn btn-sm btn-outline-light my-navber-sns-btn">
              Twitter
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#header">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#news">
              News
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#work">
              Work
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#career">
              Career
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Nav;
