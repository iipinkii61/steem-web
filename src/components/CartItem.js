import { useDispatch } from "react-redux";
// import logo from "../assets/header_logo.png";
import { deleteItem } from "../redux/cart-slice";
export default function CartItem({ el, onClick }) {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between bg-[#18202C] mb-1 pr-4">
      <div className="flex items-center">
        <img
          src={el?.Game?.headerImage}
          className="h-11 bg-blue-400 m-4 cursor-pointer"
          onClick={() => onClick(el)}
        />
        <p className="cursor-pointer" onClick={() => onClick(el)}>
          {el?.Game?.name}
        </p>
      </div>
      <div className="">
        <p>{!el?.isFree && el?.Game?.priceOverview?.final_formatted}</p>
        <button
          href="/"
          className="text-xs"
          onClick={() => dispatch(deleteItem(el.id))}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
