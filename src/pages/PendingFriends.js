import { useDispatch } from "react-redux";
import profileImage from "../assets/blank.png";
import useFriend from "../hooks/useFriend";
import useUser from "../hooks/useUser";
import { deleteFriend, acceptFriend } from "../redux/friend-slice";

export default function PendingFriends() {
  const user = useUser();
  const friends = useFriend();
  const dispatch = useDispatch();

  ///////// เอาอันที่ status pending /////////
  const authAsRequester = friends?.filter(
    (el) => el?.Requester?.id === user.id && el.status === "PENDING",
  );
  const authAsAccepter = friends?.reduce((acc, el, idx) => {
    if (el?.Accepter?.id === user.id && el.status === "PENDING") {
      acc.push({ ...el, idx });
    }
    return acc;
  }, []);

  ////// delete invite /////

  return (
    <div className="w-full">
      <div className="bg-cyan-800 py-2 px-6 rounded-sm h-12 flex items-center justify-between">
        <p>Received invites</p>

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
            placeholder="Enter your friend's profile name"
          />
        </div>
      </div>
      <div className="bg-black/30 max-h-64 overflow-y-auto flex flex-wrap rounded gap-2 mt-2 mb-4">
        {authAsAccepter?.length > 0 ? (
          <>
            {authAsAccepter.map((el) => (
              <div
                key={el.id}
                className="flex justify-between items-center w-full p-6"
              >
                <div className="flex items-center gap-6 m-2">
                  <img
                    src={profileImage}
                    alt="profileImage"
                    className="h-16 rounded-sm"
                  />
                  <p>{el.Requester.userName}</p>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => dispatch(acceptFriend(el))}
                    className="px-4 py-1 rounded-sm bg-[#274155] hover:bg-cyan-600 text-blueText hover:text-gray-200"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => dispatch(deleteFriend(el.requesterId))}
                    className="px-4 py-1 rounded-sm bg-[#274155] hover:bg-cyan-600 text-blueText hover:text-gray-200"
                  >
                    Ignore
                  </button>
                </div>
              </div>
            ))}
          </>
        ) : (
          <p className="p-6">Sorry, there are no pending invites to show.</p>
        )}
      </div>
      <div className="bg-cyan-800 py-2 px-6 mt-4 rounded-sm h-12 flex items-center justify-between">
        <p>Sent invites</p>

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
            placeholder="Enter your friend's profile name"
          />
        </div>
      </div>
      <div className="bg-black/30 w-full flex flex-wrap max-h-64 overflow-y-auto rounded gap-2 mt-2 mb-4">
        {authAsRequester?.length > 0 ? (
          <>
            {authAsRequester.map((el) => (
              <div
                key={el.id}
                className="flex justify-between items-center w-full p-6"
              >
                <div className="flex items-center gap-6 m-2">
                  <img
                    src={profileImage}
                    alt="profileImage"
                    className="h-16 rounded-sm"
                  />
                  <p>{el.Accepter.userName}</p>
                </div>
                <button
                  onClick={() => dispatch(deleteFriend(el.accepterId))}
                  className="px-4 py-1 rounded-sm bg-[#274155] hover:bg-cyan-600 text-blueText hover:text-gray-200"
                >
                  Remove
                </button>
              </div>
            ))}
          </>
        ) : (
          <p className="p-6">Sorry, there are no pending invites to show.</p>
        )}
      </div>
    </div>
  );
}
