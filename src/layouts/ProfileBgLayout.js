import React, { useRef, useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import profileImage from "../assets/blank.png";
import profilecoveImage from "../assets/profilebg.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../redux/user-slice";
import { useParams } from "react-router-dom";
import useUser from "../hooks/useUser";

export default function ProfileBgLayout() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserProfile(userId));
  }, []);

  const [file, setFile] = useState(null);

  const inputEl = useRef();

  const user = useUser();
  console.log(user);
  return (
    <>
      <Header />
      {/* <div className=" bg-black bg-opacity-20 backdrop-blur-sm  border-2 border-solid border-red h-screen w-screen"> */}
      <div className="px-96 justify-center mb-36">
        <div className="bg-slate-700 h-24 ">
          <div className="flex col px-6 py-4 ">
            <img src={profileImage} alt="profileImage" className=" h-16  " />
            <p className="pt-4 pl-6 text-xl"></p>
          </div>
        </div>
        <div className=" flex justify-end py-4">
          <p className="underline">Back to your profile</p>
        </div>

        <div className="flex col py-6 w-full   ">
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
          <div className="pl-2 space-y-4 space-x-2 w-full">
            <div className=" flex col ">
              <h1 className="w-full ">PROFILE BACKGROUND</h1>
            </div>
            <p>Choose a background to show on your profile page.</p>
            <div className="px-16">
              <img
                src={file ? URL.createObjectURL(file) : profilecoveImage}
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
                    setFile(e.target.files[0]);
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
        <div className=" space-x-2 flex justify-end  ">
          <button
            className="btn-sm  bg-gray-500  rounded w-48 normal-case "
            onClick={() => {
              setFile(null);
              inputEl.current.value = null;
            }}
          >
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
