import Header from "../layouts/Header";
import avatar from "../assets/blank.png";

export default function ChatPage() {
  return (
    <>
      <Header />
      <div className="flex justify-between">
        <div className="flex-1 shadow-xl h-screen bg-[#16202D] min-w-fit">
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
        <div className="w-full h-screen flex-[3_1_0%] pt-3 pb-5 shadow min-w-min">
          <div className="flex justify-between bg-gray-600 text-[#b8b6b4] w-1/6 rounded-sm px-3 py-1">
            <p>friends</p>
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

          <div className="flex flex-col justify-between h-screen text-[#b8b6b4] bg-[#2B2D32] p-6 px-10 ">
            <div className="max-h-screen overflow-scroll">
              <div className="flex gap-4 mt-4">
                <img src={avatar} className="h-10 rounded-sm" />
                <div className="">
                  <span className="text-blueText pr-3">Nameeeeeeeeee</span>
                  <span className="text-xs">13.00</span>
                  <p className="break-words max-w-lg">
                    hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello
                  </p>
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <img src={avatar} className="h-10 rounded-sm" />
                <div>
                  <span className="text-blueText pr-3">Nameeeeeeeeee</span>
                  <span className="text-xs">13.00</span>
                  <p className="break-words max-w-lg">
                    hellohellohellohellohellohellohellohello
                  </p>
                </div>
              </div>
            </div>

            <div>
              <form className="flex mt-4">
                <input
                  type="text"
                  placeholder="Type here..."
                  className="border border-r-transparent border-slate-500 bg-transparent w-full rounded-xl p-2 px-5"
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
        {/* <div className="flex-1">ds</div> */}
      </div>
    </>
  );
}
