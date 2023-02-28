import logo from "../assets/header_logo.png";
import HeaderUserPart from "../components/HeaderUserPart";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

export default function Header() {
  const user = useAuth();

  return (
    <div className="h-28 bg-[#171A21] flex justify-between">
      <div className="flex items-center  min-w-fit">
        <a href="/">
          <img src={logo} className="h-11 min-w-fit" />
        </a>
        <div className=" text-[#b8b6b4] uppercase">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">store</Link>
            </li>
            {user ? (
              <>
                <li>
                  <a>Username</a>
                  <ul className="p-2 bg-[#171A21] z-10 text-sm">
                    <li>
                      <Link to="/profiles">profile</Link>
                    </li>
                    <li>
                      <Link to="/friends">friends</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/chat">chat</Link>
                </li>
              </>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
      {/* right part */}
      <div className="p-4">
        {user ? (
          <HeaderUserPart />
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
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
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
