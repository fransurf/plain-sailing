import React from 'react'

import GeoLogo from '../assets/logos/g-logo.png'

const NavBar = () => {


  return (
    <header>
      <nav id='navbar'>
        <a href='/' className='logo'><img src={GeoLogo} alt='Geollect-logo'/></a>
      </nav>
    </header>

  )
}

export default NavBar