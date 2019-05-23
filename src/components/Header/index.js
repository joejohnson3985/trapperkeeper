import React from 'react';
import './Header.scss';
import Logo from '../../media/Images/TK-logo.svg';



function Header() {
  return (
    <header className="header">
      <img className='logo' src={Logo} />
    </header>
  );
}

export default Header;