// @flow
import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap'
import { ScrollspyNavLink } from 'reactstrap-scrollspy'
import { AUTHOR_NAME } from '../config'

import SocialBtnGroup from './common/socialBtnGroup'
import navStyles from './nav.module.scss'

type Props = {
  updatedName?: string,
  updateNavbar?: Function,
}

function NavComponent({ updatedName, updateNavbar }: Props) {
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
            <ScrollspyNavLink name="header" updatedName={updatedName} updateNavbar={updateNavbar}>
              <NavLink href="#header">Home</NavLink>
            </ScrollspyNavLink>
          </NavItem>
          <NavItem>
            <ScrollspyNavLink name="portfolio" updatedName={updatedName} updateNavbar={updateNavbar}>
              <NavLink href="#portfolio">Porfolio</NavLink>
            </ScrollspyNavLink>
          </NavItem>
          <NavItem>
            <ScrollspyNavLink name="about" updatedName={updatedName} updateNavbar={updateNavbar}>
              <NavLink href="#about">About</NavLink>
            </ScrollspyNavLink>
          </NavItem>
          <NavItem>
            <ScrollspyNavLink name="skills" updatedName={updatedName} updateNavbar={updateNavbar}>
              <NavLink href="#skills">Skills</NavLink>
            </ScrollspyNavLink>
          </NavItem>
          <NavItem>
            <ScrollspyNavLink name="learning" updatedName={updatedName} updateNavbar={updateNavbar}>
              <NavLink href="#learning">Learning</NavLink>
            </ScrollspyNavLink>
          </NavItem>
          <NavItem>
            <ScrollspyNavLink name="work" updatedName={updatedName} updateNavbar={updateNavbar}>
              <NavLink href="#work">Experience</NavLink>
            </ScrollspyNavLink>
          </NavItem>
          <NavItem>
            <ScrollspyNavLink name="career" updatedName={updatedName} updateNavbar={updateNavbar}>
              <NavLink href="#career">Career</NavLink>
            </ScrollspyNavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

NavComponent.defaultProps = {
  updatedName: undefined,
  updateNavbar: undefined,
}

export default NavComponent
