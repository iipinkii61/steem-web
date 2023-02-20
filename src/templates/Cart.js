import logo from "../assets/header_logo.png";

export default function Cart() {
  return (
    <div className="bg-black text-white">
      <div className="flex justify-around items-start">
        <div className="flex items-center">
          <img src={logo} className="h-11" />
          <p>Game name</p>
        </div>
        <div>
          <p>฿13,000.00</p>
          <p>Remove</p>
        </div>
      </div>
      <div className="flex justify-between">
        <p>Estimated total</p>
        <p>฿ 13,000.00</p>
      </div>
      <div>
        Is this a purchase for yourself or is it a gift? Select one to continue
        to checkout.
      </div>
    </div>
  );
}
