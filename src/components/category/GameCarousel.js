import React from "react";
import IconWindows from "../../assets/icons/IconWindows";
import IconMac from "../../assets/icons/IconMac";
import GenresTag from "../../components/GenresTag";

export default function GameCarousel({ el, handleClick, setShowImage }) {
  return (
    <>
      <div className="w-[900px] mx-auto" onClick={() => handleClick(el)}>
        <div className="flex">
          <div className="w-[260px] h-[350px] ">
            <div className="w-full h-[310px]">
              <img
                className="w-full h-full object-cover"
                value={el?.screenshots[0]}
                key={el?.screenshots[0]}
                src={el?.screenshots[0].path_full}
              />
            </div>
            <div className="relative w-[260px] h-[40px] bg-black">
              <span className="absolute left-1 top-2 text-gray-300 w-fit h-fit">
                {el?.platforms.windows && <IconWindows />}
              </span>
              <span className="absolute left-7 top-2 text-gray-300 w-fit h-fit">
                {el?.platforms.mac && <IconMac />}
              </span>
              <span className="absolute right-2 top-2 text-gray-200 w-fit h-fit">
                {!el?.is_free
                  ? el?.price_overview?.final_formatted
                  : "Free to Play"}
              </span>
            </div>
          </div>
          <div className="w-full h-[350px] backdrop-blur-md backdrop-brightness-90">
            <div className="w-auto m-3 relative">
              <div className="m-1 w-fit text-2xl font-extrabold">
                {el?.name}
              </div>
              <div className="m-1 w-fit text-lg text-gray-300">
                Release Date : {el?.release_date?.date}
              </div>
              <div className="w-fit h-fit p-1 bg-[#00000058] backdrop-brightness-75 ">
                <span className="text-green-500">Very Positive</span>{" "}
                <span className="text-[#6b8aaa]">
                  | {el?.recommendations?.total} User Reviews
                </span>
              </div>
              <br />
              <div className="w-full flex gap-2 flex-wrap">
                {el?.categories?.map((tag) => (
                  <GenresTag key={tag.id} tag={tag.description} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
