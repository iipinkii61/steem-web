import React, { useState, useEffect } from "react";
import avatar from "../assets/blank.png";
import logo from "../assets/header_logo.png";
import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import useUser from "../hooks/useUser";
import useFriend from "../hooks/useFriend";
import profileImage from "../assets/blank.png";
import profilecoveImage from "../assets/profilebg.png";
import { useParams } from "react-router-dom";
import { getAllFriends } from "../redux/friend-slice";
import { useDispatch } from "react-redux";
import { getProfileApi } from "../apis/user-api";
import { useLocation } from "react-router-dom";
import useGameInfo from "../hooks/useGameInfo";
import IconWindows from "../assets/icons/IconWindows";
import IconMac from "../assets/icons/IconMac";
import GenresTag from "../components/GenresTag";
import useGameTrans from "../hooks/useGameTrans";

export default function ProfilePage() {
  const gameInfo = useGameInfo();
  const user = useUser();
  console.log("gameInfo", gameInfo);
  const friends = useFriend();
  // console.log("friends", friends);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [profile, setProfile] = useState({});
  const location = useLocation();

  const fetch = async () => {
    const fetchProfile = await getProfileApi(id);
    // console.log("fetchProfile", fetchProfile);
    setProfile(fetchProfile?.data);
  };
  // useEffect(() => {
  //   if (!location.pathname === "/profiles") {
  //     fetch();
  //   }
  // }, []);
  useEffect(() => {
    fetch();
  }, []);
  const gameTrans = useGameTrans();

  console.log(gameTrans);

  return (
    <>
      <Header />

      {location.pathname === "/profiles" ? (
        <div
          style={{
            backgroundImage: `url(${user?.coverImage || profilecoveImage})`,
          }}
        >
          <div className="px-96">
            <div className="bg-[#171A21] max-h-fit p-10 py-20">
              <div className="flex gap-8 text-2xl">
                <img
                  src={user?.image || profileImage}
                  alt="profileImage"
                  className=" h-40 "
                />
                <div>
                  <div className="pt-4 pb-2 pl-6 text-xl">
                    {" "}
                    {user?.name ? user?.name : user?.userName}
                  </div>
                  <Link className="navbar-brand" to="/generalprofile">
                    <button
                      className="p-2 px-5 h-10 text-[#ceeca5] right-2 bottom-8 text-xs rounded-sm bg-[radial-gradient(at_left_top,_#78b32b,_#60941b,_#588a1b)]
          hover:bg-[radial-gradient(at_left_top,_#78b32b,_#8bd32a,_#588a1b)] hover:text-white"
                    >
                      Edit profile
                    </button>
                  </Link>
                </div>
              </div>

              <div className="bg-gray-600/30 p-2 px-5 mt-4 rounded text-lg font-light text-[#b8b6b4] ">
                Library
              </div>
              <table className="table w-full">
                <tbody>
                  {gameInfo?.slice(0, 4).map((el) => (
                    <tr
                      className="h-[120px] flex justify-between my-[1px]"
                      key={el?.steamAppid}
                    >
                      <td className="bg-[#22394b] w-[350px] h-[120px] relative">
                        <img
                          className="w-full h-full absolute left-0 top-0 object-top rounded-sm"
                          src={el?.headerImage}
                        />
                      </td>

                      <td className="bg-[#22394b] w-full relative">
                        <span className="absolute top-1 left-3 text-lg">
                          {el?.name}
                        </span>
                        <span className="absolute top-10 left-3 text-gray-300 w-fit h-fit">
                          {el?.platforms.windows && <IconWindows />}
                        </span>
                        <span className="absolute top-10 left-9 text-gray-300 w-fit h-fit">
                          {el?.platforms.mac && <IconMac />}
                        </span>
                        <div className="w-full absolute bottom-6 left-3 flex flex-wrap gap-2 ">
                          {el?.categories?.slice(0, 5).map((tag) => (
                            <GenresTag key={tag.id} tag={tag.description} />
                          ))}
                        </div>
                      </td>

                      <td className="bg-[#22394b] w-[150px] h-[120px] text-center py-6 relative">
                        <button
                          className="absolute p-2 px-5 h-14 text-[#ceeca5] right-2 bottom-8 text-xs rounded-sm bg-[radial-gradient(at_left_top,_#78b32b,_#60941b,_#588a1b)]
          hover:bg-[radial-gradient(at_left_top,_#78b32b,_#8bd32a,_#588a1b)] hover:text-white"
                        >
                          Play game
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            backgroundImage: `url(${user?.coverImage || profilecoveImage})`,
          }}
        >
          <div className="px-96">
            <div className="bg-[#171A21] max-h-fit p-10 py-20">
              <div className="flex gap-8 text-2xl">
                <img
                  src={profile?.image || profileImage}
                  alt="profileImage"
                  className=" h-40 "
                />
                <div>
                  <p className="pt-4 pl-6 text-xl">
                    {" "}
                    {profile?.name ? profile?.name : profile?.userName}
                  </p>
                </div>
              </div>

              <div className="bg-gray-600/30 p-2 px-5 mt-4 rounded text-lg font-light text-[#b8b6b4] ">
                Library
              </div>
              <table className="table w-full">
                <tbody>
                  {gameInfo?.slice(20, 24).map((el) => (
                    <tr
                      className="h-[120px] flex justify-between my-[1px]"
                      key={el?.steamAppid}
                    >
                      <td className="bg-[#22394b] w-[350px] h-[120px] relative">
                        <img
                          className="w-full h-full absolute left-0 top-0 object-top rounded-sm"
                          src={el?.headerImage}
                        />
                      </td>

                      <td className="bg-[#22394b] w-full relative">
                        <span className="absolute top-1 left-3 text-lg">
                          {el?.name}
                        </span>
                        <span className="absolute top-10 left-3 text-gray-300 w-fit h-fit">
                          {el?.platforms.windows && <IconWindows />}
                        </span>
                        <span className="absolute top-10 left-9 text-gray-300 w-fit h-fit">
                          {el?.platforms.mac && <IconMac />}
                        </span>
                        <div className="w-full absolute bottom-6 left-3 flex flex-wrap gap-2 ">
                          {el?.categories?.slice(0, 5).map((tag) => (
                            <GenresTag key={tag.id} tag={tag.description} />
                          ))}
                        </div>
                      </td>

                      <td className="bg-[#22394b] w-[150px] h-[120px] text-center py-6 relative">
                        <button
                          className="absolute p-2 px-5 h-14 text-[#ceeca5] right-2 bottom-8 text-xs rounded-sm bg-[radial-gradient(at_left_top,_#78b32b,_#60941b,_#588a1b)]
          hover:bg-[radial-gradient(at_left_top,_#78b32b,_#8bd32a,_#588a1b)] hover:text-white"
                        >
                          Play game
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
