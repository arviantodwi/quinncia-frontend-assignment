import React, { useRef } from 'react';
import logo from '../logo.png';
import Uploader from './Uploader';

const Container = props => (
  <nav
    className="navbar is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    {props.children}
  </nav>
);

const Brand = () => (
  <div className="navbar-brand">
    <a className="navbar-item" href="/">
      <img src={logo} height="28" />
    </a>
  </div>
);

const NavEnd = props => (
  <div className="navbar-end">
    <div className="navbar-item">
      <div className="buttons">{props.children}</div>
    </div>
  </div>
);

const Navbar = () => (
  <Container>
    <Brand />
    <NavEnd>
      <Uploader />
    </NavEnd>
  </Container>
);

export default Navbar;
