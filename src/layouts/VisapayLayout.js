import React from "react";
import visaImage from "../assets/visa.png";
import VisapayForm from "../features/auth/VisapayForm";

export default function VisapayLayout() {
  return (
    <div className="  flex justify-center items-center h-full w-full ">
      <div className="flex col space-x-4 ">
        <div>
          <h1 className="text-2xl text-white my-2"> PAYMENT METHOD</h1>
          <div className="bg-gray-900 flex h-[670px] w-[616px]">
            <VisapayForm />
          </div>
        </div>

        <div className=" py-6  ">
          <div className=" bg-gray-900  h-[260px] w-[340px]  ">
            <div className=" h-full w-full">
              <h1 className="  text-white  px-2 py-2 text-xl">
                PAYMENT METHODS
              </h1>
              <div className="py-4 px-3">
                <h3 className="text-s">
                  We accept the following secure payment methods:
                </h3>
                <img src={visaImage} alt="Visa" />
                <h3 className="text-s">
                  When you submit your payment information your data is
                  protected by Secure Socket Laver (SSL) technology certified by
                  a digital certificate.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
