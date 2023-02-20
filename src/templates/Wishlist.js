import image from "../assets/header_logo.png";

export default function Wishlist() {
  return (
    <div className=" text-[#b2b8bd] bg-gray-600 py-4">
      <div className="flex justify-around">
        <img src={image} className="w-72" />
        <div className="flex flex-col justify-around">
          <p className="text-xl font-semibold text-white">GAME NAME</p>
          <p>Release date : 23 oct 2023</p>
        </div>
        <div className="flex items-center">
          <p>discount</p>
          <div className="flex items-center bg-black rounded-sm p-0.5">
            <p className="pl-2">฿229.00</p>
            <button className="bg-[#749D38] text-[#d2efa9] rounded-sm p-1 px-5 ml-3">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-end px-8 text-xs">Remove</div>
    </div>
  );
}
