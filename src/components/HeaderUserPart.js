import avatar from "../assets/blank.png";
import { useDispatch } from "react-redux";
import { logout } from "../redux/auth-slice";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";
import { clearCart } from "../redux/cart-slice";
import { clearWishlist } from "../redux/wishlist-slice";
import { clearUser } from "../redux/user-slice";
import useUser from "../hooks/useUser";
import useAuth from "../hooks/useAuth";
import useWishlist from '../hooks/useWishList'

export default function HeaderUserPart() {
  const dispatch = useDispatch();
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();
  const user = useUser();
  const cart = useCart();
  const authUser = useAuth()
  const wishlist = useWishlist()
  const handleLogout = () => {
    dispatch(clearUser());
    dispatch(clearCart());
    // dispatch(clearWishlist());
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <div className="flex gap-4 justify-end static">
        <button className="flex text-xs" onClick={() => setDropdown(!dropdown)}>
          {user.name ? user.name : authUser.userName}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3 h-3 pt-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>

        {/* dropdown */}
        {dropdown ? (
          <ul className="bg-[#21252e] text-[#b8b6b4] shadow absolute right-20 top-11 px-4 py-2 rounded">
            <li>
              <Link to="/profiles">
                <button className="hover:text-white">View Profile</button>
              </Link>
            </li>

            <li className="pt-2">
              <button onClick={handleLogout} className="hover:text-white">Logout</button>
            </li>
          </ul>
        ) : (
          ""
        )}

        {/* end dropdown */}
        <img src={user?.image || avatar} className="w-9" />
      </div>
      <div className="flex justify-end gap-1 round-sm mt-1 text-xs uppercase">
        <Link to="/cart">
          <button className="px-4 w-full g-2 bg-blue-300 text-white">
            cart {`(${cart?.length})`}
          </button>
        </Link>
        <Link to="/wishlist">
          <button className="px-4 w-full bg-[#749D38] text-[#d2efa9]">
            wishlist {`(${wishlist?.length})`}
          </button>
        </Link>
      </div>
    </>
  );
}
