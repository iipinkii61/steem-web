import avatar from "../assets/blank.png";
import ChatBox from "../components/ChatBox";
import Header from "../layouts/Header";
import useUser from "../hooks/useUser";
import profileImage from "../assets/blank.png";

export default function ChatPage() {
  const user = useUser();
  return (
    <>
      <Header />
      <div className="flex">
        <div className="flex-1 shadow-xl bg-[#16202D] min-w-fit">
          <div className="flex gap-4 p-6 text-blueText">
            <img
              src={user?.image || profileImage}
              alt="profileImage"
              className=" h-16  "
            />
            <p className="pt-4 pl-6 text-xl"> {user?.name}</p>
          </div>
          <div className="bg-gray-600 rounded px-4 py-1 shadow">Friends</div>
          {/* friend lists */}
          <div className="px-6 py-4 text-[#b8b6b4] ">
            <div className="flex gap-4 py-2">
              <img src={avatar} className="w-12 shadow rounded-sm" />
              <p>FRIENDS</p>
            </div>
            <div className="flex gap-4 py-2">
              <img src={avatar} className="w-12 shadow rounded-sm" />
              <p>FRIENDS</p>
            </div>
            <div className="flex gap-4 py-2">
              <img src={avatar} className="w-12 shadow rounded-sm" />
              <p>FRIENDS</p>
            </div>
          </div>
          {/* end friend lists */}
        </div>
        <ChatBox />
      </div>
    </>
  );
}
