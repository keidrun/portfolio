// @flow
import React from 'react';
import SocialBtnGroup from './SocialBtnGroup';
import { AUTHOR_NAME } from '../config';

const Nav = () => (
  <div>
    <nav className="my-navbar navbar navbar-expand-md navbar-dark fixed-top">
      <a className="my-navbar__icon" href="/">
        {AUTHOR_NAME}
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
            <a className="nav-link" href="#learning">
              Learning
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
