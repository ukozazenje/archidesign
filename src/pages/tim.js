import React from 'react'
import Layout from '../components/layout'
import Slider from "react-slick";
import Tim1 from '../images/tim-1.png'
import Tim2 from '../images/tim-2.png'
import Tim3 from '../images/tim-3.png'
import Tim4 from '../images/tim-4.png'
import Tim5 from '../images/tim-5.png'

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }
  ]
};

const Tim = () => {
  return (
    <Layout phoneColor="orange">
      <section className="tim-section">
        <div className="container is-fluid">
          <div className="is-hidden-touch">
            <Slider {...settings}>
              <div>
                <div className="slide-wrapper">
                  <img src={Tim1} />
                  <p>NEBOJŠA RRČEVIĆ<br />
                    ŠEF GRADILIŠTA</p>
                </div>
              </div>
              <div>
                <div className="slide-wrapper">
                  <img src={Tim2} />
                  <p>BOJAN GICIĆ<br />
                  DIREKTOR</p>
                </div>
              </div>
              <div>
                <div className="slide-wrapper">
                  <img src={Tim3} />
                  <p>ZORAN PETROVIĆ<br />
                  MENADZMENT</p>
                </div>
              </div>
              <div>
                <div className="slide-wrapper">
                  <img src={Tim4} />
                  <p>VASKO KORAĆ<br />
                    ŠEF GRADILIŠTA</p>
                </div>
              </div>
              <div>
                <div className="slide-wrapper">
                  <img src={Tim5} />
                  <p>JANKO ĐOKOVIĆ<br />
                  ŠEF MAGACINA</p>
                </div>
              </div>
            </Slider>
          </div>
          <div className="is-hidden-desktop tim-mobile-slider">
            <Slider {...settings}>
              <div>
                <div className="slide-wrapper">
                  <img src={Tim2} />
                  <p>BOJAN GICIĆ<br />
                  DIREKTOR</p>
                </div>
              </div>
              <div>
                <div className="slide-wrapper">
                  <img src={Tim3} />
                  <p>ZORAN PETROVIĆ<br />
                  MENADZMENT</p>
                </div>
              </div>
              <div>
                <div className="slide-wrapper">
                  <img src={Tim1} />
                  <p>NEBOJŠA RRČEVIĆ<br />
                    ŠEF GRADILIŠTA</p>
                </div>
              </div>
              <div>
                <div className="slide-wrapper">
                  <img src={Tim4} />
                  <p>VASKO KORAĆ<br />
                    ŠEF GRADILIŠTA</p>
                </div>
              </div>
              <div>
                <div className="slide-wrapper">
                  <img src={Tim5} />
                  <p>JANKO ĐOKOVIĆ<br />
                  ŠEF MAGACINA</p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Tim
