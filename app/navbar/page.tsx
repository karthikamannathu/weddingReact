import { faBars, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <header className="head">
        <a href="#" className="logo">&nbsp;Wedding<span> </span>Win&nbsp;<i><FontAwesomeIcon icon={faHeart}/></i></a>
        <nav className="navbar ">
        <Link href="/">Home</Link>
        <Link href="/pages/service">Service</Link>
        <Link href="pages/vendor">Vendor</Link>
        <Link href="/pages/e-invitation">E-invitation</Link>
        
        </nav>
        <div id="menu-bar"><i><FontAwesomeIcon icon={faBars}/></i></div>
    </header>
  )
}

export default Navbar