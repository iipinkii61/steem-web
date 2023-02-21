import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

import image1 from '../assets/images/5.jpg'
import image2 from '../assets/images/9.jpg'

export default function SpecialOffersCarousel(props) {
  const {title} = props
  return (
    <>
      <div className='pt-5 pb-5'>{title}</div>
      <Carousel showThumbs={false} autoPlay={false} dynamicHeight={true} infiniteLoop={true} showStatus={false} stopOnHover={true}>
      <div className=' h-full w-full flex gap-1 bg-[#0a141d]'>
        <div className='w-1/2 h-80 flex flex-col justify-between'>
          <div className=' bg-contain bg-center'>
            <img src={image1}/>
            </div>
        </div>
          <div className='w-1/6 bg-[radial-gradient(at_left_top,_#19587b,_#1c6a90,_#267fa7)]'>
            <div className='text-left pl-2 text-base font-medium'>Name Game</div>
            <div className='text-left text-sm pl-2 font-thin relative'>
              description
              <div className='absolute h-8 w-24 mt-32 pt-1  text-center font-extrabold text-[#98d21a] bg-greenButton'>Up to -90%</div>
              </div>
          </div>
        
          <div className='w-1/2 h-80 flex flex-col justify-between'>
          <div className=' bg-contain bg-center'>
            <img src={image2}/>
            </div>
        </div>
          <div className='w-1/6 bg-[radial-gradient(at_left_top,_#19587b,_#1c6a90,_#267fa7)]'>
            <div className='text-left pl-2 text-base font-medium'>Name Game</div>
            <div className='text-left pl-2 text-sm font-thin relative'>
              description
              <div className='absolute h-8 w-24 mt-32 pt-1 text-center font-extrabold text-[#98d21a] bg-greenButton'>Up to -90%</div>
              </div>
          </div>
      </div>

      <div className=' h-full w-full flex gap-1 bg-[#0a141d]'>
        <div className='w-1/2 h-80 flex flex-col justify-between'>
          <div className=' bg-contain bg-center'>
            <img src={image1}/>
            </div>
        </div>
          <div className='w-1/6 bg-[radial-gradient(at_left_top,_#19587b,_#1c6a90,_#267fa7)]'>
            <div className='text-left pl-2 text-base font-medium'>Name Game</div>
            <div className='text-left text-sm pl-2 font-thin relative'>
              description
              <div className='absolute h-8 w-24 mt-32 pt-1  text-center font-extrabold text-[#98d21a] bg-greenButton'>Up to -90%</div>
              </div>
          </div>
        
          <div className='w-1/2 h-80 flex flex-col justify-between'>
          <div className=' bg-contain bg-center'>
            <img src={image2}/>
            </div>
        </div>
          <div className='w-1/6 bg-[radial-gradient(at_left_top,_#19587b,_#1c6a90,_#267fa7)]'>
            <div className='text-left pl-2 text-base font-medium'>Name Game</div>
            <div className='text-left pl-2 text-sm font-thin relative'>
              description
              <div className='absolute h-8 w-24 mt-32 pt-1 text-center font-extrabold text-[#98d21a] bg-greenButton'>Up to -90%</div>
              </div>
          </div>
      </div>
      </Carousel>

    </>
  )
}