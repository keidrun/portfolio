// @flow
import React from 'react';

// const Br = React.createElement('br');

const Header = () => (
  <div>
    <header id="header" className="my-header text-center">
      <div className="container">
        <h1 className="my-header-heading">Keisuke Sasaki</h1>
        <p className="lead">
          Hi, I am Full-stack Web Application Developer. I promise to contribute your company
          definitely.
        </p>
        <div>
          <a href="#about" className="btn btn-info my-header-btn">
            Contact me!
          </a>
        </div>
      </div>
    </header>
  </div>
);

export default Header;
