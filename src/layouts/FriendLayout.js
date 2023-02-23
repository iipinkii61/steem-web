import React from "react";
import profileImage from "../assets/blank.png";
import { Link } from "react-router-dom";

export default function FriendLayout() {
  return (
    <div>
      {/* <div className=" bg-black bg-opacity-0 backdrop-blur-sm border-2 border-transparent h-screen w-screen"> */}
      <div className="flex col mt-12 ml-20 space-x-2">
        <img src={profileImage} alt="profileImage" className=" h-20" />

        <p className=" text-2xl mt-6"> UserName</p>
      </div>

      <div className=" mt-4 ml-20 flex col">
        <ul class="menu bg-base-0  w-56">
          <li>
            <a className="active  active:bg-black opacity-60 ">Your Friend</a>
          </li>
          <li>
            <a>Add Friend</a>
          </li>
          <li>
            <a>Remove Friend</a>
          </li>
        </ul>

        <div className="flex col ">
          <div className="bg-cyan-800 py-2 pl-5  w-full h-12 flex ">
            <p>Your Friend 0/250</p>
            <div className="ml-40 ">
              <Link>
                <button class="btn-sm rounded-none bg-greenButton border-none normal-case w-[900px] ">
                  Add Friend
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-80 flex col">
        <img src={profileImage} alt="profileImage" className=" h-20" />
        <p className="ml-4 mt-8">Friend Name</p>
      </div>
    </div>
    // </div>
  );
}
