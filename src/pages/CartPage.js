import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import PageMainLayout from "../layouts/PageMainLayout";
import logo from "../assets/header_logo.png";
export default function HomePage() {
  return (
    <>
      <Header />
      <PageMainLayout>
        <p className="pb-8 text-3xl">YOUR SHOPPING CART</p>
        <div className="w-full">
          {/* game list */}
          <div className="flex justify-between items-center bg-[#18202C] mb-2 pr-4">
            <div className="flex items-center">
              <img src={logo} className="h-11 bg-blue-400 m-4" />
              <p>Game name</p>
            </div>
            <div className="">
              <p>฿ 13,000.00</p>
              <button href="/" className="text-xs">
                Remove
              </button>
            </div>
          </div>
          {/* end game list */}

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
            <button className="text-blueText bg-blueText/20  rounded-sm p-1.5 px-5 hover:bg-[#5F9EE4] hover:text-white">
              Continue Shopping
            </button>
            <button className="text-xs">Remove all items</button>
          </div>
        </div>
      </PageMainLayout>
      <Footer />
    </>
  );
}
