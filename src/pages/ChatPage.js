import ChatBox from "../components/ChatBox";
import Header from "../layouts/Header";
import useUser from "../hooks/useUser";
import useFriend from "../hooks/useFriend";
import profileImage from "../assets/blank.png";
import { useEffect, useState } from "react";

export default function ChatPage() {
  const user = useUser();
  const friend = useFriend();
  const acceptedFriend = friend.filter((el) => el.status !== "PENDING");
  // console.log(acceptedFriend?.Requester?.id);
  // console.log(friend[0].Accepter?.userName);
  // console.log(acceptedFriend);
  const [openChat, setOpenChat] = useState(false);
  const [id, setId] = useState(null);

  // const filterMe =

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
            <p className="pt-4 pl-6 text-xl"> {user?.userName}</p>
          </div>
          <div className="bg-gray-600 rounded px-4 py-1 shadow">Friends</div>
          {/* friend lists */}
          {acceptedFriend.length > 0 ? (
            <>
              {acceptedFriend?.map((el) => (
                <div
                  className="px-6 py-4 text-[#b8b6b4] "
                  onClick={() => {
                    setOpenChat(true);
                    setId(
                      +el.Accepter.id === +user.id
                        ? el.Requester.id
                        : el.Accepter.id,
                    );
                    console.log(el);
                  }}
                  key={el.id}
                >
                  <div className="flex gap-4 py-2">
                    <img
                      src={el?.Accepter?.image}
                      className="w-12 shadow rounded-sm"
                    />
                    <p>
                      {" "}
                      {el?.Requester.id === user.id
                        ? el.Accepter.userName
                        : el.Requester.userName}
                    </p>
                  </div>
                </div>
              ))}
            </>
          ) : (
            ""
          )}
          ;{/* end friend lists */}
        </div>
        <ChatBox
          openChat={openChat}
          onClose={() => setOpenChat(false)}
          user={user}
          acceptedFriend={acceptedFriend}
          id={id}
        />
      </div>
    </>
  );
}
