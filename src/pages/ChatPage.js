import avatar from "../assets/blank.png";
import ChatBox from "../components/ChatBox";
import Header from "../layouts/Header";

export default function ChatPage() {
  return (
    <>
    <Header/>
      <div className="flex">
        <div className="flex-1 shadow-xl bg-[#16202D] min-w-fit">
          <div className="flex gap-4 p-6 text-blueText">
            <img src={avatar} className="w-16 shadow rounded-sm" />
            <p>USERNAME</p>
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
