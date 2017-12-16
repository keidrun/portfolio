// @flow
import React from 'react';

const Header = () => (
  <div>
    <header id="header" className="my-header text-center">
      <div className="container">
        <h1 className="my-header__heading">Keisuke Sasaki</h1>
        <p className="lead">
          Hi, I am Full-stack Web Application Developer.
          {React.createElement('br')}
          I promise to contribute your company definitely.
        </p>
        <div>
          <a href="#about" className="my-header__btn my-btn my-btn--main-color btn">
            Contact me!
          </a>
        </div>
      </div>
    </header>
  </div>
);

export default Header;
