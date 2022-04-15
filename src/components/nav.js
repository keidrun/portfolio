// @flow
import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap'
import { ScrollspyNavLink } from 'reactstrap-scrollspy'
import { AUTHOR_NAME } from '../config'

import SocialBtnGroup from './common/socialBtnGroup'
import * as navStyles from './nav.module.scss'

function NavComponent() {
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
            <ScrollspyNavLink name="header">
              <NavLink href="#header">Home</NavLink>
            </ScrollspyNavLink>
          </NavItem>
          <NavItem>
            <ScrollspyNavLink name="portfolio">
              <NavLink href="#portfolio">Porfolio</NavLink>
            </ScrollspyNavLink>
          </NavItem>
          <NavItem>
            <ScrollspyNavLink name="about">
              <NavLink href="#about">About</NavLink>
            </ScrollspyNavLink>
          </NavItem>
          <NavItem>
            <ScrollspyNavLink name="skills">
              <NavLink href="#skills">Skills</NavLink>
            </ScrollspyNavLink>
          </NavItem>
          <NavItem>
            <ScrollspyNavLink name="learning">
              <NavLink href="#learning">Learning</NavLink>
            </ScrollspyNavLink>
          </NavItem>
          <NavItem>
            <ScrollspyNavLink name="work">
              <NavLink href="#work">Experience</NavLink>
            </ScrollspyNavLink>
          </NavItem>
          <NavItem>
            <ScrollspyNavLink name="career">
              <NavLink href="#career">Career</NavLink>
            </ScrollspyNavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default NavComponent
