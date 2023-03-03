import Footer from "../layouts/Footer";
import PageMainLayout from "../layouts/PageMainLayout";
import avatar from "../assets/blank.png";
import logo from "../assets/header_logo.png";
import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import { useEffect } from "react";
import useUser from "../hooks/useUser";
import { useDispatch } from "react-redux";
import { fetchUserProfile } from "../redux/user-slice";
import useAuth from "../hooks/useAuth";

export default function ProfilePage() {
  const { id } = useAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserProfile(id));
  }, []);

  const user = useUser();
  console.log(user);

  return (
    <>
      <Header />
      <PageMainLayout>
        <div className="bg-[#171A21] max-h-fit p-10">
          <div className="flex gap-8 text-2xl">
            <img src={avatar} className="h-40 rounded shadow" />
            <div>
              <p>username</p>
              <Link className="navbar-brand" to="/generalprofile">
                <button class="btn rounded bg-greenButton border-none normal-case box-border h-3 w-26">
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
      </PageMainLayout>
      <Footer />
    </>
  );
}
