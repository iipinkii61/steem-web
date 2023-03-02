import React from "react";
import IconMac from "../../assets/icons/IconMac";
import IconWindows from "../../assets/icons/IconWindows";

export default function ThreeBox() {
  return (
    <>
      <div className="flex justify-between">
        <div className="w-[320px] h-[260px] relative">
          <img
            className="w-full h-full object-cover"
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/1656330/header.jpg?t=1677603663" alt=""
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

        <div className="w-[320px] h-[260px] relative">
          <img
            className="w-full h-full object-cover"
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/275850/header_alt_assets_15.jpg?t=1677079554" alt=""
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

        <div className="w-[320px] h-[260px] relative">
          <img
            className="w-full h-full object-cover"
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/1196090/header.jpg?t=1677600846" alt=""
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
