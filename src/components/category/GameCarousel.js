import React from "react";
import IconWindows from "../../assets/icons/IconWindows";
import IconMac from "../../assets/icons/IconMac";
import GenresTag from "../../components/GenresTag";
export default function GameCarousel() {
  return (
    <>
      <div className="w-[900px] mx-auto">
        <div className="flex">
          <div className="w-[260px] h-[350px] ">
            <div className="w-full h-[310px]">
              <img
                className="w-full h-full object-cover"
                src="https://cdn.cloudflare.steamstatic.com/steam/apps/990080/ss_725bf58485beb4aa37a3a69c1e2baa69bf3e4653.600x338.jpg?t=1676412613"
                alt=""
              />
            </div>
            <div className="relative w-[260px] h-full bg-black">
              <span className="absolute left-1 top-2 text-gray-300 w-fit h-fit">
                <IconWindows />
              </span>
              <span className="absolute left-7 top-2 text-gray-300 w-fit h-fit">
                <IconMac />
              </span>
              <span className="absolute right-2 top-2 text-gray-200 w-fit h-fit">
                ฿1,590.00
              </span>
            </div>
          </div>
          <div className="w-full h-[350px] backdrop-blur-md backdrop-brightness-90">
            <div className="w-auto m-3 relative">
              <div className="m-1 w-fit text-2xl font-extrabold">
                Hogwarts Legacy
              </div>
              <div className="m-1 w-fit text-lg text-gray-300">
                Release Date : Feb 11, 2023
              </div>
              <div className="w-fit h-fit p-1 bg-[#00000058] backdrop-brightness-75 ">
                <span className="text-green-500">Very Positive</span>{" "}
                <span className="text-[#6b8aaa]">| 117,812 User Reviews</span>
              </div>
              <br />
              <div className="w-full flex gap-2 flex-wrap">
                <GenresTag tag="Action" />
                <GenresTag tag="Magic" />
                <GenresTag tag="Fantasy" />
                <GenresTag tag="Open-world" />
                <GenresTag tag="Single-player" />
                <GenresTag tag="RPG" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
