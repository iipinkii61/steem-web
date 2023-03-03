import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";
import useGameInfo from "../hooks/useGameInfo";

export default function SpecialOffersCarousel(props) {
  const { title } = props;
  const gameInfo = useGameInfo();
  // console.log(gameInfo);
  const navigate = useNavigate();

  const handleClick = (el) => {
    navigate(
      "/app/" + el?.steam_appid + "/" + el?.name.replace(/[\W_]+/g, "_"),
    );
  };
  return (
    <>
      <div className="pt-5 pb-5">{title}</div>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        interval={5000}
        dynamicHeight={true}
        infiniteLoop={true}
        showStatus={false}
        stopOnHover={true}
        showIndicators={false}
      >
        <div className="w-full h-[460px] flex justify-evenly ">
          {/* start content 1 */}
          <div>
            <div className="w-[306px] h-[350px] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://cdn.akamai.steamstatic.com/steam/apps/814380/ss_2685dd844a2a523b6c7ec207d46a538db6a908cd.600x338.jpg?t=1669076148"
              />
            </div>
            <div className=" absolute w-[306px] h-[113px] bottom-[110px] bg-[radial-gradient(at_left_top,_#19587b,_#1c6a90,_#267fa7)]">
              <div className="text-left pl-2 pt-2 text-base font-medium">
                Midweek Madness
              </div>
              <div className="text-left text-xs pl-2 font-thin relative">
                Offer ends 28 Feb @ 1:00am.
                <div className="absolute h-[34px] w-[76px] top-10 left-[144px] px-2 font-extrabold text-2xl text-[#98d21a] bg-[#4c6b22]">
                  -90%
                </div>
                <div className="absolute h-[34px] w-[76px] top-10 left-[220px] pr-2 pt-2 font-extralight text-base text-right text-[#98d21a] bg-[#344654]">
                  144.50
                </div>
              </div>
            </div>
          </div>
          {/* end content 1 */}
          {/* start content 2 */}
          <div>
            <div className="w-[306px] h-[350px] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://cdn.akamai.steamstatic.com/steam/apps/814380/ss_2685dd844a2a523b6c7ec207d46a538db6a908cd.600x338.jpg?t=1669076148"
              />
            </div>
            <div className=" absolute w-[306px] h-[113px] bottom-[110px] bg-[radial-gradient(at_left_top,_#19587b,_#1c6a90,_#267fa7)]">
              <div className="text-left pl-2 pt-2 text-base font-medium">
                Midweek Madness
              </div>
              <div className="text-left text-xs pl-2 font-thin relative">
                Offer ends 28 Feb @ 1:00am.
                <div className="absolute h-[34px] w-[76px] top-10 left-[144px] px-2 font-extrabold text-2xl text-[#98d21a] bg-[#4c6b22]">
                  -90%
                </div>
                <div className="absolute h-[34px] w-[76px] top-10 left-[220px] pr-2 pt-2 font-extralight text-base text-right text-[#98d21a] bg-[#344654]">
                  144.50
                </div>
              </div>
            </div>
          </div>
          {/* end content 2 */}
          {/* start content 3 */}
          <div>
            <div className="w-[306px] h-[350px] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://cdn.akamai.steamstatic.com/steam/apps/814380/ss_2685dd844a2a523b6c7ec207d46a538db6a908cd.600x338.jpg?t=1669076148"
              />
            </div>
            <div className=" absolute w-[306px] h-[113px] bottom-[110px] bg-[radial-gradient(at_left_top,_#19587b,_#1c6a90,_#267fa7)]">
              <div className="text-left pl-2 pt-2 text-base font-medium">
                Midweek Madness
              </div>
              <div className="text-left text-xs pl-2 font-thin relative">
                Offer ends 28 Feb @ 1:00am.
                <div className="absolute h-[34px] w-[76px] top-10 left-[144px] px-2 font-extrabold text-2xl text-[#98d21a] bg-[#4c6b22]">
                  -90%
                </div>
                <div className="absolute h-[34px] w-[76px] top-10 left-[220px] pr-2 pt-2 font-extralight text-base text-right text-[#98d21a] bg-[#344654]">
                  144.50
                </div>
              </div>
            </div>
          </div>
          {/* end content 3 */}
        </div>

        <div className="w-full h-[460px] flex justify-evenly ">
          {/* start content 1 */}
          <div>
            <div className="w-[306px] h-[350px] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://cdn.akamai.steamstatic.com/steam/apps/814380/ss_2685dd844a2a523b6c7ec207d46a538db6a908cd.600x338.jpg?t=1669076148"
              />
            </div>
            <div className=" absolute w-[306px] h-[113px] bottom-[110px] bg-[radial-gradient(at_left_top,_#19587b,_#1c6a90,_#267fa7)]">
              <div className="text-left pl-2 pt-2 text-base font-medium">
                Midweek Madness
              </div>
              <div className="text-left text-xs pl-2 font-thin relative">
                Offer ends 28 Feb @ 1:00am.
                <div className="absolute h-[34px] w-[76px] top-10 left-[144px] px-2 font-extrabold text-2xl text-[#98d21a] bg-[#4c6b22]">
                  -90%
                </div>
                <div className="absolute h-[34px] w-[76px] top-10 left-[220px] pr-2 pt-2 font-extralight text-base text-right text-[#98d21a] bg-[#344654]">
                  144.50
                </div>
              </div>
            </div>
          </div>
          {/* end content 1 */}
          {/* start content 2 */}
          <div>
            <div className="w-[306px] h-[350px] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://cdn.akamai.steamstatic.com/steam/apps/814380/ss_2685dd844a2a523b6c7ec207d46a538db6a908cd.600x338.jpg?t=1669076148"
              />
            </div>
            <div className=" absolute w-[306px] h-[113px] bottom-[110px] bg-[radial-gradient(at_left_top,_#19587b,_#1c6a90,_#267fa7)]">
              <div className="text-left pl-2 pt-2 text-base font-medium">
                Midweek Madness
              </div>
              <div className="text-left text-xs pl-2 font-thin relative">
                Offer ends 28 Feb @ 1:00am.
                <div className="absolute h-[34px] w-[76px] top-10 left-[144px] px-2 font-extrabold text-2xl text-[#98d21a] bg-[#4c6b22]">
                  -90%
                </div>
                <div className="absolute h-[34px] w-[76px] top-10 left-[220px] pr-2 pt-2 font-extralight text-base text-right text-[#98d21a] bg-[#344654]">
                  144.50
                </div>
              </div>
            </div>
          </div>
          {/* end content 2 */}
          {/* start content 3 */}
          <div>
            <div className="w-[306px] h-[350px] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://cdn.akamai.steamstatic.com/steam/apps/814380/ss_2685dd844a2a523b6c7ec207d46a538db6a908cd.600x338.jpg?t=1669076148"
              />
            </div>
            <div className=" absolute w-[306px] h-[113px] bottom-[110px] bg-[radial-gradient(at_left_top,_#19587b,_#1c6a90,_#267fa7)]">
              <div className="text-left pl-2 pt-2 text-base font-medium">
                Midweek Madness
              </div>
              <div className="text-left text-xs pl-2 font-thin relative">
                Offer ends 28 Feb @ 1:00am.
                <div className="absolute h-[34px] w-[76px] top-10 left-[144px] px-2 font-extrabold text-2xl text-[#98d21a] bg-[#4c6b22]">
                  -90%
                </div>
                <div className="absolute h-[34px] w-[76px] top-10 left-[220px] pr-2 pt-2 font-extralight text-base text-right text-[#98d21a] bg-[#344654]">
                  144.50
                </div>
              </div>
            </div>
          </div>
          {/* end content 3 */}
        </div>
      </Carousel>
    </>
  );
}
