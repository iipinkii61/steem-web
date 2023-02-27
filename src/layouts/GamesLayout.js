import useShowGame from "../hooks/useShowGame";
import { useRef, useEffect } from "react";

export default function GamesLayout() {
  const showGame = useShowGame();

  const videoRef = useRef(null);
  useEffect(() => {
    videoRef.current.load();
  }, [showGame]);

  return (
    <>
      <div className="pt-5 pb-5 text-3xl">
        {Object.keys(showGame).length && showGame?.name}
      </div>
      <div className="h-[445px] flex justify-between bg-[#151f29]">
        <div className="w-[600px] h-[337px] flex flex-col">
          {/* <video
           
            className="w-full shadow-lg"
           
            src={
              Object.keys(showGame).length ? showGame.movies[0].mp4["480"] : ""
            }
            controls
           
            autoPlay
            loop
            muted
          /> */}

          <video
            ref={videoRef}
            className="w-full shadow-lg"
            autoPlay
           
            controls
            loop
           
            muted
          
          >
            <source
              src={
                Object.keys(showGame).length
                  ? showGame.movies[0].mp4["480"]
                  : ""
              }
              type="video/mp4"
           
            />
          </video>

          <div className="flex gap-1 mt-3">
            {/*--------test--------*/}

            {Object.keys(showGame).length &&
              showGame.screenshots.map((el) => (
                <div className=" w-1/4" key={el.id}>
                  <img
                    className="w-full h-full object-cover"
                    src={el.path_thumbnail}
                    // key={el.id}
                  />
                </div>
              ))}

            {/*--------test--------*/}

            {/* <div className=" w-1/4">
              <img
                className="w-full h-full object-cover"
                src="https://cdn.akamai.steamstatic.com/steam/apps/990080/ss_94058497bf0f8fabdde17ee8d59bece609a60663.600x338.jpg?t=1676412613"
              />
            </div>
            <div className=" w-1/4">
              <img
                className="w-full h-full object-cover"
                src="https://cdn.akamai.steamstatic.com/steam/apps/990080/ss_8e08976236d29b1897769257ac3c64e9264792a5.1920x1080.jpg?t=1676412613"
              />
            </div>
            <div className=" w-1/4">
              <img
                className="w-full h-full object-cover"
                src="https://cdn.akamai.steamstatic.com/steam/apps/990080/ss_d4930d675af053dc1e61a876a34fc003e85e261f.1920x1080.jpg?t=1676412613"
              />
            </div>
            <div className=" w-1/4">
              <img
                className="w-full h-full object-cover"
                src="https://cdn.akamai.steamstatic.com/steam/apps/990080/ss_df93b5e8a183f7232d68be94ae78920a90de1443.1920x1080.jpg?t=1676412613"
              />
            </div> */}
          </div>
        </div>
        <div className="w-[340px] h-[337px] ml-3">
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
        <span className="w-fit h-fit p-2">
          
          This product is in your discovery queue because it is popular.
        
        </span>
        <button className="w-[160px] h-[30px] ml-5 rounded-sm bg-[#274155] hover:bg-cyan-600 text-blueText hover:text-gray-200">
            Add to your wishlist
        </button>
      </div>
      {/*end container Add to your wishlist */}
      <br />
      {/* container Add to cart */}
      <div className="h-[80px] relative rounded-md text-gray-400 bg-[radial-gradient(at_right_top,_#566573,_#475664,_#2d3d4a)]">
        <div className="text-white text-2xl font-medium pl-5 pt-2">
          Buy Hogwarts Legacy
          <div className="absolute bottom-10 right-10 text-gray-100 w-fit h-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m3 5.479l7.377-1.016v7.127H3V5.48zm0 13.042l7.377 1.017v-7.04H3v6.023zm8.188 1.125L21 21v-8.502h-9.812v7.148zm0-15.292v7.236H21V3l-9.812 1.354z"
              />
            </svg>
          </div>
          Buy Hogwarts Legacy
          <div className="absolute bottom-10 right-10 text-gray-100 w-fit h-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m3 5.479l7.377-1.016v7.127H3V5.48zm0 13.042l7.377 1.017v-7.04H3v6.023zm8.188 1.125L21 21v-8.502h-9.812v7.148zm0-15.292v7.236H21V3l-9.812 1.354z"
              />
            </svg>
          </div>
        </div>
        <div className="absolute -bottom-5 right-5 w-[206px] h-[40px] bg-black">
          <div className="text-gray-300 font-thin pl-2 pt-2">
            {Object.keys(showGame).length &&
              (!showGame.is_free
                ? showGame?.price_overview?.final_formatted
                : null)}
          </div>
          <button
            className="absolute p-2 px-5 text-[#ceeca5] right-1 bottom-1 text-xs rounded-sm bg-[radial-gradient(at_left_top,_#78b32b,_#60941b,_#588a1b)]
          hover:bg-[radial-gradient(at_left_top,_#78b32b,_#8bd32a,_#588a1b)] hover:text-white"
          >
            {Object.keys(showGame).length &&
              (!showGame.is_free ? "Add to cart" : "Play game")}
          </button>
        </div>
      </div>
      {/* end container Add to cart */}
      <br  />
      {/* ABOUT THIS GAME */}
      <div className="w-full text-gray-100">ABOUT THIS GAME</div>
      <hr className="text-blue-600" />
      <div className="w-full text-gray-100">ABOUT THIS GAME</div>
      <hr className="text-blue-600" />
      <div className="text-gray-300 ">
        Hogwarts Legacy is an open-world action RPG set in the world first
        introduced in the Harry Potter books. Embark on a journey through
        familiar and new locations as you explore and discover magical beasts,
        customize your character and craft potions, master spell casting,
        upgrade talents and become the wizard you want to be.
        <div className="w-full mt-5 flex justify-center">
          <img src="https://cdn.akamai.steamstatic.com/steam/apps/990080/extras/HWL_Featured_Animation.png?t=1676412613" />
        </div>
        <div className="mx-auto flex justify-center mt-5">
          <img src="https://cdn.akamai.steamstatic.com/steam/apps/990080/extras/HWL_Features_600_Transparency.png?t=1676412613" />
        </div>
        Experience Hogwarts in the 1800s. Your character is a student who holds
        the key to an ancient secret that threatens to tear the wizarding world
        apart. Make allies, battle Dark wizards, and ultimately decide the fate
        of the wizarding world. Your legacy is what you make of it. Live the
        Unwritten.
      </div>
      {/* end ABOUT THIS GAME */}
      
      {/* SYSTEM REQUIREMENTS */}
      <div className="w-full text-gray-100">SYSTEM REQUIREMENTS</div>
      <hr className="text-blue-600" />
      <div className="text-gray-300 flex justify-between w-full h-[250px]">
        <div className="w-1/2 bg-[#16202d4a] pl-2">
          <span className="text-xs">MINIMUM:</span><br/>
          <span className="text-sm font-thin">Requires a 64-bit processor and operating system</span><br/>
          <span className="text-xs text-gray-500 mr-2">OS:</span>
          <span className="text-sm text-gray-300 font-thin">64-bit Windows 10</span><br/>
          <span className="text-xs text-gray-500 mr-2">Processor:</span>
          <span className="text-sm text-gray-300 font-thin">Intel Core i5-6600 (3.3Ghz) or AMD Ryzen 5 1400 (3.2Ghz)</span><br/>
          <span className="text-xs text-gray-500 mr-2">Memory:</span>
          <span className="text-sm text-gray-300 font-thin">16 GB RAM</span><br/>
          <span className="text-xs text-gray-500 mr-2">Graphics:</span>
          <span className="text-sm text-gray-300 font-thin">NVIDIA GeForce GTX 960 4GB or AMD Radeon RX 470 4GB</span><br/>
          <span className="text-xs text-gray-500 mr-2">DirectX:</span>
          <span className="text-sm text-gray-300 font-thin">Version 12</span><br/>
          <span className="text-xs text-gray-500 mr-2">Storage:</span>
          <span className="text-sm text-gray-300 font-thin">85 GB available space</span><br/>
          <span className="text-xs text-gray-500 mr-2">Additional Notes:</span>
          <span className="text-sm text-gray-300 font-thin">SSD (Preferred), HDD (Supported), 720p/30 fps, Low Quality Settings</span><br/>
        </div>

        <div className="w-1/2 bg-[#16202d4a] pl-2">
        <span className="text-xs">RECOMMENDED:</span><br/>
          <span className="text-sm font-thin">Requires a 64-bit processor and operating system</span><br/>
          <span className="text-xs text-gray-500 mr-2">OS:</span>
          <span className="text-sm text-gray-300 font-thin">64-bit Windows 10</span><br/>
          <span className="text-xs text-gray-500 mr-2">Processor:</span>
          <span className="text-sm text-gray-300 font-thin">Intel Core i7-8700 (3.2Ghz) or AMD Ryzen 5 3600 (3.6 Ghz)</span><br/>
          <span className="text-xs text-gray-500 mr-2">Memory:</span>
          <span className="text-sm text-gray-300 font-thin">16 GB RAM</span><br/>
          <span className="text-xs text-gray-500 mr-2">Graphics:</span>
          <span className="text-sm text-gray-300 font-thin">NVIDIA GeForce 1080 Ti or AMD Radeon RX 5700 XT</span><br/>
          <span className="text-xs text-gray-500 mr-2">DirectX:</span>
          <span className="text-sm text-gray-300 font-thin">Version 12</span><br/>
          <span className="text-xs text-gray-500 mr-2">Storage:</span>
          <span className="text-sm text-gray-300 font-thin">85 GB available space</span><br/>
          <span className="text-xs text-gray-500 mr-2">Additional Notes:</span>
          <span className="text-sm text-gray-300 font-thin">SSD, 1080p/60 fps, High Quality Settings</span><br/>
        </div>
      </div>
      {/* end SYSTEM REQUIREMENTS */}
      <br/>
      {/* REVIEWS */}
      <div className="w-full text-gray-100">MOST HELPFUL REVIEWS</div>
      <hr className="text-blue-600" />
      {/* row reviews */}
      <div className="flex h-auto w-auto bg-[#16202d]">
        <div className="flex w-1/2 p-3">
          <div className="flex w-fit">
          <div className="h-[34px] w-[34px]">
            <img className="h-full w-full" src="https://avatars.akamai.steamstatic.com/88e5480683bfc1be2eba70b25b2a5690f498d803.jpg"/>
          </div>
          <div className="flex flex-col">
          <span className="pl-2 text-gray-500 font-bold text-sm">ZzzoO</span> {/*persona_name*/}
          <span className="pl-2 text-gray-500 font-semibold text-xs">158 products in account</span> {/*num_owned_games*/}
          </div>
          </div>
        </div>
        <div className="flex flex-col w-full bg-[#16202d]">
          <div className="flex bg-[#121a24]">
          <div className="h-[40px] w-[40px]">
            <img className="w-full h-full bg-cover" src="https://store.akamai.steamstatic.com/public/shared/images/userreviews/icon_thumbsUp_v6.png"/>
          </div>
          </div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
      {/* end row reviews */}
      {/* end REVIEWS */}
    </>
  );
}

