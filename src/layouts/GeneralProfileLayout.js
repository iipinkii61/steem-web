import Footer from "./Footer";
import Header from "./Header";
import profileImage from "../assets/blank.png";
import useUser from "../hooks/useUser";

export default function GeneralProfileLayout() {
  const user = useUser();
  console.log(user);
  return (
    <>
      <Header />
      {/* <div className=" bg-black bg-opacity-20 backdrop-blur-sm  border-2 border-solid border-red h-screen w-screen"> */}
      <div className="px-40 justify-center">
        <div className="bg-slate-700 h-24 ">
          <div className="flex col px-6 py-4 ">
            <img src={profileImage} alt="profileImage" className=" h-16  " />
            <p className="pt-4 pl-6 text-xl"> UserName</p>
          </div>
        </div>

        <div className="flex col py-12">
          <ul className="menu bg-base-0  w-56">
            <li>
              <a className="active  active:bg-black opacity-60 ">General</a>
            </li>
            <li>
              <a>Avatar</a>
            </li>
            <li>
              <a>Profile Background</a>
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
                  <input
                    className=" bg-black rounded w-full h-10 px-2 "
                    placeholder="User name"
                  />
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
                <div className=" space-x-2 pl-96 ">
                  <button className="btn-sm  bg-gray-500  rounded w-48 normal-case ">
                    Cancel
                  </button>
                  <button className="btn-sm  bg-sky-500 border-slate-900 rounded w-48 normal-case ">
                    Save
                  </button>
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
