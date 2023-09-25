import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "./Logo"
import Log from "./Log"
import "../style/style.css"

const Header = () => {
  return (
    <nav className="header">    
        <Link to="/" className="linkToMainPage" data-testid="linkToMainPage-testid">
            <Logo />
        </Link>
        <Log />
    </nav>
  )
}

export default Header