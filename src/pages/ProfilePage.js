import Footer from "../layouts/Footer";
import PageMainLayout from "../layouts/PageMainLayout";
import avatar from "../assets/blank.png";
import logo from "../assets/header_logo.png";
import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import useUser from "../hooks/useUser";
import profileImage from "../assets/blank.png";
import profilecoveImage from "../assets/profilebg.png";

export default function ProfilePage() {
  const user = useUser();
  console.log(user);

  return (
    <>
      <Header />
      {/* <PageMainLayout> */}
      <div
        style={{
          backgroundImage: `url(${user?.coverImage || profilecoveImage})`,
        }}
      >
        {/* <img src={user?.coverImage}> */}

        <div className="px-96">
          <div className="bg-[#171A21] max-h-fit p-10 py-20">
            <div className="flex gap-8 text-2xl">
              <img
                src={user?.image || profileImage}
                alt="profileImage"
                className=" h-16  "
              />
              <div>
                <p className="pt-4 pl-6 text-xl"> {user?.name}</p>
                <Link className="navbar-brand" to="/generalprofile">
                  <button className="btn rounded bg-greenButton border-none normal-case box-border h-3 w-26">
                    Edit Profile
                  </button>
                </Link>
              </div>
            </div>

            <div className="bg-gray-600/30 p-2 px-5 mt-4 rounded text-lg font-light text-[#b8b6b4] ">
              Library
            </div>
            <div className="bg-gray-600/30 p-4 px-5 mt-3 flex gap-8 rounded min-w-fit">
              <img src={logo} className="bg-blue-400 h-16 min-w-fit" />
              <p>Game nameeeeeeeeee</p>
            </div>
            <div className="bg-gray-600/30 p-4 px-5 mt-3 flex gap-8 rounded">
              <img src={logo} className="bg-blue-400 h-16" />
              <p>Game nameeeeeeeeee</p>
            </div>
            <div className="bg-gray-600/30 p-4 px-5 mt-3 flex gap-8 rounded">
              <img src={logo} className="bg-blue-400 h-16" />
              <p>Game nameeeeeeeeee</p>
            </div>
          </div>
        </div>
        {/* </PageMainLayout> */}
        {/* </img> */}
      </div>
      <Footer />
    </>
  );
}
