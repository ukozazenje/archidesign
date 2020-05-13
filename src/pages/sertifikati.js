import React, { useState } from 'react'
import Layout from '../components/layout'
import Slider from "react-slick";
import Sertifikat1Large from '../images/sertifikat-1@2x.jpg'
import Sertifikat2Large from '../images/sertifikat-2@2x.jpg'
import Sertifikat3Large from '../images/sertifikat-3@2x.jpg'
import Sertifikat4Large from '../images/sertifikat-4@2x.jpg'
import Sertifikat1 from '../images/sertifikat-1.jpg'
import Sertifikat2 from '../images/sertifikat-2.jpg'
import Sertifikat3 from '../images/sertifikat-3.jpg'
import Sertifikat4 from '../images/sertifikat-4.jpg'
import Lightbox from 'react-image-lightbox'
const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
      },
    },
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

const Sertifikati = () => {

  const sertifikatOne = [ Sertifikat1Large ]
  const sertifikatTwo = [ Sertifikat2Large ]
  const sertifikatThree = [ Sertifikat3Large ]
  const sertifikatFour = [ Sertifikat4Large ] 

  const [isSertifikatOne, setOpenSertifikatOne] = useState(false)
  const [isSertifikatTwo, setOpenSertifikatTwo] = useState(false)
  const [isSertifikatThree, setOpenSertifikatThree] = useState(false)
  const [isSertifikatFour, setOpenSertifikatFour] = useState(false)
  const [photoIndex,  setPhotoIndex] =  useState(0)
  return (
    <Layout phoneColor="white" page="sertifikati">
      <section className="gallery-section sertificat-section">
        <div className="container is-fluid">
          <Slider {...settings}>
            <div>
              <div className="slide-wrapper">
                <img src={Sertifikat1Large} onClick={ () => setOpenSertifikatOne(true)}  />
              </div>
            </div>
            <div>
              <div className="slide-wrapper">
                <img src={Sertifikat2Large} onClick={ () => setOpenSertifikatTwo(true)} />
              </div>
            </div>
            <div>
              <div className="slide-wrapper">
                <img src={Sertifikat3Large} onClick={ () => setOpenSertifikatThree(true)} />
              </div>
            </div>
            <div>
              <div className="slide-wrapper">
                <img src={Sertifikat4Large} onClick={ () => setOpenSertifikatFour(true)} />
              </div>
            </div>
          </Slider>
        </div>
      </section>
        {isSertifikatOne && (
          <Lightbox
          mainSrc={sertifikatOne[photoIndex]}
          nextSrc={sertifikatOne[(photoIndex + 1) % sertifikatOne.length]}
          prevSrc={sertifikatOne[(photoIndex + sertifikatOne.length - 1) % sertifikatOne.length]}
          onCloseRequest={() => {setOpenSertifikatOne(false); setPhotoIndex(0)}}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + sertifikatOne.length - 1) % sertifikatOne.length )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % sertifikatOne.length )
          }
          />
          )}
         {isSertifikatTwo && (
           <Lightbox
           mainSrc={sertifikatTwo[photoIndex]}
           nextSrc={sertifikatTwo[(photoIndex + 1) % sertifikatTwo.length]}
           prevSrc={sertifikatTwo[(photoIndex + sertifikatTwo.length - 1) % sertifikatTwo.length]}
           onCloseRequest={() => {setOpenSertifikatTwo(false); setPhotoIndex(0)}}
           onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + sertifikatTwo.length - 1) % sertifikatTwo.length )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % sertifikatTwo.length )
          }
          />
          )}
         {isSertifikatThree && (
           <Lightbox
           mainSrc={sertifikatThree[photoIndex]}
           nextSrc={sertifikatThree[(photoIndex + 1) % sertifikatThree.length]}
           prevSrc={sertifikatThree[(photoIndex + sertifikatThree.length - 1) % sertifikatThree.length]}
           onCloseRequest={() => {setOpenSertifikatThree(false); setPhotoIndex(0)}}
           onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + sertifikatThree.length - 1) % sertifikatThree.length )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % sertifikatThree.length )
          }
          />
          )}
          {isSertifikatFour && (
              <Lightbox
                mainSrc={sertifikatFour[photoIndex]}
                nextSrc={sertifikatFour[(photoIndex + 1) % sertifikatFour.length]}
                prevSrc={sertifikatFour[(photoIndex + sertifikatFour.length - 1) % sertifikatFour.length]}
                onCloseRequest={() => {setOpenSertifikatFour(false); setPhotoIndex(0)}}
                onMovePrevRequest={() =>
                  setPhotoIndex((photoIndex + sertifikatFour.length - 1) % sertifikatFour.length )
                }
                onMoveNextRequest={() =>
                  setPhotoIndex((photoIndex + 1) % sertifikatFour.length )
                }
              />
            )}
    </Layout>
  )
}

export default Sertifikati
