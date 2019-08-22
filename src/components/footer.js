// @flow
import React from 'react'
import { CURRENT_YEAR, AUTHOR_NAME, FOOTER_MESSAGE } from '../config'

import footerStyles from './footer.module.scss'

const Footer = () => (
  <div>
    <footer id="footer" className={footerStyles.myFooter}>
      <div className="container">
        <div className="row">
          <div className={`col-sm-12 text-center ${footerStyles.myFont__text}`}>
            <small>
              &copy; 2017-
              {CURRENT_YEAR} {AUTHOR_NAME}. <span className={footerStyles.myFooter__saying}>{FOOTER_MESSAGE}</span>
            </small>
          </div>
        </div>
      </div>
    </footer>
  </div>
)

export default Footer
