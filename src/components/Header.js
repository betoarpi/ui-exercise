import React from 'react';
import '../styles/components/header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import logo from '../assets/images/logo_gmail.png'

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='search'>
        <input className='search__input' type='text' placeholder='Search mail' />
      </div>
      <div className='options'>
        <FontAwesomeIcon icon={faUserCircle} />
      </div>
    </header>
  );
};

export default Header;