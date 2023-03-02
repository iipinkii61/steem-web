import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import profileImage from "../assets/blank.png";
import profilecoveImage from "../assets/profilebg.png";

export default function ProfileBgLayout() {
  return (
    <>
      <Header />
      {/* <div className=" bg-black bg-opacity-20 backdrop-blur-sm  border-2 border-solid border-red h-screen w-screen"> */}
      <div className="px-48 justify-center">
        <div className="bg-slate-700 h-32 ">
          <div className="flex col px-6 py-8 ">
            <img src={profileImage} alt="profileImage" className=" h-16  " />
            <p className="pt-4 pl-6 text-xl"> UserName</p>
          </div>
        </div>

        <div className="flex col py-12  w-full px-10 ">
          <ul className="menu bg-base-0  w-56">
            <li>
              <a>General</a>
            </li>
            <li>
              <a>Avatar</a>
            </li>
            <li>
              <a className="active  active:bg-black opacity-60">
                Profile Background
              </a>
            </li>
          </ul>
          <div className="pl-2 space-y-4 w-full">
            <div className=" flex col ">
              <h1 className="w-full">PROFILE BACKGROUND</h1>

              <div className=" flex justify-end w-full">
                <p>Back to Your Profile</p>
              </div>
            </div>
            <p>Choose a background to show on your profile page.</p>

            <img
              src={profilecoveImage}
              alt="profilecover"
              className="h-60 w-full"
            />

            {/* <div className="space-y-2">
              <div className="py-6 px-4 space-y-4 bg-black">
                <div>
                  <div className="flex col space-x-6">
                    <div>
                      <img
                        src={profilecoveImage}
                        alt="profilecover"
                        className="h-20 "
                      />
                      <p className="px-4 text-sky-400">Default</p>
                    </div>
                  </div>
                  <div> </div>
                </div>
              </div>
            </div> */}
            <button className="btn-sm  bg-gray-500  rounded w-48 normal-case ">
              {" "}
              Upload your background{" "}
            </button>
          </div>
        </div>
        <div className=" space-x-2 flex justify-end  ">
          <button className="btn-sm  bg-gray-500  rounded w-48 normal-case ">
            Cancel
          </button>
          <button className="btn-sm  bg-sky-500 border-slate-900 rounded w-48 normal-case ">
            Save
          </button>
        </div>
      </div>

      {/* </div> */}

      <Footer />
    </>
  );
}
