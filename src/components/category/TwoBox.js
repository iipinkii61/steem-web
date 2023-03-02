import React from "react";
import IconMac from "../../assets/icons/IconMac";
import IconWindows from "../../assets/icons/IconWindows";


export default function TwoBox() {
  return (
    <>
      <div className="flex justify-between">
        <div className="w-[480px] h-[260px] relative">
          <img
            className="w-full h-full object-cover"
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/397540/header.jpg?t=1657214217" alt=""
          />
          <div className="absolute bottom-0 w-full h-10 bg-black">
            <span className="absolute left-1 top-2 text-gray-300 w-fit h-fit">
              <IconWindows/>
            </span>
            <span className="absolute left-7 top-2 text-gray-300 w-fit h-fit">
              <IconMac/>
            </span>
            <span className="absolute right-2 top-2 text-gray-200 w-fit h-fit">
              ฿1,590.00
            </span>
          </div>
        </div>
        <div className="w-[480px] h-[260px] relative">
          <img
            className="w-full h-full object-cover"
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/594650/header_alt_assets_1.jpg?t=1677683269" alt=""
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
