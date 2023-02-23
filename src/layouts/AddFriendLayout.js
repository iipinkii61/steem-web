import React from "react";
import profileImage from "../assets/blank.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import backgroundFriend from "../assets/bgfriendpage.png";

export default function AddFriendLayout() {
  return (
    <>
      <Header />
      <div
        style={{ backgroundImage: `url(${backgroundFriend})` }}
        className="h-screen"
      >
        <div>
          <div className="flex items-center gap-6 pt-12 pl-40 space-x-2">
            <img src={profileImage} alt="profileImage" className="h-20" />
            <p className="text-2xl"> UserName</p>
          </div>

          <div className=" mt-4 mx-40 flex">
            <ul class="menu bg-base-0 w-56">
              <li>
                <a className="active">
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
                </a>
              </li>
              <li>
                <a>
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
                </a>
              </li>
              <li>
                <a>
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
                </a>
              </li>
            </ul>

            <div className="w-full">
              <div className="bg-cyan-800 py-2 px-6 rounded-sm h-12 flex items-center justify-between">
                <p>Add a Friend</p>

                <div className="bg-black/50 w-1/2 flex p-2 rounded gap-2">
                  <button>
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
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </button>
                  <input
                    type="text"
                    className="bg-transparent w-full"
                    placeholder="Enter your friend's profile name"
                  />
                </div>
              </div>
              <div className="flex flex-wrap p-10">
                <div className="flex items-center gap-6 m-2">
                  <img
                    src={profileImage}
                    alt="profileImage"
                    className="h-16 rounded-sm"
                  />
                  <p>Friend Name</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
