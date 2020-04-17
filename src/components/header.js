import React, {useState} from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"
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
        <div className="mobile-logo" onClick={ () => setActive(!active)} >
          <img src={logo} alt="logo" />
        </div>
        <nav> 
          <AniLink cover bg="#E66412" to="/">Pocetna</AniLink>
          <AniLink cover bg="#E66412" to="/o-nama">O nama</AniLink>
          <AniLink cover bg="#E66412" to="/tim">Tim</AniLink>
          <AniLink cover bg="#E66412" to="/galerija">Gaalerija</AniLink>
          <AniLink cover bg="#E66412" to="/sertifikati">Sertifikati</AniLink>
          <AniLink cover bg="#E66412" to="/kontakt">Kontakt</AniLink>
        </nav>
        {
          hidePhone ? <span>ARCHIDESIGN</span> : <div className={`phone-wrapper ${phoneColor} `}>
          <a href="tel:+381641187765">O64-11-877-65</a>
        </div>
        }
      </div>
      <div className={`mobile-navigation ${active ? 'active' : ""}`} >
        <nav>
          <AniLink cover bg="#E66412" to="/">Pocetna</AniLink>
          <AniLink cover bg="#E66412" to="/o-nama">O nama</AniLink>
          <AniLink cover bg="#E66412" to="/tim">Tim</AniLink>
          <AniLink cover bg="#E66412" to="/galerija">Gaalerija</AniLink>
          <AniLink cover bg="#E66412" to="/sertifikati">Sertifikati</AniLink>
          <AniLink cover bg="#E66412" to="/kontakt">Kontakt</AniLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
