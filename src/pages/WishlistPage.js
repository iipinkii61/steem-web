import PageMainLayout from "../layouts/PageMainLayout";
import avatar from "../assets/blank.png";
import Footer from "../layouts/Footer";
<<<<<<< HEAD
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWishlist } from "../redux/wishlist-slice";
import useAuth from "../hooks/useAuth";
=======
import Header from "../layouts/Header";
>>>>>>> 4ded23739938bef1e93fba2af92f959a8ca12a23
export default function WishlistPage() {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const user = useAuth();

  useEffect(() => {
    dispatch(fetchWishlist());
  }, []);
  return (
    <>
    <Header/>
      <div className="bg-[#202326] max-h-fit">
        <PageMainLayout>
          <div className="flex items-center gap-6 p-6 px-0">
            <img src={avatar} className="h-16" />
            <p className="text-2xl">{user.userName}'s WISHLIST</p>
          </div>
          {wishlist?.map((el) => (
            <div key={el.id} className="bg-[#405163E6] p-4 mt-2 rounded">
              <div className="flex justify-around gap-3">
                <img src={el.Game.headerImage} className="h-20 bg-blue-400" />
                <div className="flex flex-col justify-around">
                  <p className="text-xl font-semibold text-white">
                    {el.Game.name}
                  </p>
                  <p className="text-xs">Release date : 23 oct 2023</p>
                </div>
                <div className="flex items-center">
                  {/* <p>discount</p> */}
                  <div className="flex items-center bg-[#00000033] text-sm rounded-sm p-0.5">
                    <p className="pl-2">{el.Game.priceOverview}</p>
                    <button className="bg-[#749D38] text-[#d2efa9] rounded-sm p-1 px-3 ml-3">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-end px-8 text-xs">Remove</div>
            </div>
          ))}
        </PageMainLayout>
      </div>
      <Footer />
    </>
  );
}
