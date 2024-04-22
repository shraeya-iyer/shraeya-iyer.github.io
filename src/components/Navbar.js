import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './NavbarStyles.css'

const Navbar = () => {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

  return (
    <div className='header'>
      <Link to='/'>
        <h1>SHRAEYA IYER</h1>
      </Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
            <Link to='/AboutMe'>About Me</Link>
        </li>
        <li>
            <a href="https://www.dropbox.com/scl/fi/j87twfl7v5xmwjv9z7hin/Shraeya-Iyer-Resume.pdf?rlkey=872rgp0udo3azrnna4jlp98bd&st=vl6fz1dn&dl=0" target="_blank" rel="noopener noreferrer">Resume</a>
        </li>
        <li>
            <a href="https://github.com/shraeya-iyer" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/shraeya-iyer" target="_blank" rel="noopener noreferrer">Linkedin</a>
        </li>
      </ul>
      <div className='hamburger' onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color: '#000'}}/>) : (<FaBars size={20} style={{color: '#000'}} />)}  
      </div>
    </div>
  )
}

export default Navbar
