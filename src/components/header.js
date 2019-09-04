// @flow
import React from 'react'
import { AUTHOR_NAME } from '../config'

import Nav from './nav'
import headerStyles from './header.module.scss'

type Props = {
  dynamicActive: string,
  dynamicOnClick: Function,
}

function Header({ dynamicActive, dynamicOnClick }: Props) {
  return (
    <>
      <Nav dynamicActive={dynamicActive} dynamicOnClick={dynamicOnClick} />
      <header id="header" className={`${headerStyles.header} text-center`}>
        <div className={`${headerStyles.container} mx-auto`}>
          <h1 className={headerStyles.header__heading}>{AUTHOR_NAME}</h1>
          <p className="lead">
            Hi, I&#39;m a Full-Stack Web Developer.
            {React.createElement('br')}I promise to contribute your company definitely.
          </p>
          <div>
            <a
              href="#about"
              className={`${headerStyles.header__btn} ${headerStyles.btn} ${headerStyles.btn__mainColor} btn`}
            >
              Contact me!
            </a>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
