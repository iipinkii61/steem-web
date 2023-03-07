import useShowGame from "../hooks/useShowGame";
import { useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCart } from "../redux/cart-slice";
import { addWishlist, fetchWishlist } from "../redux/wishlist-slice";
import IconWindows from "../assets/icons/IconWindows";
import IconMac from "../assets/icons/IconMac";
import useAuth from "../hooks/useAuth";
import useWishlist from "../hooks/useWishList";

export default function GamesLayout() {
  const showGame = useShowGame();
  const { steamAppId } = useParams();
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const dispatch = useDispatch();
  const user = useAuth();

  useEffect(() => {
    videoRef.current.load();
  }, [showGame]);

  // handle wish list //
  const wishlist = useWishlist();
  useEffect(() => {
    if (user) {
      dispatch(fetchWishlist());
    }
  }, []);

  const wishlistExist = wishlist?.find(
    (el) => el.Game.steamAppid === +steamAppId,
  );
  // console.log(wishlistExist);

  const handleWishlistButton = () => {
    dispatch(addWishlist(steamAppId));
  };

  // end handle wish list //

  const handleAddAndPlay = () => {
    if (showGame?.is_free) {
      return navigate("/login", { state: { steamAppId } });
    }
    dispatch(setCart(steamAppId));
    navigate("/cart", { state: { steamAppId } });
  }; window.scrollTo({top:0});

  return (
    <>
      <div className="pt-5 pb-5 text-3xl">{showGame?.name}</div>
      <div className="h-[445px] flex justify-between bg-[#151f29]">
        <div className="w-[600px] h-[337px] flex flex-col">
          <video
            ref={videoRef}
            className="w-full shadow-lg"
            autoPlay
            controls
            loop
            muted
          >
            <source src={showGame?.movies?.[0].mp4?.["480"]} type="video/mp4" />
          </video>

          <div className="flex gap-1 mt-3">
            {/*--------screenshots--------*/}

            {showGame?.screenshots?.slice(0, 5).map((el) => (
              <div className=" w-1/4" key={el.id}>
                <img
                  className="w-full h-full object-cover"
                  src={el.path_thumbnail}
                />
              </div>
            ))}

            {/*--------screenshots--------*/}
          </div>
        </div>
        <div className="w-[340px] h-[337px] ml-3">
          <div className="mb-2">
            <img className="w-full h-full" src={showGame?.header_image} />
          </div>
          <div className="text-xs font-semibold text-gray-400 p-1">
            <span>{showGame?.short_description}</span>
          </div>
          <table className="mt-5">
            <tbody className="text-xs">
              <tr>
                <td className="pr-2 text-gray-500">RELEASE DATE:</td>
                <td className="text-[#4e8fb7]">
                  {showGame?.release_date?.date}
                </td>
              </tr>
              <tr>
                <td className="pr-2 text-gray-500">DEVELOPER:</td>
                <td className="text-[#4e8fb7]">{showGame?.developers?.[0]}</td>
              </tr>
              <tr>
                <td className="pr-2 text-gray-500">PUBLISHER:</td>
                <td className="text-[#4e8fb7]">{showGame?.publishers?.[0]}</td>
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

        {wishlistExist ? (
          <button className="w-[160px] h-[30px] ml-5 text-xs rounded-sm bg-[#274155]  text-blueText ">
            Already in your wishlist !
          </button>
        ) : (
          <button
            onClick={() => handleWishlistButton()}
            className="w-[160px] h-[30px] ml-5 rounded-sm bg-[#274155] hover:bg-cyan-600 text-blueText hover:text-gray-200"
          >
            Add to your wishlist
          </button>
        )}
      </div>
      {/*end container Add to your wishlist */}
      <br />
      {/* container Add to cart */}
      <div className="h-[80px] relative rounded-md text-gray-400 bg-[radial-gradient(at_right_top,_#566573,_#475664,_#2d3d4a)]">
        <div className="text-white text-2xl font-medium pl-5 pt-2">
          Buy {showGame?.name}
          <div className="absolute bottom-10 right-10 text-gray-100 w-fit h-fit">
            {showGame?.platforms?.windows && <IconWindows />}
          </div>
          <div className="absolute bottom-10 right-[70px] text-gray-100 w-fit h-fit">
            {showGame?.platforms?.mac && <IconMac />}
          </div>
        </div>
        <div className="absolute -bottom-5 right-5 w-[206px] h-[40px] bg-black">
          <div className="text-gray-300 font-thin text-sm pl-3 pt-3">
            {!showGame?.is_free
              ? showGame?.price_overview?.final_formatted
              : "Free to Play"}
          </div>
          <button
            onClick={handleAddAndPlay}
            className="absolute p-2 px-5 text-[#ceeca5] right-1 bottom-1 text-xs rounded-sm bg-[radial-gradient(at_left_top,_#78b32b,_#60941b,_#588a1b)]
          hover:bg-[radial-gradient(at_left_top,_#78b32b,_#8bd32a,_#588a1b)] hover:text-white"
          >
            {!showGame?.is_free ? "Add to cart" : "Play game"}
          </button>
        </div>
      </div>
      {/* end container Add to cart */}
      <br />
      {/* ABOUT THIS GAME */}
      <div className="w-full text-gray-100">ABOUT THIS GAME</div>
      <hr className="text-blue-600" />
      <div
        className="text-gray-300"
        dangerouslySetInnerHTML={{ __html: showGame?.detailed_description }}
      />
      <br />
      {/* end ABOUT THIS GAME */}

      {/* SYSTEM REQUIREMENTS */}
      <div className="w-full text-gray-100">SYSTEM REQUIREMENTS</div>
      <hr className="text-blue-600" />
      <div className="text-gray-300 flex justify-between w-full h-fit">
        <div
          className="w-1/2 bg-[#16202d39] rounded-md px-3 py-3"
          dangerouslySetInnerHTML={{
            __html: showGame?.pc_requirements?.minimum,
          }}
        />

        <div
          className="w-1/2 bg-[#16202d39] rounded-md px-3 py-3"
          dangerouslySetInnerHTML={{
            __html: showGame?.pc_requirements?.recommended,
          }}
        />
      </div>
      {/* end SYSTEM REQUIREMENTS */}
      <br />
      {/* REVIEWS */}
      <div className="w-full text-gray-100">MOST HELPFUL REVIEWS</div>
      <hr className="text-blue-600" />
      {/* row reviews */}
      <div className="flex h-auto pt-3 w-auto bg-[#16202d]">
        <div className="flex w-1/2 p-3">
          <div className="flex w-fit">
            <div className="h-[34px] w-[34px]">
              <img
                className="h-full w-full"
                src="https://avatars.akamai.steamstatic.com/88e5480683bfc1be2eba70b25b2a5690f498d803.jpg"
              />
            </div>
            <div className="flex flex-col">
              <span className="pl-2 text-gray-500 font-bold text-sm">
                ZzzoO
              </span>{" "}
              {/*persona_name*/}
              <span className="pl-2 text-gray-500 font-semibold text-xs">
                158 products in account
              </span>{" "}
              {/*num_owned_games*/}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full bg-[#16202d]">
          <div className="relative flex bg-[#121a24]">
            <div className="h-[40px] w-[40px]">
              <img
                className="w-full h-full bg-cover"
                src="https://store.akamai.steamstatic.com/public/shared/images/userreviews/icon_thumbsUp_v6.png"
              />
            </div>
            <span className="absolute h-fit w-fit left-12">Recommended</span>
            <span className="absolute h-fit w-fit top-6 left-12 text-[9px] text-gray-500">
              POSTED: 27 FEBRUARY
            </span>
          </div>
          <div className="h-fit w-fit p-4 text-sm text-gray-400">
            The only thing CoH3 has achieved is ruining the CoH2 player base, by
            shifting it to an unfinished, unpolished, completely broken sequel.
            The UI is bad to the point you can't figure out if a unit is about
            to die. The graphics are still cartoony with tanks looking like
            Tonka toys. The new "soundscape" has everything quietened down so
            that howitzer shells landing sound like a distant fireworks display.
            There are about two maps for each match size. And as for features?
            No surrender, no player names on allied units, no way to view match
            results again, no support weapon stats, no replay feature,
            everyone's online profile looks identical, and multiplayer always
            shows as "unranked" when there is a leaderboard? This is without
            going into the broken vehicle pathing or unbalanced units (DAK
            flamethrower blobs anyone?). You can't crush infantry with tanks so
            snaring or AT satchel units have little to fear (as the satchels do
            no friendly fire damage now). I am so disappointed in this release.
            Instead of building on the excellent foundation of CoH2, Relic have
            created this game almost like a standalone title. A far worse one
            that would be fine as a mobile game, but not as the sequel to one of
            the best RTS titles of the past decade. I paid for the physical
            launch edition, but I'm uninstalling it now and not planning to come
            back until this game is hugely changed from its current state.
          </div>
        </div>
      </div>
      {/* end row reviews */}
      <br />
      {/* row reviews */}
      <div className="flex h-auto pt-3 w-auto bg-[#16202d]">
        <div className="flex w-1/2 p-3">
          <div className="flex w-fit">
            <div className="h-[34px] w-[34px]">
              <img
                className="h-full w-full"
                src="https://avatars.akamai.steamstatic.com/88e5480683bfc1be2eba70b25b2a5690f498d803.jpg"
              />
            </div>
            <div className="flex flex-col">
              <span className="pl-2 text-gray-500 font-bold text-sm">
                ZzzoO
              </span>{" "}
              {/*persona_name*/}
              <span className="pl-2 text-gray-500 font-semibold text-xs">
                158 products in account
              </span>{" "}
              {/*num_owned_games*/}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full bg-[#16202d]">
          <div className="relative flex bg-[#121a24]">
            <div className="h-[40px] w-[40px]">
              <img
                className="w-full h-full bg-cover"
                src="https://community.akamai.steamstatic.com/public/shared/images/userreviews/icon_thumbsDown.png?v=1"
              />
            </div>
            <span className="absolute h-fit w-fit left-12">
              Not Recommended
            </span>
            <span className="absolute h-fit w-fit top-6 left-12 text-[9px] text-gray-500">
              POSTED: 27 FEBRUARY
            </span>
          </div>
          <div className="h-fit w-fit p-4 text-sm text-gray-400">
            The only thing CoH3 has achieved is ruining the CoH2 player base, by
            shifting it to an unfinished, unpolished, completely broken sequel.
            The UI is bad to the point you can't figure out if a unit is about
            to die. The graphics are still cartoony with tanks looking like
            Tonka toys. The new "soundscape" has everything quietened down so
            that howitzer shells landing sound like a distant fireworks display.
            There are about two maps for each match size. And as for features?
            No surrender, no player names on allied units, no way to view match
            results again, no support weapon stats, no replay feature,
            everyone's online profile looks identical, and multiplayer always
            shows as "unranked" when there is a leaderboard? This is without
            going into the broken vehicle pathing or unbalanced units (DAK
            flamethrower blobs anyone?). You can't crush infantry with tanks so
            snaring or AT satchel units have little to fear (as the satchels do
            no friendly fire damage now). I am so disappointed in this release.
            Instead of building on the excellent foundation of CoH2, Relic have
            created this game almost like a standalone title. A far worse one
            that would be fine as a mobile game, but not as the sequel to one of
            the best RTS titles of the past decade. I paid for the physical
            launch edition, but I'm uninstalling it now and not planning to come
            back until this game is hugely changed from its current state.
          </div>
        </div>
      </div>
      {/* end row reviews */}
      {/* end REVIEWS */}
    </>
  );
}
