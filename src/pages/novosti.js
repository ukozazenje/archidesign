// import React, { useState } from 'react'
// import lovacki1 from '../images/lovacki-dom-1.png'
// import lovacki2 from '../images/lovacki-dom-1.jpg'
// import lovacki3 from '../images/lovacki-dom-1.jpg'
// import trstenik1 from '../images/trstenik-1.png'
// import trstenik2 from '../images/trstenik-2.jpg'
// import trstenik3 from '../images/trstenik-3.jpg'
// import trstenik4 from '../images/trstenik-4.jpg'

// import Layout from '../components/layout'
// import Lightbox from 'react-image-lightbox'; // This only needs to be imported once in your app
// import ModalVideo from 'react-modal-video'

// import Testing from '../components/testing'
// import TestingTim from '../components/testingTim'

import React, { useState } from 'react'
import lovacki1 from '../images/lovacki-dom-1.png'
import lovacki2 from '../images/lovacki-dom-2.jpg'
import lovacki3 from '../images/lovacki-dom-3.jpg'
import trstenik1 from '../images/trstenik-1.png'
import trstenik2 from '../images/trstenik-2.jpg'
import trstenik3 from '../images/trstenik-3.jpg'
import trstenik4 from '../images/trstenik-4.jpg'
import Slider from "react-slick"
import Layout from '../components/layout'
import Lightbox from 'react-image-lightbox'; // This only needs to be imported once in your app

const trstenik = [
  trstenik2, trstenik3, trstenik4
]

const lovacki = [
  lovacki2, lovacki3
]


const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
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

const Novosti = () => {
  const [isOpenTrstenik, setOpenTrstenik] = useState(false)
  const [isOpenLovackiDom, setOpenLovackiDom] = useState(false)
  const [photoIndex,  setPhotoIndex] =  useState(0)

  return (
    <Layout phoneColor="orange">
      <section className="gallery-section news-section">
        <div className="container is-fluid">
          <Slider {...settings}>
            <div>
              <div className="flex-wrapper">
                <img src={trstenik1} onClick={() => setOpenTrstenik(true)} />
                <p style={{textTransform: "uppercase"}}>NOVI POSLOVNI OBJEKAT NA PIJACI U TRSTENIKU</p>
                <ul>
                  <li><strong>Naručilac posla</strong> : Opštinska uprava Trstenik. Radovi se odnose na završetak novog velelepnog objekta na Pijaci sa priključcima na infrastrukturu..</li>
                  <li><button className="button" type="button" onClick={() => setOpenTrstenik(true)}>Za više slika</button></li>
                </ul>
              </div>
            </div>
            <div>
              <div className="flex-wrapper">
                <img src={lovacki1} onClick={() => setOpenLovackiDom(true)} />
                <p style={{textTransform: "uppercase"}}>LOVAČKI DOM GRUŽA</p>
                <ul>
                  <li>Dogradnja i rekonstrukcija Lovačkog doma u Gruži,
  za potrebe Opštinske uprave Knić. 
  Projekat je finansiran iz sredstava Ministarstva
  turizma preko Regionalne agencije za razvoj
  Šumadije i Pomoravlja.</li>
                <li><button className="button" type="button" onClick={() => setOpenLovackiDom(true)}>Za više slika</button></li>
                </ul>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {isOpenTrstenik && (
          <Lightbox
            mainSrc={trstenik[photoIndex]}
            nextSrc={trstenik[(photoIndex + 1) % trstenik.length]}
            prevSrc={trstenik[(photoIndex + trstenik.length - 1) % trstenik.length]}
            onCloseRequest={() => {setOpenTrstenik(false); setPhotoIndex(0)}}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + trstenik.length - 1) % trstenik.length )
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % trstenik.length )
            }
          />
        )}
        {isOpenLovackiDom && (
          <Lightbox
            mainSrc={lovacki[photoIndex]}
            nextSrc={lovacki[(photoIndex + 1) % lovacki.length]}
            prevSrc={lovacki[(photoIndex + lovacki.length - 1) % lovacki.length]}
            onCloseRequest={() => {setOpenLovackiDom(false); setPhotoIndex(0)}}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + lovacki.length - 1) % lovacki.length )
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % lovacki.length )
            }
          />
        )}
    </Layout>
  )
}

export default Novosti

