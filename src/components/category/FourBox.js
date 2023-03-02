import React from "react";
import IconWindows from "../../assets/icons/IconWindows";
import IconMac from "../../assets/icons/IconMac";

export default function FourBox() {
  return (
    <>
      <div className="flex justify-between">
        <div className="w-[240px] h-[260px] relative">
          <img
            className="w-full h-full object-cover"
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/1030840/header.jpg?t=1632420251" alt=""
          />
          <div className="absolute bottom-0 w-full h-10 bg-black">
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

        <div className="w-[240px] h-[260px] relative">
          <img
            className="w-full h-full object-cover"
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/1314563/header.jpg?t=1661876599" alt=""
          />
          <div className="absolute bottom-0 w-full h-10 bg-black">
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

        <div className="w-[240px] h-[260px] relative">
          <img
            className="w-full h-full object-cover"
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/1713810/header_alt_assets_1.jpg?t=1677695357" alt=""
          />
          <div className="absolute bottom-0 w-full h-10 bg-black">
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

        <div className="w-[240px] h-[260px] relative">
          <img
            className="w-full h-full object-cover"
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/704270/header.jpg?t=1670836087" alt=""
          />
          <div className="absolute bottom-0 w-full h-10 bg-black">
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
      </div>
    </>
  );
}
