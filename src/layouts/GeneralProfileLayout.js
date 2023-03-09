import Footer from "./Footer";
import Header from "./Header";
import profileImage from "../assets/blank.png";
import useUser from "../hooks/useUser";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editUserProfile, fetchUserProfile } from "../redux/user-slice";
import { useState } from "react";
import { useRef } from "react";
import useAuth from "../hooks/useAuth";

export default function GeneralProfileLayout() {
  const [profileName, setProfileName] = useState("");

  const dispatch = useDispatch();
  const inputEl = useRef();
  const user = useUser();
  const userAuth = useAuth()

  const handleInput = (e) => {
    setProfileName(e.target.value);
    // console.log(profileName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editUserProfile({ name: profileName }));
  };
  // console.log(user);

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
            <p className="pt-4 pl-6 text-xl">{user?.name ? user?.name : userAuth?.userName}</p>
          </div>
        </div>
        <div className=" flex justify-end py-4">
          <Link to="/profiles" className="underline">
            Back to your profile
          </Link>
        </div>

        <div className="flex col py-8">
          <ul className="menu bg-base-0  w-56">
            <li>
              <Link
                to="/generalprofile"
                className="active  active:bg-black opacity-60 "
              >
                General
              </Link>
            </li>
            <li>
              <Link to="/avatarprofile">Avatar</Link>
            </li>
            <li>
              <Link to="/backgroundprofile">Profile Background</Link>
            </li>
          </ul>
          <div className="pl-2">
            <h1 className="text-2xl "> ABOUT</h1>
            <p className="text-gray-400">
              Set your profile name and details. Providing additional
              information like your real name can help friends find you on the
              Steam Community.
            </p>

            <p className="py-6 text-gray-400">
              Your profile name and avatar represent you throughout Steam, and
              must be appropriate for all audiences. Please see the
            </p>
            <div>
              <h1 className="text-2xl border-b-2 border-gray-500/50">
                GENERAL
              </h1>

              <div className="py-6 px-4 space-y-6">
                <div>
                  <p className="text-sm text-gray-400">PROFILE NAME</p>
                  <form>
                    <input
                      className=" bg-black rounded w-full h-10 px-2 "
                      placeholder="User name"
                      onChange={handleInput}
                      value={profileName}
                    />
                  </form>
                </div>
              </div>
              <h1 className="text-2xl border-b-2 border-gray-500/50">
                PROFILE PREFERENCES
              </h1>
              <div className="form-control py-2">
                <label className="">
                  <input
                    type="checkbox"
                    // checked="checked"
                    className="checkbox rounded bg-black "
                  />
                  <span className="label-text text-neutral-400 px-2  ">
                    Hide Community Awards on my profile
                  </span>
                </label>
                <div className=" space-x-2 pl-96  flex col justify-end">
                  <button className="btn-sm  bg-gray-500  rounded w-48 normal-case ">
                    Cancel
                  </button>
                  <form onSubmit={handleSubmit}>
                    <button
                      className="btn-sm  bg-sky-500 border-slate-900 rounded w-48 normal-case "
                      type="submit"
                    >
                      Save
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* </div> */}

      <Footer />
    </>
  );
}
