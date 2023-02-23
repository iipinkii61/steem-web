import React from "react";
import profileImage from "../assets/blank.png";
import { Link } from "react-router-dom";

export default function AddFriendLayout() {
  return (
    <div>
      <div className=" bg-black bg-opacity-0 backdrop-blur-sm border-2 border-transparent h-screen w-screen">
        <div className="flex col mt-12 ml-40 space-x-2">
          <img src={profileImage} alt="profileImage" className=" h-20" />

          <p className=" text-2xl mt-6"> UserName</p>
        </div>

        <div className=" mt-4 ml-40 flex col">
          <ul class="menu bg-base-0  w-56 ">
            <li>
              <a>Your Friend </a>
            </li>
            <li>
              <a className="active">Add Friend</a>
            </li>
            <li>
              <a>Remove Friend</a>
            </li>
          </ul>

          <div className="flex col w-full">
            <div className="bg-cyan-800 py-2 pl-5 mr-16 w-full h-12 flex ">
              <p> Find your friend</p>
              <div className="ml-96 ">
                <form class="flex items-center">
                  <label for="simple-search" class="sr-only">
                    Search
                  </label>
                  <div class="relative w-full -mt-1">
                    <input
                      type="text"
                      id="simple-search"
                      class="bg-black border border-none  text-white text-sm round-none  w-[700px] pl-8 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    class="p-2.5 -ml-1 text-sm font-medium text-white bg-black round-l-none -mt-1 "
                  >
                    <svg
                      class="w-5 h-5"
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
                    <span class="sr-only">Search</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-96 flex col">
          <img src={profileImage} alt="profileImage" className=" h-20" />
          <p className="ml-4 mt-8">Friend Name</p>
        </div>
      </div>
    </div>
  );
}
