import React from 'react';
import './TopNav.css';
import logo from './blabbing-logo.svg';

const TopNav = () => (
  <header className='header'>
    <a href="/">
      <img className='logo' alt="Blabbing beer" src={logo}/>
    </a>
  </header>
);

export default TopNav;
