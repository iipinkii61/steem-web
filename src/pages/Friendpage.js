// import FriendLayout from "../layouts/FriendLayout";
import profileImage from "../assets/blank.png";
import { Link } from "react-router-dom";

export default function FriendPage() {
  return (
    <div className="w-full">
      <div className="bg-cyan-800 py-2 px-6 rounded-sm h-12 flex items-center justify-between">
        <p>Your Friend 0/250</p>
        <div className="w-1/4">
          <Link to="/friends/add">
            <button class="btn-sm bg-[#749D38] text-[#d2efa9] rounded-sm w-full flex items-center justify-center gap-2">
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
            </button>
          </Link>
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
        <div className="flex items-center gap-6 m-2">
          <img
            src={profileImage}
            alt="profileImage"
            className="h-16 rounded-sm"
          />
          <p>Friend Name</p>
        </div>
        <div className="flex items-center gap-6 m-2">
          <img
            src={profileImage}
            alt="profileImage"
            className="h-16 rounded-sm"
          />
          <p>Friend Name</p>
        </div>
        <div className="flex items-center gap-6 m-2">
          <img
            src={profileImage}
            alt="profileImage"
            className="h-16 rounded-sm"
          />
          <p>Friend Name</p>
        </div>
        <div className="flex items-center gap-6 m-2">
          <img
            src={profileImage}
            alt="profileImage"
            className="h-16 rounded-sm"
          />
          <p>Friend Name</p>
        </div>
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
  );
}
