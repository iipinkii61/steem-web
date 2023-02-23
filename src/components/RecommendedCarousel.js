import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

export default function RecommendedCarousel(props) {
  const {title} = props
  return (
    <>
      <div className='pt-5 pb-5'>{title}</div>
      <Carousel showThumbs={false} autoPlay={true} interval={4000} dynamicHeight={true} infiniteLoop={true} showStatus={false} stopOnHover={true} showIndicators={false}>
        {/* start row */}
      <div className=' h-full w-full flex justify-between'>
          {/* start fullimage */}
          <div>
            <img className='w-[600px] h-[337px] object-fill' 
            src="https://cdn.akamai.steamstatic.com/steam/apps/814380/ss_0f7b0f8ed9ffc49aba26f9328caa9a1d59ad60f0.1920x1080.jpg?t=1669076148"/>
          </div>
          {/* end fullimage */}
          {/* start body content */}
          <div className='h-full w-1/2 flex flex-col  justify-between bg-[#0a141d]'>
              <div className='h-1/4 text-left pl-5 pt-4 text-3xl'>Sekiro™: Shadows Die Twice - Game of the Year Edition</div>
              <div className=' flex '>
                <div className='flex justify-center flex-wrap gap-1'>
                  <div className='w-[162px] h-[69px] bg-cover bg-no-repeat bg-[url("https://cdn.akamai.steamstatic.com/steam/apps/814380/ss_2685dd844a2a523b6c7ec207d46a538db6a908cd.600x338.jpg?t=1669076148")] bg-slate-500'></div>
                  <div className='w-[162px] h-[69px] bg-cover bg-no-repeat bg-[url("https://cdn.akamai.steamstatic.com/steam/apps/814380/ss_15f0e9982621aed44900215ad283811af0779b1d.600x338.jpg?t=1669076148")] bg-slate-500'></div>
                  <div className='w-[162px] h-[69px] bg-cover bg-no-repeat bg-[url("https://cdn.akamai.steamstatic.com/steam/apps/814380/ss_1e6f5540866a5564d65df915c22fe1e57e336a6f.600x338.jpg?t=1669076148")] bg-slate-500'></div>
                  <div className='w-[162px] h-[69px] bg-cover bg-no-repeat bg-[url("https://cdn.akamai.steamstatic.com/steam/apps/814380/ss_3d6b38c382c0eafb02dc90d22f33fd292e4e5cf3.600x338.jpg?t=1669076148")] bg-slate-500'></div>
                </div>
              </div>
              <div className='static h-1/4 text-left pl-5 pr-5 pt-4 text-base flex justify-between'>
                <div className='absolute w-fit h-fit text-lg text-gray-200'>Free To Play</div>
              <div className='absolute bottom-10 right-12 text-gray-400 w-fit h-fit'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m3 5.479l7.377-1.016v7.127H3V5.48zm0 13.042l7.377 1.017v-7.04H3v6.023zm8.188 1.125L21 21v-8.502h-9.812v7.148zm0-15.292v7.236H21V3l-9.812 1.354z"/></svg>
              </div>
              <div className='absolute bottom-10 right-5 text-gray-400 w-fit h-fit'>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"><path fill="currentColor" d="M23.934 18.947c-.598 1.324-.884 1.916-1.652 3.086c-1.073 1.634-2.588 3.673-4.461 3.687c-1.666.014-2.096-1.087-4.357-1.069c-2.261.011-2.732 1.089-4.4 1.072c-1.873-.017-3.307-1.854-4.381-3.485c-3.003-4.575-3.32-9.937-1.464-12.79C4.532 7.425 6.61 6.237 8.561 6.237c1.987 0 3.236 1.092 4.879 1.092c1.594 0 2.565-1.095 4.863-1.095c1.738 0 3.576.947 4.889 2.581c-4.296 2.354-3.598 8.49.742 10.132zM16.559 4.408c.836-1.073 1.47-2.587 1.24-4.131c-1.364.093-2.959.964-3.891 2.092c-.844 1.027-1.544 2.553-1.271 4.029c1.488.048 3.028-.839 3.922-1.99z"/></svg>
              </div>
              </div>
          </div>
          {/* end body content */}
      </div>
      {/* end row */}

      {/* start row */}
      <div className=' h-full w-full flex justify-between'>
          {/* start fullimage */}
          <div>
            <img className='w-[600px] h-[337px] object-fill' 
            src="https://cdn.akamai.steamstatic.com/steam/apps/814380/ss_0f7b0f8ed9ffc49aba26f9328caa9a1d59ad60f0.1920x1080.jpg?t=1669076148"/>
          </div>
          {/* end fullimage */}
          {/* start body content */}
          <div className='h-full w-1/2 flex flex-col  justify-between bg-[#0a141d]'>
              <div className='h-1/4 text-left pl-5 pt-4 text-3xl'>Sekiro™: Shadows Die Twice - Game of the Year Edition</div>
              <div className=' flex '>
                <div className='flex justify-center flex-wrap gap-1'>
                  <div className='w-[162px] h-[69px] bg-cover bg-no-repeat bg-[url("https://cdn.akamai.steamstatic.com/steam/apps/814380/ss_2685dd844a2a523b6c7ec207d46a538db6a908cd.600x338.jpg?t=1669076148")] bg-slate-500'></div>
                  <div className='w-[162px] h-[69px] bg-cover bg-no-repeat bg-[url("https://cdn.akamai.steamstatic.com/steam/apps/814380/ss_15f0e9982621aed44900215ad283811af0779b1d.600x338.jpg?t=1669076148")] bg-slate-500'></div>
                  <div className='w-[162px] h-[69px] bg-cover bg-no-repeat bg-[url("https://cdn.akamai.steamstatic.com/steam/apps/814380/ss_1e6f5540866a5564d65df915c22fe1e57e336a6f.600x338.jpg?t=1669076148")] bg-slate-500'></div>
                  <div className='w-[162px] h-[69px] bg-cover bg-no-repeat bg-[url("https://cdn.akamai.steamstatic.com/steam/apps/814380/ss_3d6b38c382c0eafb02dc90d22f33fd292e4e5cf3.600x338.jpg?t=1669076148")] bg-slate-500'></div>
                </div>
              </div>
              <div className='static h-1/4 text-left pl-5 pr-5 pt-4 text-base flex justify-between'>Free To Play
              <div className='absolute bottom-10 right-12 text-gray-400 w-fit h-fit'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m3 5.479l7.377-1.016v7.127H3V5.48zm0 13.042l7.377 1.017v-7.04H3v6.023zm8.188 1.125L21 21v-8.502h-9.812v7.148zm0-15.292v7.236H21V3l-9.812 1.354z"/></svg>
              </div>
              <div className='absolute bottom-10 right-5 text-gray-400 w-fit h-fit'>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"><path fill="currentColor" d="M23.934 18.947c-.598 1.324-.884 1.916-1.652 3.086c-1.073 1.634-2.588 3.673-4.461 3.687c-1.666.014-2.096-1.087-4.357-1.069c-2.261.011-2.732 1.089-4.4 1.072c-1.873-.017-3.307-1.854-4.381-3.485c-3.003-4.575-3.32-9.937-1.464-12.79C4.532 7.425 6.61 6.237 8.561 6.237c1.987 0 3.236 1.092 4.879 1.092c1.594 0 2.565-1.095 4.863-1.095c1.738 0 3.576.947 4.889 2.581c-4.296 2.354-3.598 8.49.742 10.132zM16.559 4.408c.836-1.073 1.47-2.587 1.24-4.131c-1.364.093-2.959.964-3.891 2.092c-.844 1.027-1.544 2.553-1.271 4.029c1.488.048 3.028-.839 3.922-1.99z"/></svg>
              </div>
              </div>
          </div>
          {/* end body content */}
      </div>
      {/* end row */}
      </Carousel>

    </>
  )
}


