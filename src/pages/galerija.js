import React, { useState } from 'react'
import bunari1 from '../images/bunari-1.jpeg'
import bunari2 from '../images/bunari-2.jpeg'
import ribnica1 from '../images/ribnica-1.jpeg'
import ribnica2 from '../images/ribnica-2.jpeg'
import ribnica3 from '../images/ribnica-3.jpeg'
import ribnica4 from '../images/ribnica-4.jpeg'
import progorelica1 from '../images/progorelica-1.jpeg'
import progorelica2 from '../images/progorelica-2.jpeg'
import raska1 from '../images/raska-1.jpg'
import raska2 from '../images/raska-2.jpg'
import Slider from "react-slick"

import raskaImg from '../images/raska.png'
import ribnicaImg from '../images/ribnica.png'
import skolaImg from '../images/skola.png'
import bunariImg from '../images/bunari.png'
import progorelicaImg from '../images/progorelica.png'
import josanickaImg from '../images/josanicka.png' 
import josanickaVideo from '../images/josanicka.mp4'

import Layout from '../components/layout'
import Lightbox from 'react-image-lightbox'; // This only needs to be imported once in your app
import ModalVideo from 'react-modal-video'

import Testing from '../components/testing'
import TestingTim from '../components/testingTim'

const bunari = [
  bunari1, bunari2
]

const ribnica = [
  ribnica1, ribnica2, ribnica3, ribnica4
]

const progorelica = [
  progorelica1, progorelica2
]

const raska = [
  raska1, raska2
]

const banja = [
  josanickaVideo
]

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }
  ]
};

const Galerija = () => {
  const [isOpenRaska, setOpenRaska] = useState(false)
  const [isOpenBunari, setOpenBunari] = useState(false)
  const [isOpenRibnica, setOpenRibnica] = useState(false)
  const [isOpenProgorelica, setOpenProgorelica] = useState(false)
  const [isOpenBanja, setOpenBanja] = useState(false)
  const [isOpenSkola, setOpenSkola] = useState(false)
  const [photoIndex,  setPhotoIndex] =  useState(0)

  return (
    <Layout phoneColor="orange">
      {/* <TestingTim /> */}
      <section className="gallery-section">
        <div className="container is-fluid">
          <Slider {...settings}>
            <div>
              <img src={raskaImg} onClick={() => setOpenRaska(true)} />
              <p>KON. SALA RAŠKA</p>
            </div>
            <div>
              <img src={josanickaImg} onClick={() => setOpenBanja(true)} />
              <p>JOŠANIČKA BANJA</p>
            </div>
            <div>
              <img src={ribnicaImg} onClick={() => setOpenRibnica(true)} />
              <p>DOM KULTURE RIBNICA</p>
            </div>
            <div>
              <img src={skolaImg} onClick={() => setOpenSkola(true)} />
              <p>ELEKTRO TEHNIČKA ŠKOLA</p>
            </div>
            <div>
              <img src={progorelicaImg} onClick={() => setOpenProgorelica(true)}/>
              <p>DOM KULTURE PROGORELICA</p>
            </div>
            <div>
              <img src={bunariImg} onClick={() => setOpenBunari(true)} />
              <p>KARAJUKIĆA BUNARI</p>
            </div>
            
          </Slider>
        </div>
      </section>
      {/* <Testing /> */}
      <ModalVideo channel='youtube' isOpen={isOpenBanja} videoId='Tg9zx8Hz844' onClose={() => setOpenBanja(false)} />
      <ModalVideo channel='youtube' isOpen={isOpenSkola} videoId='jYlzPyxQ_0U' onClose={() => setOpenSkola(false)} />
      {isOpenBunari && (
          <Lightbox
            mainSrc={bunari[photoIndex]}
            nextSrc={bunari[(photoIndex + 1) % bunari.length]}
            prevSrc={bunari[(photoIndex + bunari.length - 1) % bunari.length]}
            onCloseRequest={() => {setOpenBunari(false); setPhotoIndex(0)}}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + bunari.length - 1) % bunari.length )
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % bunari.length )
            }
          />
        )}
        {isOpenRibnica && (
          <Lightbox
            mainSrc={ribnica[photoIndex]}
            nextSrc={ribnica[(photoIndex + 1) % ribnica.length]}
            prevSrc={ribnica[(photoIndex + ribnica.length - 1) % ribnica.length]}
            onCloseRequest={() => {setOpenRibnica(false); setPhotoIndex(0)}}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + ribnica.length - 1) % ribnica.length )
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % ribnica.length )
            }
          />
        )}
         {isOpenRaska && (
          <Lightbox
            mainSrc={raska[photoIndex]}
            nextSrc={raska[(photoIndex + 1) % raska.length]}
            prevSrc={raska[(photoIndex + raska.length - 1) % raska.length]}
            onCloseRequest={() => {setOpenRaska(false); setPhotoIndex(0)}}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + raska.length - 1) % raska.length )
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % raska.length )
            }
          />
        )}
         {isOpenProgorelica && (
          <Lightbox
            mainSrc={progorelica[photoIndex]}
            nextSrc={progorelica[(photoIndex + 1) % progorelica.length]}
            prevSrc={progorelica[(photoIndex + progorelica.length - 1) % progorelica.length]}
            onCloseRequest={() => {setOpenProgorelica(false); setPhotoIndex(0)}}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + progorelica.length - 1) % progorelica.length )
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % progorelica.length )
            }
          />
        )}
         {/* {isOpenBanja && (
          <Lightbox
            mainSrc={banja[photoIndex]}
            nextSrc={banja[(photoIndex + 1) % banja.length]}
            prevSrc={banja[(photoIndex + banja.length - 1) % banja.length]}
            onCloseRequest={() => {setOpenBanja(false); setPhotoIndex(0)}}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + banja.length - 1) % banja.length )
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % banja.length )
            }
          />
          
        )} */}
        {/* {isOpenSkola && (
          <Lightbox
            mainSrc={skola[photoIndex]}
            nextSrc={skola[(photoIndex + 1) % skola.length]}
            prevSrc={skola[(photoIndex + skola.length - 1) % skola.length]}
            onCloseRequest={() => {setOpenBanja(false); setPhotoIndex(0)}}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + skola.length - 1) % skola.length )
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % skola.length )
            }
          /> */}
          
        )}
        
    </Layout>
    // <div>
    //     <button type="button" onClick={() => setOpenBunari(true)}>
    //       Open bunari
    //     </button>
    //     <button type="button" onClick={() => setOpenRibnica(true)}>
    //       Open ribnica
    //     </button>



    //     
    //   </div>
  )
}

export default Galerija
