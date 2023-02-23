import React from "react";

export default function TrendingListGame() {
  return (
    <>
      <div className="tabs pt-5 pb-2">
        <a className="tab tab-bordered">NEW & TRENDING</a>
        <a className="tab tab-bordered">POPULAR</a>
        <a className="tab tab-bordered">SPECIALS</a>
      </div>

      <div className="overflow-x-auto w-full rounded-none">
        <table className="table w-full">
          <tbody>
            {/* <!-- row 1 --> */}
            <tr className="bg-[#22394b] h-[100px] flex justify-between">
              <img
                className="w-[280px] h-[100px] object-cover"
                src="https://cdn.akamai.steamstatic.com/steam/apps/668580/capsule_184x69.jpg?t=1676938877"
              />
              <td className="bg-[#22394b] flex-none">
                <div className="w-fit">Atomic Heart</div>
                <div className=' text-gray-400 w-fit h-fit'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m3 5.479l7.377-1.016v7.127H3V5.48zm0 13.042l7.377 1.017v-7.04H3v6.023zm8.188 1.125L21 21v-8.502h-9.812v7.148zm0-15.292v7.236H21V3l-9.812 1.354z"/></svg>
                </div>
                <div className="badge badge-info rounded-sm mr-2 text-slate-300 bg-slate-500">Horror</div>
                <div className="badge badge-info rounded-sm mr-2 text-slate-300 bg-slate-500">Mystery</div>
                <div className="badge badge-info rounded-sm mr-2 text-slate-300 bg-slate-500">Puzzle</div>
              </td>
              <td className="bg-[#22394b]">
                <span className="text-lg">Price</span>
              </td>
              <tr className="bg-[#22394b] flex-1 flex">
                  <div className="w-full h-full object-cover">
                    <img src="https://cdn.akamai.steamstatic.com/steam/apps/668580/ss_1dc8661cde295efc2d1ff8612e079f5c74803748.600x338.jpg?t=1676995676"/>
                  </div>
                  <div className="w-full h-full object-cover">
                    <img src="https://cdn.akamai.steamstatic.com/steam/apps/668580/ss_9dedae959672ac7d7f2db16638a5b65f80bfe125.600x338.jpg?t=1676995676"/>
                  </div>
                  <div className="w-full h-full object-cover">
                    <img src="https://cdn.akamai.steamstatic.com/steam/apps/668580/ss_2fce9ef441a18361b9ab8f1b1ac70160c8226577.600x338.jpg?t=1676995676"/>
                  </div>
                  <div className="w-full h-full object-cover">
                    <img src="https://cdn.akamai.steamstatic.com/steam/apps/668580/ss_91b040e19e14baa32684a588c20246a305ae336e.600x338.jpg?t=1676995676"/>
                  </div>
              </tr>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
