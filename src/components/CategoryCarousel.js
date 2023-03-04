import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { useNavigate } from "react-router-dom";
import BoxCategoryCarousel from './category/BoxCategoryCarousel';


export default function CategoryCarousel(props) {
  const {title} = props
  const navigate = useNavigate();
  const handleClick = (genres) => {
    navigate(
      "/category/" + genres
    );
  };
  // console.log("genres",gameInfo?.[0]?.genres?.[0]?.description);
  return (
    <>
      <div className='pt-5 pb-5'>{title}</div>
      <Carousel showThumbs={false} autoPlay={false} dynamicHeight={true} infiniteLoop={true} showStatus={false} stopOnHover={true} showIndicators={false}>
      <div className='flex gap-2'>
        <BoxCategoryCarousel onClick={()=>handleClick("Action")} title="Action" color="red" image="https://store.steampowered.com/categories/homepageimage/category/action?cc=us&l=english" />
        <BoxCategoryCarousel onClick={()=>handleClick("Adventure")} title="Adventure" color="blue" image="https://store.steampowered.com/categories/homepageimage/category/adventure?cc=us&l=english" />
        <BoxCategoryCarousel onClick={()=>handleClick("RPG")} title="RPG" color="yellow" image="https://store.steampowered.com/categories/homepageimage/category/rpg?cc=us&l=english" />
        <BoxCategoryCarousel onClick={()=>handleClick("Casual")} title="Casual" color="cyan" image="https://store.steampowered.com/categories/homepageimage/category/casual?cc=us&l=english" />
      </div>

      <div className=' h-56 w-full flex gap-2'>
        <div className='h-full w-1/4 bg-[#0a141d]' onClick={()=>handleClick("Simulation")}>Simulation</div>
        <div className='h-full w-1/4 bg-[#0a141d]' onClick={()=>handleClick("Sports")}>Sports</div>
        <div className='h-full w-1/4 bg-[#0a141d]' onClick={()=>handleClick("Multiplayer")}>Multiplayer</div>
        <div className='h-full w-1/4 bg-[#0a141d]' onClick={()=>handleClick("Singleplayer")}>Singleplayer</div>
      </div>
      </Carousel>
    </>
  )
}