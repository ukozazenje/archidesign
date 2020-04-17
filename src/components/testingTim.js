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
    <>
      <section className="tim-section">
        <div className="container is-fluid">
          <Slider {...settings}>
            <div>
              <div className="slide-wrapper">
                <img src={Tim1} />
              </div>
            </div>
            <div>
              <div className="slide-wrapper">
                <img src={Tim2} />
              </div>
            </div>
            <div>
              <div className="slide-wrapper">
                <img src={Tim3} />
              </div>
            </div>
            <div>
              <div className="slide-wrapper">
                <img src={Tim4} />
              </div>
            </div>
            <div>
              <div className="slide-wrapper">
                <img src={Tim5} />
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  )
}

export default Tim
