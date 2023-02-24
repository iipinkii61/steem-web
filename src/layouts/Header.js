import React from "react";
import logo from "../assets/header_logo.png";
import avatar from "../assets/blank.png";
import { useSelector } from "react-redux";

export default function Header() {
  const user = useSelector((state) => state.auth.authUser);

  console.log(user);

  return (
    <div className="h-28 bg-[#171A21] flex justify-between">
      <div className="flex items-center  min-w-fit">
        <a href="/">
          <img src={logo} className="h-11 min-w-fit" />
        </a>
        <div className=" text-[#b8b6b4] uppercase">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>store</a>
              <ul className="p-2 bg-[#171A21]">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
      </div>
      {/* right part */}
      <div className="p-4">
        {user ? (
          <>
            <div className="flex gap-4 justify-end ">
              <p className="text-xs">{user.userName}</p>
              <img src={avatar} className="w-9" />
            </div>
            <div className="flex justify-end gap-1 round-sm mt-1 text-xs uppercase">
              <button className="px-4 py-0.5 w-1/3 bg-blue-300 text-white">
                cart
              </button>
              <button className="px-4 py-0.5 w-1/3 bg-[#749D38] text-[#d2efa9]">
                wishlist
              </button>
            </div>
          </>
        ) : (
          <>
            <button>Login</button>&nbsp; | &nbsp;<button>Register</button>
          </>
        )}

        {/* search bar */}
        <form className="mt-1 flex items-center justify-end">
          <input
            type="text"
            className="bg-[#3B6491] p-0.5 px-1.5 rounded-sm w-full"
          />
          <button className="px-2 py-1 rounded-sm bg-blueText">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </form>
        {/* end search bar */}
      </div>
      {/* end right part */}
    </div>
  );
}
