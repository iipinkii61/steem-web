import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import profileImage from "../assets/blank.png";
import { fetchAllUser } from "../redux/user-slice";
import useAuth from "../hooks/useAuth";
import { sendRequest } from "../redux/friend-slice";

export default function AddFriend() {
  const dispatch = useDispatch();
  const user = useAuth();
  const userLists = useSelector((state) => state.user.profile.user);
  const friend = useSelector((state) => state.friend.friend);
  useEffect(() => {
    dispatch(fetchAllUser());
  }, []);

  ////////// end search handle //////////
  console.log(friend);
  const [friendList, setFriendList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChangeSearchTerm = (e) => {
    setSearchTerm(e.target.value.trim());
  };

  useEffect(() => {
    const id = setTimeout(() => {
      updateShowFriends(searchTerm);
    }, 500);
    return () => {
      clearTimeout(id);
    };
  }, [searchTerm]);

  const updateShowFriends = (searchTerm) => {
    setFriendList(
      userLists.filter(
        (el) =>
          el.userName.toLowerCase().includes(searchTerm.toLowerCase()) &&
          el.id !== +user.id,
      ),
    );
  };
  ////////// end search handle //////////

  // console.log(friendList);

  return (
    <div className="w-full h-full overflow-y-auto">
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
            value={searchTerm}
            onChange={handleChangeSearchTerm}
            placeholder="Enter your friend's profile name"
          />
        </div>
      </div>
      <div className="p-10 h-screen overflow-y-auto">
        {friendList.map((el) => (
          <div
            key={el.id}
            className="flex items-center justify-between mx-2 mb-4 w-full bg-black/20 rounded p-6"
          >
            <div className="flex items-center gap-6 ">
              <img
                src={profileImage}
                alt="profileImage"
                className="h-16 rounded-sm"
              />
              <p>{el.userName}</p>
            </div>
            <button
              onClick={() => dispatch(sendRequest(el.id))}
              className="px-4 py-1 rounded-sm bg-[#274155] hover:bg-cyan-600 text-blueText hover:text-gray-200"
            >
              Add a friend
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
