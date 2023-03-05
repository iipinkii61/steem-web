import React from "react";

export default function BoxCategoryCarousel(props) {
   const {onClick, title,color, image} = props;
  //  console.log(color);
  return (
    <>
    <div
      className="h-[224px] w-[250px] relative bg-[#0a141d]"
      onClick={onClick}
    >
      <span className="absolute w-full bottom-5 z-20 text-center text-base font-semibold">
        {title}
      </span>
      <div className={`absolute w-full h-full z-10 bg-gradient-to-t ${color}  to-transparent`}></div>
      <img
        className="w-full h-full z-0"
        src={image}
      />
    </div>
    </>
  );
}
