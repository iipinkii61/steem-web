import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeAll } from "../redux/cart-slice";

export default function CartAction() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="bg-[#18202C]">
        <div className="flex justify-between font-bold p-4">
          <p>Estimated total</p>
          <p>฿ 13,000.00</p>
        </div>
        <div className="text-xs px-4 pb-4">
          Is this a purchase for yourself or is it a gift? Select one to
          continue to checkout.
        </div>
        <div className="flex justify-end pr-4 pb-4">
          <button className="bg-[#749D38] text-[#d2efa9] rounded-sm p-1 px-5">
            Purchase for myself
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center my-3">
        <Link to="/">
          <button className="text-blueText bg-blueText/20  rounded-sm p-1.5 px-5 hover:bg-[#5F9EE4] hover:text-white">
            Continue Shopping
          </button>
        </Link>
        <button className="text-xs" onClick={() => dispatch(removeAll())}>
          Remove all items
        </button>
      </div>
    </>
  );
}
