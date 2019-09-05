// @flow
import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap'
import { ScrollspyNavLink } from 'reactstrap-scrollspy'
import { AUTHOR_NAME } from '../config'

import SocialBtnGroup from './common/socialBtnGroup'
import navStyles from './nav.module.scss'

type Props = {
  updateNavLinkName?: string,
  updateNavbar?: Function,
}

function NavComponent({ updateNavLinkName, updateNavbar }: Props) {
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
            <ScrollspyNavLink navLinkName="header" updateNavLinkName={updateNavLinkName} updateNavbar={updateNavbar}>
              <NavLink href="#header">Home</NavLink>
            </ScrollspyNavLink>
          </NavItem>
          <NavItem>
            <ScrollspyNavLink navLinkName="portfolio" updateNavLinkName={updateNavLinkName} updateNavbar={updateNavbar}>
              <NavLink href="#portfolio">Porfolio</NavLink>
            </ScrollspyNavLink>
          </NavItem>
          <NavItem>
            <ScrollspyNavLink navLinkName="about" updateNavLinkName={updateNavLinkName} updateNavbar={updateNavbar}>
              <NavLink href="#about">About</NavLink>
            </ScrollspyNavLink>
          </NavItem>

          <NavItem>
            <ScrollspyNavLink navLinkName="skills" updateNavLinkName={updateNavLinkName} updateNavbar={updateNavbar}>
              <NavLink href="#skills">Skills</NavLink>
            </ScrollspyNavLink>
          </NavItem>
          <NavItem>
            <ScrollspyNavLink navLinkName="learning" updateNavLinkName={updateNavLinkName} updateNavbar={updateNavbar}>
              <NavLink href="#learning">Learning</NavLink>
            </ScrollspyNavLink>
          </NavItem>
          <NavItem>
            <ScrollspyNavLink navLinkName="work" updateNavLinkName={updateNavLinkName} updateNavbar={updateNavbar}>
              <NavLink href="#work">Experience</NavLink>
            </ScrollspyNavLink>
          </NavItem>
          <NavItem>
            <ScrollspyNavLink navLinkName="career" updateNavLinkName={updateNavLinkName} updateNavbar={updateNavbar}>
              <NavLink href="#career">Career</NavLink>
            </ScrollspyNavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

NavComponent.defaultProps = {
  updateNavLinkName: undefined,
  updateNavbar: undefined,
}

export default NavComponent
