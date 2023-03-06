import React, { useRef, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import profileImage from "../assets/blank.png";
import { useDispatch } from "react-redux";
import { editUserProfile } from "../redux/user-slice";
import useUser from "../hooks/useUser";

export default function AvatarProfileLayout() {
  // const [file, setImage] = useState(null);
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const inputEl = useRef();
  const user = useUser();

  const handleSave = () => {
    dispatch(editUserProfile({ image }));
  };

  // console.log(user);
  return (
    <>
      <Header />

      {/* <div className=" bg-black bg-opacity-20 backdrop-blur-sm  border-2 border-solid border-red h-screen w-screen"> */}
      <div className="px-96 justify-center mb-36 ">
        <div className="bg-slate-700 h-24 ">
          <div className="flex col px-6 py-4 ">
            <img
              src={
                image ? URL.createObjectURL(image) : user?.image || profileImage
              }
              alt="profileImage"
              className=" h-16  "
            />
            <p className="pt-4 pl-6 text-xl"> {user?.name}</p>
          </div>
        </div>
        <div className=" flex justify-end py-4">
          <p className="underline">Back to your profile</p>
        </div>
        <div className="flex col py-12 w-full  ">
          <ul className="menu bg-base-0  w-56">
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
              <img
                src={image ? URL.createObjectURL(image) : profileImage}
                alt="profileImage"
                className=" h-40  "
              />
              <div className=" flex justify-end w-full">
                <input
                  type="file"
                  className="hidden"
                  ref={inputEl}
                  onChange={(e) => {
                    if (e.target.files[0]) {
                      setImage(e.target.files[0]);
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

            <div className=" space-x-2  py-16 w-full flex justify-end ">
              {/* {file && ( */}
              <>
                <button
                  className="btn-sm  bg-gray-500  rounded w-48 normal-case "
                  onClick={() => {
                    setImage(null);
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
