import axios from "../config/axios";
import { useEffect, useState } from "react";
import profileImage from "../assets/blank.png";
import useAuth from "../hooks/useAuth";
import { useDispatch } from "react-redux";
import { sendRequest, deleteFriend } from "../redux/friend-slice";
import useFriend from "../hooks/useFriend";

export default function AddFriend() {
  const user = useAuth();
  const friends = useFriend();
  const dispatch = useDispatch();

  const [friendList, setFriendList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  console.log(friendList);

  ////////// handle search //////////
  useEffect(() => {
    const fetchSearchUser = async () => {
      const res = await axios.get(`/user/search/name?searchName=${searchTerm}`);
      const resFilter = res.data.user.filter((el) => el.id !== user.id);
      // filter ไม่เอาตัวเอง
      setFriendList(resFilter);
    };
    const idTimeout = setTimeout(() => {
      fetchSearchUser();
    }, 500);
    return () => clearTimeout(idTimeout);
  }, [searchTerm]);

  const handleChangeInput = (e) => {
    setSearchTerm(e.target.value);
  };

  ////////// handle add friend button //////////
  // รับแอดแล้ว เป็นเพื่อนกันแล้ว
  const existFriend = (userId) =>
    friends?.some(
      (el) =>
        (el?.accepterId === userId || el?.requesterId === userId) &&
        el?.status === "ACCEPTER",
    );

  // อีกคนยังไม่รับแอด
  const isPending = (userId) =>
    friends?.some(
      (el) =>
        (el?.accepterId === userId || el?.requesterId === userId) &&
        el?.status === "PENDING",
    );

  return (
    <div className="w-full h-full">
      <div className="bg-cyan-800 py-2 px-6 rounded-sm h-12 flex items-center justify-between">
        <p>Add a Friend</p>

        <div className="bg-black/50 w-1/2 flex p-2 rounded gap-2">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
          <input
            type="text"
            className="bg-transparent w-full"
            onChange={handleChangeInput}
            value={searchTerm}
            placeholder="Enter your friend's profile name"
          />
        </div>
      </div>
      {/* <div className="p-10 h-screen overflow-y-auto"> */}
      {/* search */}
      {searchTerm !== "" ? (
        <div className="p-10 h-96 overflow-y-auto">
          {friendList.map((el) => (
            <div
              key={el.id}
              className="flex items-center justify-between mx-2 mb-4 w-full bg-black/20 rounded p-6"
            >
              <div className="flex items-center gap-6 ">
                <img
                  src={el.image? el.image : profileImage}
                  alt="profileImage"
                  className="h-16 rounded-sm"
                />
                <p>{el.userName}</p>
              </div>

              {existFriend(el.id) ? (
                <p className="text-sm">You are friends</p>
              ) : isPending(el.id) ? (
                <button
                  onClick={() => dispatch(deleteFriend(el.id))}
                  className="px-4 py-1 rounded-sm bg-[#274155] text-[#b8b6b4]"
                >
                  Request was sent
                </button>
              ) : (
                <button
                  onClick={() => dispatch(sendRequest(el.id))}
                  className="px-4 py-1 rounded-sm bg-[#274155] hover:bg-cyan-600 text-blueText hover:text-gray-200"
                >
                  Add a friend
                </button>
              )}
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
      {/* end search */}
    </div>
  );
}
