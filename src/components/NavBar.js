import React from 'react'

import GeoLogo from '../assets/logos/g-logo.png'

const NavBar = () => {

  // * REVEAL DROPDOWN MENU ON HAMBURGER CLICK
  const menuReveal = () => {
    let menu = document.getElementById("hamburger-menu")
    menu.classList.toggle('active')

    let hamburger = document.getElementById("hamburger")
    hamburger.classList.toggle('active')
  }

  // * REMOVE DROPDOWN ON NAVIGATION TO NEW PAGE
  const menuDisappear = () => {
    let menu = document.getElementById("hamburger-menu")
    menu.classList.remove('active')

    let hamburger = document.getElementById("hamburger")
    hamburger.classList.remove('active')
  }

  return (
    <header>
      <nav id='navbar'>
        <a href='/' className='logo'><img src={GeoLogo} alt='Geollect-logo'/></a>
        <div id='hamburger-menu' className='hamburger-menu'>
          <h3 className='hamburger-link' to='/about' onClick={menuDisappear}>Your Vessels</h3>
          <h3 className='hamburger-link' to='/projects' onClick={menuDisappear}>Your Account</h3>
          <h3 className='hamburger-link' to='/academics' onClick={menuDisappear}>Sorry These</h3>
          <h3 className='hamburger-link' to='/contact' onClick={menuDisappear}>Aren't Real</h3>
        </div>
        <div id='hamburger' onClick={menuReveal} className='icon'>
          <div className='burger'></div>
          <div className='burger'></div>
          <div className='burger'></div>
        </div>
      </nav>
    </header>

  )
}

export default NavBar