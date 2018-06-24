// @flow
import React from 'react';
import { CURRENT_YEAR, AUTHOR_NAME, FOOTER_MESSAGE } from '../config';

const Footer = () => (
  <div>
    <footer id="footer" className="my-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center my-font__text">
            <small>
              &copy; 2017-{CURRENT_YEAR} {AUTHOR_NAME}.{' '}
              <span className="my-footer__saying">{FOOTER_MESSAGE}</span>
            </small>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
