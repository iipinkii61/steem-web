import React from "react";
import PaymentInfoForm from "../features/auth/PaymentInfoForm";
import visaImage from "../assets/visa.png";
import { Link } from "react-router-dom";

export default function PaymentInfoLayout() {
  return (
    <div className="  bg-opacity-20 backdrop-blur-sm flex justify-center  h-full w-full">
      <div className="">
        <div className=" flex col-2 space-x-6 pt-40  ">
          <div>
            <h1 className="  text-white text-2xl ">
              {" "}
              Thank you for your purchase!
            </h1>
            <div className=" bg-slate-800 flex h-[140px] w-[660px]">
              <div className="py-8 px-4 w-full text-s space-y-4">
                <p> An email confirmationhas been sent to you.</p>
                <p>
                  Any digital items in this order are now registered to your
                  account on Steam. To access your items, simply visit your
                  library in Steam whenever you're ready.
                </p>
              </div>
            </div>
          </div>

          <div className="  ">
            <div className=" bg-slate-800 flex h-[120px] w-[360px]">
              <div className=" h-full w-full space-y-6  px-2">
                <h1 className="  text-white text-xl">NEED ASSISTANCE?</h1>
                <h3 className="">
                  For help or product support. please visit Steam Support
                  online.
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className=" py-6 space-y-1">
          <h1 className="  text-white text-2xl ">Install your new games</h1>
          <p>
            You'll find your new games in your library, or you can click the
            button below to install them now.
          </p>
          <h1 className="  text-white text-2xl underline ">Install games</h1>
        </div>
        <Link>
          <button class="btn-sm rounded bg-slate-600 normal-case box-border  w-30">
            Return to the store
          </button>
        </Link>
      </div>
    </div>
  );
}
