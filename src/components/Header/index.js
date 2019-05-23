import React from 'react';
import './Header.scss';
import Logo from '../../media/Images/TK-logo.svg';
import CreateNew from '../../media/Images/create-new.svg'
import { NavLink } from 'react-router-dom';


function Header() {
  return (
    <header className="header">
      <img className='logo' src={Logo} />
      <NavLink to='/new-note' className='nav'>
        <img src={CreateNew} className='createNew'/>
      </NavLink>
    </header>
  );
}

export default Header;