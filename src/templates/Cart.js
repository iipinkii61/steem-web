import logo from "../assets/header_logo.png";

export default function Cart() {
  return (
    <div className="w-3/4">
      <div className="flex justify-between items-start bg-gray-600 mb-1">
        <div className="flex items-center">
          <img src={logo} className="h-11" />
          <p>Game name</p>
        </div>
        <div>
          <p>฿13,000.00</p>
          <p className="text-xs">Remove</p>
        </div>
      </div>
      <div className="bg-gray-400">
        <div className="flex justify-between font-bold">
          <p>Estimated total</p>
          <p>฿ 13,000.00</p>
        </div>
        <div className="flex justify-end">
          <button className="bg-green-800">;djsfkldjsf</button>
        </div>
      </div>
      <div className="flex justify-between my-3">
        <button>Continue Shopping</button>
        <p className="text-xs">Remove all items</p>
      </div>
    </div>
  );
}
