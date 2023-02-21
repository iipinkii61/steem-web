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
      <div className=' h-full w-full flex justify-between'>
          <div className='w-1/2'>
            <img className="" src={image1}/>
          </div>
          <div className='h-full w-1/2 flex flex-col  justify-between bg-[#0a141d]'>
              <div className='h-1/4 text-left pl-5 pt-7 text-3xl'>Name game</div>
              <div className=' flex '>
                <div className='flex justify-center flex-wrap gap-1 row-auto w-full'>
                  <div className='w-[162px] h-[69px] bg-slate-500'>image</div>
                  <div className='w-[162px] h-[69px] bg-slate-500'>image</div>
                  <div className='w-[162px] h-[69px] bg-slate-500'>image</div>
                  <div className='w-[162px] h-[69px] bg-slate-500'>image</div>
                  <div className='w-[162px] h-[69px] bg-slate-500'>image</div>
                  <div className='w-[162px] h-[69px] bg-slate-500'>image</div>
                </div>
              </div>
              <div className='h-1/4 text-left pl-5 pt-7 text-base'>price</div>
          </div>
      </div>

      <div className=' h-full w-full flex justify-between'>
          <div className='w-1/2'>
            <img className="" src={image2}/>
          </div>
          <div className='h-full w-1/2 flex flex-col  justify-between bg-[#0a141d]'>
              <div className='h-1/4 text-left pl-5 pt-7 text-3xl'>Name game</div>
              <div className=' flex '>
                <div className='flex justify-center flex-wrap gap-1 row-auto w-full'>
                  <div className='w-[162px] h-[69px] bg-slate-500'>image</div>
                  <div className='w-[162px] h-[69px] bg-slate-500'>image</div>
                  <div className='w-[162px] h-[69px] bg-slate-500'>image</div>
                  <div className='w-[162px] h-[69px] bg-slate-500'>image</div>
                  <div className='w-[162px] h-[69px] bg-slate-500'>image</div>
                  <div className='w-[162px] h-[69px] bg-slate-500'>image</div>
                </div>
              </div>
              <div className='h-1/4 text-left pl-5 pt-7 text-base'>price</div>
          </div>
      </div>

      <div className=' h-full w-full flex justify-between'>
          <div className='w-1/2'>
            <img className="" src={image3}/>
          </div>
          <div className='h-full w-1/2 flex flex-col  justify-between bg-[#0a141d]'>
              <div className='h-1/4 text-left pl-5 pt-7 text-3xl'>Name game</div>
              <div className=' flex '>
                <div className='flex justify-center flex-wrap gap-1 row-auto w-full'>
                  <div className='w-[162px] h-[69px] bg-slate-500'>image</div>
                  <div className='w-[162px] h-[69px] bg-slate-500'>image</div>
                  <div className='w-[162px] h-[69px] bg-slate-500'>image</div>
                  <div className='w-[162px] h-[69px] bg-slate-500'>image</div>
                  <div className='w-[162px] h-[69px] bg-slate-500'>image</div>
                  <div className='w-[162px] h-[69px] bg-slate-500'>image</div>
                </div>
              </div>
              <div className='h-1/4 text-left pl-5 pt-7 text-base'>price</div>
          </div>
      </div>

      <div className=' h-full w-full flex justify-between'>
          <div className='w-1/2'>
            <img className="" src={image4}/>
          </div>
          <div className='h-full w-1/2 flex flex-col  justify-between bg-[#0a141d]'>
              <div className='h-1/4 text-left pl-5 pt-7 text-3xl'>Name game</div>
              <div className=' flex '>
                <div className='flex justify-center flex-wrap gap-1 row-auto w-full'>
                  <div className='w-[162px] h-[69px] bg-slate-500'>image</div>
                  <div className='w-[162px] h-[69px] bg-slate-500'>image</div>
                  <div className='w-[162px] h-[69px] bg-slate-500'>image</div>
                  <div className='w-[162px] h-[69px] bg-slate-500'>image</div>
                  <div className='w-[162px] h-[69px] bg-slate-500'>image</div>
                  <div className='w-[162px] h-[69px] bg-slate-500'>image</div>
                </div>
              </div>
              <div className='h-1/4 text-left pl-5 pt-7 text-base'>price</div>
          </div>
      </div>

        
      </Carousel>

    </>
  )
}


