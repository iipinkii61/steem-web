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
  return (
    <>
      <div className='pt-5 pb-5'>{title}</div>
      <Carousel showThumbs={false} autoPlay={true} dynamicHeight={true} infiniteLoop={true} showStatus={false} stopOnHover={true} showIndicators={false}>
      <div className='flex gap-2'>
        <BoxCategoryCarousel onClick={()=>handleClick("Action")} title="Action" color="from-red-800" image="https://store.steampowered.com/categories/homepageimage/category/action?cc=us&l=english" />
        <BoxCategoryCarousel onClick={()=>handleClick("Adventure")} title="Adventure" color="from-blue-800" image="https://store.steampowered.com/categories/homepageimage/category/adventure?cc=us&l=english" />
        <BoxCategoryCarousel onClick={()=>handleClick("RPG")} title="RPG" color="from-yellow-800" image="https://store.steampowered.com/categories/homepageimage/category/rpg?cc=us&l=english" />
        <BoxCategoryCarousel onClick={()=>handleClick("Casual")} title="Casual" color="from-cyan-800" image="https://store.steampowered.com/categories/homepageimage/category/casual?cc=us&l=english" />
      </div>

      <div className=' h-56 w-full flex gap-2'>
        <BoxCategoryCarousel onClick={()=>handleClick("Simulation")} title="Simulation" color="from-green-800" image="https://store.steampowered.com/categories/homepageimage/category/simulation?cc=us&l=english" />
        <BoxCategoryCarousel onClick={()=>handleClick("Sports")} title="Sports" color="from-purple-800" image="https://store.steampowered.com/categories/homepageimage/category/sports?cc=us&l=english" />
        <BoxCategoryCarousel onClick={()=>handleClick("Strategy")} title="Strategy" color="from-pink-800" image="https://store.steampowered.com/categories/homepageimage/category/strategy?cc=us&l=english" />
        <BoxCategoryCarousel onClick={()=>handleClick("Horror")} title="Horror" color="from-gray-800" image="https://store.steampowered.com/categories/homepageimage/category/horror?cc=us&l=english" />

      </div>
      </Carousel>
    </>
  )
}