import React from "react";

export default function GenresTag({ tag }) {
  return (
    <div className="w-fit px-2 rounded-sm text-sm text-gray-300 bg-[#394149] w-15 h-5">
      {tag}
    </div>
  );
}
