import PageMainLayout from "../layouts/PageMainLayout";
import logo from "../assets/header_logo.png";
import avatar from "../assets/blank.png";
import Footer from "../layouts/Footer";
export default function WishlistPage() {
  return (
    <>
      <div className="bg-[#202326] max-h-fit">
        <PageMainLayout>
          <div className="flex items-center gap-6 p-6 px-0">
            <img src={avatar} className="h-16" />
            <p className="text-2xl">USERNAME'S WISHLIST</p>
          </div>

          <div className="bg-[#405163E6] p-4 mt-2 rounded">
            <div className="flex justify-around gap-3">
              <img src={logo} className="h-12 bg-blue-400" />
              <div className="flex flex-col justify-around">
                <p className="text-xl font-semibold text-white">GAME NAME</p>
                <p className="text-xs">Release date : 23 oct 2023</p>
              </div>
              <div className="flex items-center">
                {/* <p>discount</p> */}
                <div className="flex items-center bg-[#00000033] text-sm rounded-sm p-0.5">
                  <p className="pl-2">฿229.00</p>
                  <button className="bg-[#749D38] text-[#d2efa9] rounded-sm p-1 px-3 ml-3">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-end px-8 text-xs">Remove</div>
          </div>
          <div className="bg-[#405163E6] p-4 mt-2 rounded">
            <div className="flex justify-around gap-3">
              <img src={logo} className="h-12 bg-blue-400 " />
              <div className="flex flex-col justify-around">
                <p className="text-xl font-semibold text-white">GAME NAME</p>
                <p className="text-xs">Release date : 23 oct 2023</p>
              </div>
              <div className="flex items-center">
                {/* <p>discount</p> */}
                <div className="flex items-center bg-[#00000033] text-sm rounded-sm p-0.5">
                  <p className="pl-2">฿229.00</p>
                  <button className="bg-[#749D38] text-[#d2efa9] rounded-sm p-1 px-3 ml-3">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-end px-8 text-xs">Remove</div>
          </div>
          <div className="bg-[#405163E6] p-4 mt-2 rounded">
            <div className="flex justify-around gap-3">
              <img src={logo} className="h-12 bg-blue-400" />
              <div className="flex flex-col justify-around">
                <p className="text-xl font-semibold text-white">GAME NAME</p>
                <p className="text-xs">Release date : 23 oct 2023</p>
              </div>
              <div className="flex items-center">
                {/* <p>discount</p> */}
                <div className="flex items-center bg-[#00000033] text-sm rounded-sm p-0.5">
                  <p className="pl-2">฿229.00</p>
                  <button className="bg-[#749D38] text-[#d2efa9] rounded-sm p-1 px-3 ml-3">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-end px-8 text-xs">Remove</div>
          </div>
        </PageMainLayout>
      </div>
      <Footer />
    </>
  );
}
