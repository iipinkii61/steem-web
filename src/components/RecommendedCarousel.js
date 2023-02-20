import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

import image1 from '../assets/images/1.jpg'
import image2 from '../assets/images/10.jpg'
import image3 from '../assets/images/12.jpg'
import image4 from '../assets/images/15.jpg'

export default function RecommendedCarousel() {
  return (
    <>
      <Carousel showThumbs={false} autoPlay={false} dynamicHeight={true} infiniteLoop={true} showStatus={false} stopOnHover={true}>
        <div className='w-full h-72 flex justify-between'>
          <div className='w-96'>
            <img className="" src={image1}/>
          </div>
          <div className='w-1/2 flex flex-col'>
              <div className='h-52'>1</div>
              <div className='h-52'>2</div>
              <div className='h-52'>3</div>
              <div className='h-52'>4</div>
          </div>
        </div>
        
        
        
        {/* <div className='w-full h-80'>
          <img src={image1}/>
          <div>test</div>
        </div> */}
        {/* <div className='aspect-w-16 aspect-h-9'>
          <img src={image2} />
        </div>
        <div className='aspect-w-16 aspect-h-9'>
          <img src={image3} />
        </div>
        <div className='aspect-w-16 aspect-h-9'>
          <img src={image4} />
        </div> */}
      </Carousel>

    </>
  )
}


