import React from 'react'
import Layout from '../components/layout'
import Bojan from '../images/bojan@2x.jpg'
import Zoran from '../images/zoran@2x.jpg'
import Lokacija from '../images/lokacija.svg'
import Mail from '../images/mail.svg'
const Kontakt = () => {
  return (
    <Layout>
      <section className="contact-us-section">
        <div className="container is-fluid">
          <h1>ARCHIDESIGN</h1>
          <div className="columns">
            <div className="column">
              <div className="is-hidden-touch">
                <div className="contact">
                  <h3>Kontaktirajte nas</h3>
                  <p className="address-contact"><img src={Lokacija} />Dragoslava Bogavca /13</p>
                  <p className="mail-contact"><img src={Mail} /> <a href ="mail:archiplus.kv@gmail.com">archiplus.kv@gmail.com</a></p>
                </div>
              </div>
              <div className="contact-person">
                <div className="contact-content">
                  <div className="contact-data">
                    <div className="name">Bojan Gicić</div>
                    <div className="title">DIREKTOR</div>
                  </div>
                  <a className="phone" href="tel:+381641187765">+ 381-64-11-8-77-65</a>
                </div>
                <img src={Bojan} alt="bojan" />
              </div>
              <div className="contact-person">
                <div className="contact-content">
                  <div className="contact-data">
                    <div className="name">Zoran Petrović</div>
                    <div className="title">MENADŽER</div>
                  </div>
                  <a className="phone" href="tel:+381641199949">+ 381-64-11-999-49</a>
                </div>
                <img src={Zoran} alt="Zoran" />
              </div>
              <div className="contact-person">
                <div className="contact-content">
                  <div className="contact-data">
                    <div className="name">Kancelarija</div>
                  </div>
                  <a className="phone" href="tel:38136201469">+ 381 36 201 469</a>
                </div>
              </div>
            </div>
            <div className="is-hidden-desktop">
              <div className="contact">
                <p className="address-contact"><img src={Lokacija} />Dragoslava Bogavca /13</p>
                <p className="mail-contact"><img src={Mail} /> <a href ="mail:archiplus.kv@gmail.com">archiplus.kv@gmail.com</a></p>
              </div>
            </div>
            <div className="column map-responsive">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.2013887931103!2d20.683382515951287!3d43.727143079118804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475700e30450fef7%3A0x392a53679b89c97a!2sDragoslava%20Bogavca%2013%2C%20Kraljevo%2036000!5e0!3m2!1sen!2srs!4v1586942626891!5m2!1sen!2srs" width="800" height="600" frameborder="0" style={{border: 0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Kontakt
