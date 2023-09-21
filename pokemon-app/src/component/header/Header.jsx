import React from 'react'
import { useState } from 'react'
import pokedex from '../../images/pokedex.png'
import { NavLink } from 'react-router-dom'
import './Header.css'
// import CloseIcon from '@mui/icons-material/Close';
// import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faX} from '@fortawesome/free-solid-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { Dropdown } from 'bootstrap';
import Search from './Search';
import { Container } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'

function Header() {
    // const [click, setClick] = useState(false);
    // const [dropwdon,setDropdown] = useState(false)

    // const handleClick = () => setClick(!click);
    // const closeMobileMenu = () => setClick(false);
  return (
     <Navbar className='navbar-container'>
      <Container className='container'>
        <Navbar.Brand className='logo ' href="/">
            <img src={pokedex} 
            style={{ width: "10rem", paddingLeft:"2rem" }}
            />
        </Navbar.Brand>
        <Navbar.Toggle arias-control="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className='ms-auto' style={{paddingRight:"2rem"}} >
           <Search/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Header

    {/* <nav className="navbar">
        <div className='navbar-container'>
            <NavLink to="/" className="navbar-logo">
                <a href="" className='nav-links'>
                    <img className='logo' src={pokedex} alt="" />
                </a>
            </NavLink>
            <div className='menu-icon' onClick={handleClick}>
                <FontAwesomeIcon icon={click ? faX : faBars}/>
            </div>
            <ul className={click ?  'nav-menu active': 'nav-menu'}>
                <li className='nav-item' onClick={closeMobileMenu}>
                    <Search/>
                </li>
            </ul>
        </div>
    </nav> */}