// @flow
import React from 'react'
import { AUTHOR_NAME } from '../config'

import Nav from './nav'
import headerStyles from './header.module.scss'

const Header = () => (
  <>
    <Nav />
    <header id="header" className={`${headerStyles.myHeader} text-center`}>
      <div className={`${headerStyles.container} mx-auto`}>
        <h1 className={headerStyles.myHeader__heading}>{AUTHOR_NAME}</h1>
        <p className="lead">
          Hi, I&#39;m a Full-Stack Web Developer.
          {React.createElement('br')}I promise to contribute your company definitely.
        </p>
        <div>
          <a
            href="#about"
            className={`${headerStyles.myHeader__btn} ${headerStyles.myBtn} ${headerStyles.myBtnMainColor} btn`}
          >
            Contact me!
          </a>
        </div>
      </div>
    </header>
  </>
)

export default Header
