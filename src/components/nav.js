// @flow
import React from 'react'
import { Link } from 'gatsby'
import { AUTHOR_NAME } from '../config'

import SocialBtnGroup from './socialBtnGroup'
import navStyles from './nav.module.scss'

const Nav = () => (
  <nav className={`${navStyles.myNavbar} navbar navbar-expand-md navbar-dark fixed-top`}>
    <Link className={navStyles.myNavbar__icon} to="/">
      {AUTHOR_NAME}
    </Link>
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
            Experience
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
)

export default Nav
