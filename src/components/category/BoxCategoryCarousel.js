import React from "react";

export default function BoxCategoryCarousel(props) {
   const {onClick, title,color, image} = props;
  return (
    <>
    <div
      className="h-[224px] w-[250px] relative bg-[#0a141d]"
      onClick={onClick}
    >
      <span className="absolute left-24 bottom-5 z-20 text-base font-semibold">
        {title}
      </span>
      <div className={`absolute w-full h-full z-10 bg-gradient-to-t from-${color}-900  to-transparent`}></div>
      <img
        className="w-full h-full z-0"
        src={image}
      />
    </div>
    </>
  );
}
