import { useState, useEffect } from "react";
import socket from "../config/socket";
export default function ChatBox({
  user,
  openChat,
  onClose,
  acceptedFriend,
  id,
}) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  // console.log(user);

  const sendMessage = async (e) => {
    if (currentMessage !== "") {
      e.preventDefault();
      const messageData = {
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
        userId: user.id,
        senderName: user.userName,
        receiveId: id,
        userImg: user.image,
        // receiverName: acceptedFriend?.Accepter?.userName,
      };
      // console.log(messageData);
      socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
    }
  };

  // console.log(messageList);

  // useEffect(() => {
  //   socket.on("receive_message", (data) => {
  //     setMessageList((list) => [...list, data]);
  //     console.log(messageList);
  //   });
  // }, [socket]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      // console.log("iddd", user);
      // console.log(data, id);
      // console.log(messageList);
      console.log(data.userId, id);
      if (data.userId === id) {
        setMessageList((list) => [...list, data]);
        // console.log(data);
      }
    });
  }, [socket, id]);

  // console.log(user);
  // console.log(acceptedFriend[0].Accepter?.userName);

  return (
    <>
      {openChat ? (
        <div className="w-full h-full flex-[3_1_0%] pt-3 shadow min-w-min">
          <div className="flex justify-between bg-gray-600 text-[#b8b6b4] w-1/6 rounded-sm px-3 py-1">
            <p>
              {/* {acceptedFriend?.Requester?.id === user.id
                ? acceptedFriend.Accepter?.userName
                : acceptedFriend.Requester?.userName} */}
              {acceptedFriend?.Accepter?.userName}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              onClick={onClose}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="h-screen text-[#b8b6b4] bg-[#2B2D32] p-6 px-10">
            {messageList.map((el) => {
              return (
                <div className="flex gap-4 " key={el.id}>
                  <img src={el.userImg} className="h-10 rounded-sm" />
                  <div>
                    <span className="text-blueText pr-3">{el?.senderName}</span>
                    <span className="text-xs">{el.time}</span>
                    <p className="break-words max-w-lg">{el.message}</p>
                  </div>
                </div>
              );
            })}
            <div>
              <form className="flex mt-4" onSubmit={sendMessage}>
                <input
                  type="text"
                  placeholder="Type here..."
                  className="border border-r-transparent border-slate-500 bg-transparent w-full rounded-xl p-2 px-5"
                  onChange={(event) => {
                    setCurrentMessage(event.target.value);
                  }}
                />
                <button className="rounded-br-xl rounded-tr-xl bg-slate-500 p-2 px-3 -mx-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
