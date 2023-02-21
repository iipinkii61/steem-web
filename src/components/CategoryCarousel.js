import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

import image1 from '../assets/images/5.jpg'
import image2 from '../assets/images/9.jpg'

export default function CategoryCarousel(props) {
  const {title} = props
  return (
    <>
      <div className='pt-5 pb-5'>{title}</div>
      <Carousel showThumbs={false} autoPlay={false} dynamicHeight={true} infiniteLoop={true} showStatus={false} stopOnHover={true} showIndicators={false}>
      <div className=' h-56 w-full flex gap-2'>
        <div className='h-full w-1/4 bg-[#0a141d]'>Action</div>
        <div className='h-full w-1/4 bg-[#0a141d]'>Openworld</div>
        <div className='h-full w-1/4 bg-[#0a141d]'>Adventure</div>
        <div className='h-full w-1/4 bg-[#0a141d]'>racing</div>
      </div>

      <div className=' h-56 w-full flex gap-2'>
        <div className='h-full w-1/4 bg-[#0a141d]'>Fighting</div>
        <div className='h-full w-1/4 bg-[#0a141d]'>Co-op</div>
        <div className='h-full w-1/4 bg-[#0a141d]'>Survival</div>
        <div className='h-full w-1/4 bg-[#0a141d]'>Strategy</div>
      </div>
      </Carousel>
    </>
  )
}