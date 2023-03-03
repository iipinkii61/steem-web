import React, { useRef, useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import profileImage from "../assets/blank.png";
import { useDispatch, useSelector } from "react-redux";
import userSlice, { fetchUserProfile } from "../redux/user-slice";
import { useParams } from "react-router-dom";
import useUser from "../hooks/useUser";

export default function AvatarProfileLayout() {
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
      <div className="px-96 justify-center mb-36 ">
        <div className="bg-slate-700 h-24 ">
          <div className="flex col px-6 py-4 ">
            <img src={profileImage} alt="profileImage" className=" h-16  ">
              {/* {user.image} */}
            </img>
            <p className="pt-4 pl-6 text-xl"> username</p>
          </div>
        </div>
        <div className=" flex justify-end py-4">
          <p className="underline">Back to your profile</p>
        </div>
        <div className="flex col py-12 w-full  ">
          <ul class="menu bg-base-0  w-56">
            <li>
              <a>General</a>
            </li>
            <li>
              <a className="active  active:bg-black opacity-60">Avatar</a>
            </li>
            <li>
              <a>Profile Background</a>
            </li>
          </ul>
          <div className="pl-2 space-y-4  w-full">
            <div className=" flex col">
              <img src={profileImage} alt="profileImage" className=" h-40  " />
              <div className=" flex justify-end w-full">
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
                  // onClick={() => dispatch(fetchUserProfile(userSlice))}
                  onClick={() => inputEl.current.click()}
                >
                  Upload your avatar
                </button>
              </div>
            </div>

            {/* <div className="space-y-2">
              <div className="py-6 px-4 space-y-4 bg-black">
                <div>
                  <p className="text-2xl text-gray-400">Your Avatars</p>
                  <div className="flex col space-x-6">
                    <img
                      src={profileImage}
                      alt="profileImage"
                      className=" h-40  "
                    />
                    <img
                      src={profileImage}
                      alt="profileImage"
                      className=" h-40 "
                    />
                    <img
                      src={profileImage}
                      alt="profileImage"
                      className=" h-40  "
                    />
                    <img
                      src={profileImage}
                      alt="profileImage"
                      className=" h-40  "
                    />
                  </div>
                  <div> </div>
                </div>
              </div> */}

            <div className=" space-x-2  py-16 w-full flex justify-end ">
              {/* {file && ( */}
              <>
                <button
                  className="btn-sm  bg-gray-500  rounded w-48 normal-case "
                  onClick={() => {}}
                >
                  Cancel
                </button>

                <button
                  className="btn-sm  bg-sky-500 border-slate-900 rounded w-48 normal-case "
                  onClick={() => {}}
                >
                  Save
                </button>
              </>
              {/* )} */}
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}

      <Footer />
    </>
  );
}
