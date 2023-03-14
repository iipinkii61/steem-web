import React, { useRef, useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import profileImage from "../assets/blank.png";
import profilecoveImage from "../assets/profilebg.png";
import { useDispatch, useSelector } from "react-redux";
import { editUserProfile, fetchUserProfile } from "../redux/user-slice";
import { useParams } from "react-router-dom";
import useUser from "../hooks/useUser";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function ProfileBgLayout() {
  const [coverImage, setCover] = useState(null);
  const dispatch = useDispatch();
  const inputEl = useRef();
  const user = useUser();
  const userAuth = useAuth()
  const handleSave = () => {
    dispatch(editUserProfile({ coverImage }));
  };
  console.log(user);
  return (
    <>
      <Header />
      {/* <div className=" bg-black bg-opacity-20 backdrop-blur-sm  border-2 border-solid border-red h-screen w-screen"> */}
      <div className="px-96 justify-center mb-36">
        <div className="bg-slate-700 h-24 ">
          <div className="flex col px-6 py-4 ">
            <img
              src={user?.image || profileImage}
              alt="profileImage"
              className=" h-16  "
            />
            <p className="pt-4 pl-6 text-xl"> {user?.name ? user?.name : userAuth?.userName}</p>
          </div>
        </div>
        <div className=" flex justify-end py-4">
          <Link to="/profiles" className="underline">
            Back to your profile
          </Link>
        </div>

        <div className="flex col py-6 w-full   ">
          <ul className="menu bg-base-0 w-56">
            <li>
              <Link to="/generalprofile">General</Link>
            </li>
            <li>
              <Link to="/avatarprofile">Avatar</Link>
            </li>
            <li>
              <Link
                to="/backgroundprofile"
                className="active  active:bg-black opacity-60 "
              >
                Profile Background
              </Link>
            </li>
          </ul>
          <div className="pl-2 space-y-4 space-x-2 w-full">
            <div className=" flex col ">
              <h1 className="w-full ">PROFILE BACKGROUND</h1>
            </div>
            <p>Choose a background to show on your profile page.</p>
            <div className="px-16">
              <img
                src={
                  coverImage
                    ? URL.createObjectURL(coverImage)
                    : profilecoveImage
                }
                alt="profilecover"
                className="h-60 w-full"
              />
            </div>

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
            <div className="px-16">
              <input
                type="file"
                className="hidden"
                ref={inputEl}
                onChange={(e) => {
                  if (e.target.files[0]) {
                    setCover(e.target.files[0]);
                  }
                }}
              />
              <button
                className="btn-sm  bg-gray-500  rounded w-48 normal-case "
                onClick={() => inputEl.current.click()}
              >
                Upload your background
              </button>
            </div>
          </div>
        </div>
        <div className=" py-8 space-x-2 flex justify-end  ">
          <button
            className="btn-sm  bg-gray-500  rounded w-48 normal-case "
            onClick={() => {
              setCover(null);
              inputEl.current.value = null;
            }}
          >
            Cancel
          </button>
          <button
            className="btn-sm  bg-sky-500 border-slate-900 rounded w-48 normal-case "
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>

      {/* </div> */}

      <Footer />
    </>
  );
}
