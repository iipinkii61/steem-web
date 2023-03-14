import PageMainLayout from "../layouts/PageMainLayout";
import avatar from "../assets/blank.png";
import Footer from "../layouts/Footer";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWishlist, deleteWishlist } from "../redux/wishlist-slice";
import { setCart } from "../redux/cart-slice";
import useWishList from "../hooks/useWishList";
import useUser from "../hooks/useUser";
import useAuth from "../hooks/useAuth";
import useCart from "../hooks/useCart";
import Header from "../layouts/Header";
import { useNavigate } from "react-router-dom";
export default function WishlistPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlist = useWishList();
  const authUser = useAuth();
  const user = useUser();
  const cart = useCart();
  console.log(cart);

  useEffect(() => {
    dispatch(fetchWishlist());
  }, []);

  const handleRemove = (wishlistId) => {
    dispatch(deleteWishlist(wishlistId));
  };

  const handleAddToCart = (steamAppId) => {
    dispatch(setCart(steamAppId));
    navigate("/cart", { state: { steamAppId } });
  };
  window.scrollTo({ top: 0 });

  const existCart = (steamAppId) =>
    cart.find((el) => el.Game.steamAppid === +steamAppId);

  const handleClick = (el) => {
    navigate("/app/" + el?.steamAppid + "/" + el?.name.replace(/[\W_]+/g, "_"));
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      <Header />
      <div className="bg-[#202326] max-h-fit">
        <PageMainLayout>
          <div className="flex items-center gap-6 p-6 px-0">
            <img src={user?.image || avatar} className="h-16" />
            <p className="text-2xl">
              {user.name ? user.name : authUser.userName}'s WISHLIST
            </p>
          </div>
          {wishlist?.length == 0 ? (
            <p>Oops! there's nothing to show here.</p>
          ) : (
            <>
              {wishlist?.map((el) => (
                <div key={el?.id} className="bg-[#405163E6] p-2 mt-2 rounded">
                  <div className="relative flex gap-3">
                    <div className=" w-60">
                    <img
                      src={el?.Game?.headerImage}
                      className="h-full bg-blue-400"
                      onClick={() => handleClick(el.Game)}
                    />
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-xl font-semibold text-white mb-5">
                        {el?.Game?.name}
                      </p>
                      <p className="text-xs mb-1">
                      publishers : {el?.Game?.publishers}
                      </p>
                      <p className="text-xs">
                        Release date : {el?.Game?.releaseDate.date}
                      </p>
                    </div>
                    <div className="flex items-center absolute right-0 top-8">
                      {/* <p>discount</p> */}
                      <div className="relative flex items-center bg-[#00000033] text-sm rounded-sm p-0.5">
                        <p className="pl-2">
                          {el?.Game?.priceOverview?.final_formatted}
                        </p>
                        {existCart(el?.Game?.steamAppid) ? (
                          <p className="bg-[#749D38] text-[#d2efa9] rounded-sm p-1 px-3 ml-3">
                            In cart
                          </p>
                        ) : (
                          <button
                            onClick={() => handleAddToCart(el.Game?.steamAppid)}
                            className="ml-2 p-2  text-[#ceeca5] right-1 bottom-1 text-xs rounded-sm bg-[radial-gradient(at_left_top,_#78b32b,_#60941b,_#588a1b)]
                        hover:bg-[radial-gradient(at_left_top,_#78b32b,_#8bd32a,_#588a1b)] hover:text-white"
                          >
                            Add to cart
                          </button>
                        )}
                          <button
                            onClick={() => handleRemove(el.id)}
                            className="absolute -bottom-5 right-0  flex justify-end text-xs"
                          >
                            Remove
                          </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </PageMainLayout>
      </div>
      <Footer />
    </>
  );
}
