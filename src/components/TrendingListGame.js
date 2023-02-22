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
            <tr>
              <td className="bg-[#22394b]">
                <img
                  src="https://cdn.akamai.steamstatic.com/steam/apps/668580/capsule_184x69.jpg?t=1676938877"
                  alt="Avatar Tailwind CSS Component"
                />
              </td>
              <td className="bg-[#22394b]">
                Name game
                <br />
                <span className="text-xs">description</span>
              </td>
              <td className="bg-[#22394b]">
                <span className="text-lg">Price</span>
              </td>
              <td className="bg-[#22394b]">
                <div className="flex flex-row bg-slate-800">
                  <div className="w-1/2">image</div>
                  <div className="w-1/2">image</div>
                  <div className="w-1/2">image</div>
                  <div className="w-1/2">image</div>
                </div>
              </td>
            </tr>


            <tr>
              <td className="bg-[#22394b]">
                <img
                  src="https://cdn.akamai.steamstatic.com/steam/apps/668580/capsule_184x69.jpg?t=1676938877"
                  alt="Avatar Tailwind CSS Component"
                />
              </td>
              <td className="bg-[#22394b]">
                Name game
                <br />
                <span className="text-xs">description</span>
              </td>
              <td className="bg-[#22394b]">
                <span className="text-lg">Price</span>
              </td>
              <td className="bg-[#22394b]">
                <div className="flex flex-row bg-slate-800">
                  <div className="w-1/2">image</div>
                  <div className="w-1/2">image</div>
                  <div className="w-1/2">image</div>
                  <div className="w-1/2">image</div>
                </div>
              </td>
            </tr>



          </tbody>
        </table>
      </div>
    </>
  );
}
