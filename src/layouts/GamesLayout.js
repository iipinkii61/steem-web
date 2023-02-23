import React from "react";

export default function GamesLayout() {
  return (
    <>
      <div className="pt-5 pb-5 text-3xl">Hogwarts Legacy</div>
      <div className="h-[445px] flex justify-between flex-wrap bg-[#151f29]">
        <div className="w-[600px] h-[337px] flex flex-col">
          <video className="w-full shadow-lg" loop="true" autoplay="autoplay" controls muted>
            <source
              src="https://cdn.akamai.steamstatic.com/steam/apps/256930504/movie480_vp9.webm?t=1676412591"
              type="video/mp4" />
          </video>
          <div className="flex gap-1 mt-3">
          <div className=" w-1/4">
            <img className='w-full h-full object-cover' src="https://cdn.akamai.steamstatic.com/steam/apps/990080/ss_94058497bf0f8fabdde17ee8d59bece609a60663.600x338.jpg?t=1676412613" />
          </div>
          <div className=" w-1/4">
            <img className='w-full h-full object-cover' src="https://cdn.akamai.steamstatic.com/steam/apps/990080/ss_8e08976236d29b1897769257ac3c64e9264792a5.1920x1080.jpg?t=1676412613" />
          </div>
          <div className=" w-1/4">
            <img className='w-full h-full object-cover' src="https://cdn.akamai.steamstatic.com/steam/apps/990080/ss_d4930d675af053dc1e61a876a34fc003e85e261f.1920x1080.jpg?t=1676412613" />
          </div>
          <div className=" w-1/4">
            <img className='w-full h-full object-cover' src="https://cdn.akamai.steamstatic.com/steam/apps/990080/ss_df93b5e8a183f7232d68be94ae78920a90de1443.1920x1080.jpg?t=1676412613" />
          </div>
          </div>
        </div>
        <div className="w-[340px] h-[337px]">
          <div className="mb-2">
            <img src="https://cdn.akamai.steamstatic.com/steam/apps/990080/header.jpg?t=1676412613" />
          </div>
          <div className="text-xs font-semibold text-gray-400 p-1">
            <span>
              Hogwarts Legacy is an immersive, open-world action RPG. Now you
              can take control of the action and be at the center of your own
              adventure in the wizarding world.
            </span>
          </div>
          <table className="mt-5">
            <tbody className="text-xs">
              <tr>
                <td className="pr-2 text-gray-500">RELEASE DATE:</td>
                <td>11 Feb, 2023</td>
              </tr>
              <br />
              <tr>
                <td className="pr-2 text-gray-500">RELEASE DATE:</td>
                <td className="text-[#4e8fb7]">11 Feb, 2023</td>
              </tr>
              <tr>
                <td className="pr-2 text-gray-500">DEVELOPER:</td>
                <td className="text-[#4e8fb7]">Avalanche Software</td>
              </tr>
              <tr>
                <td className="pr-2 text-gray-500">PUBLISHER:</td>
                <td className="text-[#4e8fb7]">Warner Bros. Games</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* container Add to your wishlist */}
      <div className="h-[80px] flex flex-col text-gray-400 bg-[radial-gradient(at_left_top,_#1f2d3b,_#1a2531,_#16202d)]">
        <span className="w-fit h-fit p-2">This product is in your discovery queue because it is popular.</span>
        <button className="w-[160px] h-[30px] ml-5 rounded-sm bg-[#274155] hover:bg-cyan-600 text-blueText hover:text-gray-200">
        Add to your wishlist
        </button>
      </div>
      {/*end container Add to your wishlist */}
      <br/>
      {/* container Add to cart */}
      <div className="h-[80px] relative rounded-md text-gray-400 bg-[radial-gradient(at_right_top,_#566573,_#475664,_#2d3d4a)]">
        <div className="text-white text-2xl font-medium pl-5 pt-2">
        Buy Hogwarts Legacy
              <div className='absolute bottom-10 right-10 text-gray-100 w-fit h-fit'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m3 5.479l7.377-1.016v7.127H3V5.48zm0 13.042l7.377 1.017v-7.04H3v6.023zm8.188 1.125L21 21v-8.502h-9.812v7.148zm0-15.292v7.236H21V3l-9.812 1.354z"/></svg>
              </div>
        </div>
        <div className="absolute -bottom-5 right-5 w-[206px] h-[40px] bg-black">
          <div className="text-gray-300 font-thin pl-2 pt-2">
							฿1,590.00						
          </div>
          <button className="absolute p-2 px-5 text-[#ceeca5] right-1 bottom-1 text-xs rounded-sm bg-[radial-gradient(at_left_top,_#78b32b,_#60941b,_#588a1b)] 
          hover:bg-[radial-gradient(at_left_top,_#78b32b,_#8bd32a,_#588a1b)] hover:text-white">
              Add to cart
          </button>
        </div>
      </div>
      {/* end container Add to cart */}
      <br/>
      {/* ABOUT THIS GAME */}
      <div className="w-full text-gray-100">
      ABOUT THIS GAME
      </div>
      <hr className="text-blue-600"/>
      <div className="text-gray-300 ">
      Hogwarts Legacy is an open-world action RPG set in the world first introduced in the Harry Potter books. Embark on a journey through familiar and new locations as you explore and discover magical beasts, customize your character and craft potions, master spell casting, upgrade talents and become the wizard you want to be.
      <div className="w-full mt-5 flex justify-center">
      <img src="https://cdn.akamai.steamstatic.com/steam/apps/990080/extras/HWL_Featured_Animation.png?t=1676412613"/>
      </div>
      <div className="mx-auto flex justify-center mt-5">
      <img src="https://cdn.akamai.steamstatic.com/steam/apps/990080/extras/HWL_Features_600_Transparency.png?t=1676412613"/>
      </div>


Experience Hogwarts in the 1800s. Your character is a student who holds the key to an ancient secret that threatens to tear the wizarding world apart. Make allies, battle Dark wizards, and ultimately decide the fate of the wizarding world. Your legacy is what you make of it. Live the Unwritten.




      </div>
      {/* end ABOUT THIS GAME */}
    </>
  );
}
