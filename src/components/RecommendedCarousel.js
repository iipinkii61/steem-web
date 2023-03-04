import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";
import useGameInfo from "../hooks/useGameInfo";
import IconWindows from "../assets/icons/IconWindows";
import IconMac from "../assets/icons/IconMac";

export default function RecommendedCarousel({ title }) {
  const gameInfo = useGameInfo();
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
        {/* component start*/}
        {gameInfo?.map((el) => (
          <div
            className=" h-full w-full flex justify-between"
            key={el?.steam_appid}
            onClick={() => handleClick(el)}
          >
            {/* start fullimage */}
            <div className="w-[800px] h-[340px] object-cover">
              <img
                className="w-full h-full"
                value={el?.screenshots[0]}
                key={el?.screenshots[0]}
                src={el?.screenshots[0].path_full}
              />
            </div>
            {/* end fullimage */}
            {/* start body content */}
            <div className="h-full w-1/2 flex flex-col  justify-between bg-[#0a141d]">
              <div className="h-1/4 text-left pl-5 pt-2 pb-2 text-3xl">
                {el?.name}
              </div>
              <div className=" flex ">
                <div className="flex justify-center flex-wrap gap-1">
                  <div
                    className="w-[170px] h-[80px]"
                    value={el?.screenshots[1].id}
                    key={el?.screenshots[1].id}
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={el?.screenshots[1].path_thumbnail}
                    />
                  </div>
                  <div
                    className="w-[170px] h-[80px]"
                    value={el?.screenshots[2].id}
                    key={el?.screenshots[2].id}
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={el?.screenshots[2].path_thumbnail}
                    />
                  </div>
                  <div
                    className="w-[170px] h-[80px]"
                    value={el?.screenshots[3].id}
                    key={el?.screenshots[3].id}
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={el?.screenshots[3].path_thumbnail}
                    />
                  </div>
                  <div
                    className="w-[170px] h-[80px]"
                    value={el?.screenshots[4].id}
                    key={el?.screenshots[4].id}
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={el?.screenshots[4].path_thumbnail}
                    />
                  </div>
                </div>
              </div>
              <div className="relative h-1/4 text-left pl-5 pr-5 pt-10 text-base flex justify-between">
                {el?.is_free
                  ? "Free to play"
                  : el?.price_overview?.final_formatted}
                <div className="absolute flex gap-1 top-2">
                  <div
                    className={`${
                      el.genres[0] ? "" : "hidden"
                    } px-2 rounded-sm text-sm text-gray-300 bg-[#394149] w-15 h-5`}
                  >
                    {el?.genres?.[0]?.description}
                  </div>
                  <div
                    className={`${
                      el.genres[1] ? "" : "hidden"
                    } px-2 rounded-sm text-sm text-gray-300 bg-[#394149] w-15 h-5`}
                  >
                    {el?.genres?.[1]?.description}
                  </div>
                  <div
                    className={`${
                      el.genres[2] ? "" : "hidden"
                    } px-2 rounded-sm text-sm text-gray-300 bg-[#394149] w-15 h-5`}
                  >
                    {el?.genres?.[2]?.description}
                  </div>
                </div>
                <div className="absolute bottom-10 right-12 text-sm text-gray-300 w-fit h-fit">
                  {/* component start */}
                  {el?.platforms.windows && <IconWindows />}
                  {/* component end */}
                </div>
                <div className="absolute bottom-10 right-5 text-gray-400 w-fit h-fit">
                  {/* component start */}
                  {el?.platforms.mac && <IconMac />}
                  {/* component end */}
                </div>
              </div>
            </div>
            {/* end body content */}
          </div>
        ))}
        {/* component end*/}
      </Carousel>
    </>
  );
}
