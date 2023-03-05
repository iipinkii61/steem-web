import avatar from "../assets/blank.png";
import { useDispatch } from "react-redux";
import { logout } from "../redux/auth-slice";
import { Link } from "react-router-dom";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";
import { clearCart } from "../redux/cart-slice";
import { clearWishlist } from "../redux/wishlist-slice";
import { clearUser } from "../redux/user-slice";

export default function HeaderUserPart() {
  const dispatch = useDispatch();
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();
  const user = useAuth();
  const cart = useCart();
  const handleLogout = () => {
    dispatch(clearUser());
    dispatch(clearCart());
    dispatch(clearWishlist());
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <div className="flex gap-4 justify-end static">
        <button className="flex text-xs" onClick={() => setDropdown(!dropdown)}>
          {user.userName}
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
                <button>View Profile</button>
              </Link>
            </li>

            <li className="pt-2">
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        ) : (
          ""
        )}

        {/* end dropdown */}
        <img src={avatar} className="w-9" />
      </div>
      <div className="flex justify-end gap-1 round-sm mt-1 text-xs uppercase">
        <Link to="/cart">
          <button className="px-4 py-0.5 w-full bg-blue-300 text-white">
            cart {`(${cart?.length})`}
          </button>
        </Link>
        <Link to="/wishlist">
          <button className="px-4 py-0.5 w-full bg-[#749D38] text-[#d2efa9]">
            wishlist
          </button>
        </Link>
      </div>
    </>
  );
}
