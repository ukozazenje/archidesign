import React from "react"
import Footer from './footer'
import Header from './header'
import "../sass/main.sass"

const Layout = ({children, page, phoneColor, hidePhone}) => {
  return (
    <div className={`${page}`}>
      <Header phoneColor={phoneColor} hidePhone={hidePhone}/>
        {children}
      <Footer />
    </div>
  )
}

export default Layout
