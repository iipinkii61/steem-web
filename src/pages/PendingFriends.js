import profileImage from "../assets/blank.png";

export default function PendingFriends() {
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
      <div className="bg-black/30 w-full flex rounded gap-2 mt-2 mb-4">
        <div className="flex flex-wrap p-4">
          <div className="flex items-center gap-6 m-2">
            <img
              src={profileImage}
              alt="profileImage"
              className="h-16 rounded-sm"
            />
            <p>Friend Name</p>
          </div>
        </div>
        {/* <p>Sorry, there are no pending friend invites to show.<p> */}
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
      <div className="bg-black/30 w-full flex rounded gap-2 mt-2 mb-4">
        <div className="flex flex-wrap p-4">
          <div className="flex items-center gap-6 m-2">
            <img
              src={profileImage}
              alt="profileImage"
              className="h-16 rounded-sm"
            />
            <p>Friend Name</p>
          </div>
          {/* <p>Sorry, there are no pending sent invites to show.<p> */}
        </div>
      </div>
    </div>
  );
}
