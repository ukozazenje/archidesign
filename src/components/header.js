import React, {useState} from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import burgerWhite from '../images/burger-white.svg'
import burgerOrange from '../images/burger-orange.svg'
import callWhite from '../images/call-white.svg'
import callOrange from '../images/call-icon.svg'
// import logo from '../images/logo.png'
import logo from '../images/logo.svg'
const Header = ({phoneColor, hidePhone}) => {
  const [ active, setActive ] = useState(false)
  return (
    <header>
      <div className="navigation container is-fluid">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="mobile-logo" >
          <img src={logo} alt="logo" />
        </div>
        <nav> 
          <AniLink cover bg="#E66412" to="/">Početna</AniLink>
          <AniLink cover bg="#E66412" to="/o-nama">O nama</AniLink>
          <AniLink cover bg="#E66412" to="/tim">Tim</AniLink>
          <AniLink cover bg="#E66412" to="/galerija">Galerija</AniLink>
          <AniLink cover bg="#E66412" to="/sertifikati">Sertifikati</AniLink>
          <AniLink cover bg="#E66412" to="/kontakt">Kontakt</AniLink>
        </nav>
        {
          hidePhone ? <span>ARCHIDESIGN</span> : <div className={`phone-wrapper ${phoneColor} `}>
          <a className="desktop-phone" href="tel:+381641187765">O64-11-877-65</a>
          {
          phoneColor === 'white' ? <>
            <a href="tel:+381641187765"><img src={callWhite} alt="call" className="burger-menu call-icon" /></a>
            <img src={burgerWhite} alt="menu" className="burger-menu" onClick={ () => setActive(!active)} />
          </> : <>
            <a href="tel:+381641187765"><img src={callOrange} alt="call" className="burger-menu call-icon" /></a>
            <img src={burgerOrange} alt="menu" className="burger-menu" onClick={ () => setActive(!active)} />
          </> 
          }
        </div>
        }
      </div>
      <div className={`mobile-navigation ${active ? 'active' : ""}`} >
        <nav>
          <AniLink cover bg="#E66412" to="/">Početna</AniLink>
          <AniLink cover bg="#E66412" to="/o-nama">O nama</AniLink>
          <AniLink cover bg="#E66412" to="/tim">Tim</AniLink>
          <AniLink cover bg="#E66412" to="/galerija">Galerija</AniLink>
          <AniLink cover bg="#E66412" to="/sertifikati">Sertifikati</AniLink>
          <AniLink cover bg="#E66412" to="/kontakt">Kontakt</AniLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
