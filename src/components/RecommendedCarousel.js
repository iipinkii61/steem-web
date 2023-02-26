import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/cart-slice";
import { useNavigate } from "react-router-dom";

export default function RecommendedCarousel({ title }) {
  const gameInfo = useSelector((state) => state.game.gameInfo);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (el) => {
    dispatch(addItem(el));
    navigate("/app");
  };
  // const cart = useSelector((state) => state.cart.cart);
  // console.log(cart);

  return (
    <>
      <div className="pt-5 pb-5">{title}</div>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        interval={4000}
        dynamicHeight={true}
        infiniteLoop={true}
        showStatus={false}
        stopOnHover={true}
        showIndicators={false}
      >
        {/* component start*/}
        {gameInfo.map((el) => (
          <div
            className=" h-full w-full flex justify-between"
            key={el?.steam_appid}
            value={el?.steam_appid}
            name={el?.steam_appid}
            onClick={() => handleClick(el)}
          >
            {/* start fullimage */}
            <div>
              <img
                className="w-[600px] h-[337px] object-fill"
                value={el?.screenshots[0]}
                key={el?.screenshots[0]}
                src={el?.screenshots[0].path_full}
              />
            </div>
            {/* end fullimage */}
            {/* start body content */}
            <div className="h-full w-1/2 flex flex-col  justify-between bg-[#0a141d]">
              <div className="h-1/4 text-left pl-5 pt-4 text-3xl">
                {el?.name}
              </div>
              <div className=" flex ">
                <div className="flex justify-center flex-wrap gap-1">
                  <div
                    className="w-[162px] h-[69px]"
                    value={el?.screenshots[1].id}
                    key={el?.screenshots[1].id}
                  >
                    <img src={el?.screenshots[1].path_thumbnail} />
                  </div>
                  <div
                    className="w-[162px] h-[69px]"
                    value={el?.screenshots[2].id}
                    key={el?.screenshots[2].id}
                  >
                    <img src={el?.screenshots[2].path_thumbnail} />
                  </div>
                  <div
                    className="w-[162px] h-[69px]"
                    value={el?.screenshots[3].id}
                    key={el?.screenshots[3].id}
                  >
                    <img src={el?.screenshots[3].path_thumbnail} />
                  </div>
                  <div
                    className="w-[162px] h-[69px]"
                    value={el?.screenshots[4].id}
                    key={el?.screenshots[4].id}
                  >
                    <img src={el?.screenshots[4].path_thumbnail} />
                  </div>
                </div>
              </div>
              <div className="static h-1/4 text-left pl-5 pr-5 pt-4 text-base flex justify-between">
                Free To Play
                <div className="absolute bottom-10 right-12 text-gray-400 w-fit h-fit">
                  {/* component start */}
                  {el?.platforms.windows && (
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
                  )}
                  {/* component end */}
                </div>
                <div className="absolute bottom-10 right-5 text-gray-400 w-fit h-fit">
                  {/* component start */}
                  {el?.platforms.mac && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                    >
                      <path
                        fill="currentColor"
                        d="M23.934 18.947c-.598 1.324-.884 1.916-1.652 3.086c-1.073 1.634-2.588 3.673-4.461 3.687c-1.666.014-2.096-1.087-4.357-1.069c-2.261.011-2.732 1.089-4.4 1.072c-1.873-.017-3.307-1.854-4.381-3.485c-3.003-4.575-3.32-9.937-1.464-12.79C4.532 7.425 6.61 6.237 8.561 6.237c1.987 0 3.236 1.092 4.879 1.092c1.594 0 2.565-1.095 4.863-1.095c1.738 0 3.576.947 4.889 2.581c-4.296 2.354-3.598 8.49.742 10.132zM16.559 4.408c.836-1.073 1.47-2.587 1.24-4.131c-1.364.093-2.959.964-3.891 2.092c-.844 1.027-1.544 2.553-1.271 4.029c1.488.048 3.028-.839 3.922-1.99z"
                      />
                    </svg>
                  )}
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
