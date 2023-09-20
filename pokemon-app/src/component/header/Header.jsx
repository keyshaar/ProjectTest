import React from 'react'
import { useState } from 'react'
import pokedex from '../../images/pokedex.png'
import { NavLink } from 'react-router-dom'
import './Header.css';
// import CloseIcon from '@mui/icons-material/Close';
// import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faX} from '@fortawesome/free-solid-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { Dropdown } from 'bootstrap';
import Search from './Search';

function Header() {
    const [click, setClick] = useState(false);
    const [dropwdon,setDropdown] = useState(false)

    const handleClick = () => setClick(!click);
  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
            <NavLink to="/" className="navbar-logo">
                <a href="" className='nav-links'>
                    <img className='logo' src={pokedex} alt="" />
                </a>
            </NavLink>
            <div className='menu-icon' onClick={handleClick}>
                <FontAwesomeIcon icon={click ? faX : faBars}/>
            </div>
            <ul className={click ?  'nav-menu active': 'nav-menu'}>
                <li className='nav-item'>
                    <Search/>
                </li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Header
