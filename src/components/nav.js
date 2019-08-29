// @flow
import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap'
import { AUTHOR_NAME } from '../config'

import SocialBtnGroup from './common/socialBtnGroup'
import navStyles from './nav.module.scss'

type Props = {
  activeName: string,
  onClickIcon: Function,
  onClickNav: Function,
}

function NavComponent({ activeName, onClickIcon, onClickNav }: Props) {
  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => setCollapsed(!collapsed)

  return (
    <Navbar expand="md" fixed="top" className={`${navStyles.navbar} navbar-dark`}>
      <Link className={navStyles.navbar__icon} to="/" onClick={() => onClickIcon('header')}>
        {AUTHOR_NAME}
      </Link>

      <NavbarToggler onClick={toggleNavbar}>
        <span className="navbar-toggler-icon" />
      </NavbarToggler>

      <Collapse isOpen={!collapsed} navbar>
        <SocialBtnGroup />

        <Nav navbar className="ml-auto">
          <NavItem>
            <NavLink href="#header" active={activeName === 'header'} onClick={() => onClickNav('header')}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#portfolio" active={activeName === 'portfolio'} onClick={() => onClickNav('portfolio')}>
              Porfolio
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#about" active={activeName === 'about'} onClick={() => onClickNav('about')}>
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#skills" active={activeName === 'skills'} onClick={() => onClickNav('skills')}>
              Skills
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#learning" active={activeName === 'learning'} onClick={() => onClickNav('learning')}>
              Learning
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#work" active={activeName === 'work'} onClick={() => onClickNav('work')}>
              Experience
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#career" active={activeName === 'career'} onClick={() => onClickNav('career')}>
              Career
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default NavComponent
