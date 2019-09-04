// @flow
import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap'
import { AUTHOR_NAME } from '../config'

import DynamicNavLink from './common/DynamicNavLink'
import SocialBtnGroup from './common/socialBtnGroup'
import navStyles from './nav.module.scss'

type Props = {
  dynamicActive: string,
  dynamicOnClick: Function,
}

function NavComponent({ dynamicActive, dynamicOnClick }: Props) {
  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => setCollapsed(!collapsed)

  return (
    <Navbar expand="md" fixed="top" className={`${navStyles.navbar} navbar-dark`}>
      <a className={navStyles.navbar__icon} href="/">
        {AUTHOR_NAME}
      </a>

      <NavbarToggler onClick={toggleNavbar}>
        <span className="navbar-toggler-icon" />
      </NavbarToggler>

      <Collapse isOpen={!collapsed} navbar>
        <SocialBtnGroup />

        <Nav navbar className="ml-auto">
          <NavItem>
            <DynamicNavLink idName="header" dynamicActive={dynamicActive} dynamicOnClick={dynamicOnClick}>
              <NavLink href="#header">Home</NavLink>
            </DynamicNavLink>
          </NavItem>
          <NavItem>
            <DynamicNavLink idName="portfolio" dynamicActive={dynamicActive} dynamicOnClick={dynamicOnClick}>
              <NavLink href="#portfolio">Porfolio</NavLink>
            </DynamicNavLink>
          </NavItem>
          <NavItem>
            <DynamicNavLink idName="about" dynamicActive={dynamicActive} dynamicOnClick={dynamicOnClick}>
              <NavLink href="#about">About</NavLink>
            </DynamicNavLink>
          </NavItem>

          <NavItem>
            <DynamicNavLink idName="skills" dynamicActive={dynamicActive} dynamicOnClick={dynamicOnClick}>
              <NavLink href="#skills">Skills</NavLink>
            </DynamicNavLink>
          </NavItem>
          <NavItem>
            <DynamicNavLink idName="learning" dynamicActive={dynamicActive} dynamicOnClick={dynamicOnClick}>
              <NavLink href="#learning">Learning</NavLink>
            </DynamicNavLink>
          </NavItem>
          <NavItem>
            <DynamicNavLink idName="work" dynamicActive={dynamicActive} dynamicOnClick={dynamicOnClick}>
              <NavLink href="#work">Experience</NavLink>
            </DynamicNavLink>
          </NavItem>
          <NavItem>
            <DynamicNavLink idName="career" dynamicActive={dynamicActive} dynamicOnClick={dynamicOnClick}>
              <NavLink href="#career">Career</NavLink>
            </DynamicNavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default NavComponent
