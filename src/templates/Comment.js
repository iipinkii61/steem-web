import avatar from "../assets/blank.png";

export default function Comment() {
  return (
    <div className="bg-gray-400 p-4">
      <p className="text-xl text-blueText ">Write a review for GAMENAME</p>
      <p className="text-xs">
        Please describe what you liked or disliked about this game and whether
        you recommend it to others.
      </p>
      <p className="text-xs">
        Please remember to be polite and follow the Rules and Guidelines.
      </p>
      <div className="flex mt-2">
        <img src={avatar} className="h-24" />
        <div className="mx-4 w-full">
          <textarea maxLength="8000" className="bg-[#222B35] w-full h-40" />
          <p className="text-xs">Do you recommend this game?</p>
          <div className="flex justify-between">
            <div className="text-blueText">
              <button className="mx-4">Yes</button>
              <button>No</button>
            </div>
            <button className="bg-black">Post review</button>
          </div>
        </div>
      </div>
    </div>
  );
}
