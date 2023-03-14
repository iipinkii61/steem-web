import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import profileImage from "../assets/blank.png";
import { Link } from "react-router-dom";
import backgroundFriend from "../assets/bgfriendpage.png";
import useAuth from "../hooks/useAuth";
import useFriend from "../hooks/useFriend";
import Header from "./Header";
import { getAllFriends } from "../redux/friend-slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import useUser from "../hooks/useUser";

export default function FriendLayout() {
  const user = useAuth();
  const authUser = useUser()
  const friends = useFriend();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const idTimeout = setTimeout(() => {
  //     dispatch(getAllFriends());
  //   }, 500);
  //   return () => clearTimeout(idTimeout);
  // }, [friends]);

  // useEffect(() => {
  //   dispatch(getAllFriends());
  // }, []);
  return (
    <>
      <Header />
      <div
        style={{ backgroundImage: `url(${backgroundFriend})` }}
        className="h-screen"
      >
        <div>
          <div className="flex items-center gap-6 pt-12 pl-40 space-x-2">
            <img
              src={user?.image ? user?.image : profileImage}
              alt="profileImage"
              className="h-20 rounded-sm"
            />
            <p className="text-2xl">{authUser.name ? authUser.name : user.userName}</p>
          </div>

          <div className="mt-4 mx-40 flex ">
            <ul className="menu bg-base-0 w-56">
              <li>
                <Link to="/friends">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                  Your Friend
                </Link>
              </li>
              <li>
                <Link to="/friends/add">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                    />
                  </svg>
                  Add a Friend
                </Link>
              </li>
              <li>
                <Link to="/friends/pending">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  Pending Invites
                </Link>
              </li>
            </ul>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
