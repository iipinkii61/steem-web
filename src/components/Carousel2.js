import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel as ReactCarousel } from 'react-responsive-carousel'

import image1 from '../assets/images/1.jpg'
import image2 from '../assets/images/10.jpg'
import image3 from '../assets/images/12.jpg'
import image4 from '../assets/images/15.jpg'

export default function Carousel2() {
  return (
    <>
      <ReactCarousel showThumbs={false} showIndicators={true}>
        <div>
          <img src={image1} />
          <p className='legend'>Legend 1</p>
        </div>
        <div>
          <img src={image2} />
          <p className='legend'>Legend 2</p>
        </div>
        <div>
          <img src={image3} />
          <p className='legend'>Legend 3</p>
        </div>
      </ReactCarousel>
    </>
  )
}


