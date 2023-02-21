import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

import image1 from '../assets/images/5.jpg'
import image2 from '../assets/images/9.jpg'

export default function CategoryCarousel(props) {
  const {title} = props
  return (
    <>
      <div className='pt-5 pb-5'>{title}</div>
      <Carousel showThumbs={false} autoPlay={false} dynamicHeight={true} infiniteLoop={true} showStatus={false} stopOnHover={true}>
      <div className=' h-full w-full flex gap-3 bg-[#0a141d]'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      
      </Carousel>

    </>
  )
}