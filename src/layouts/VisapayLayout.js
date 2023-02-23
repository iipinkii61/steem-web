import React from "react";
import visaImage from "../assets/visa.png";
import VisapayForm from "../features/auth/VisapayForm";

export default function VisapayLayout() {
  return (
    <div className=" bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center h-full w-full pt-40">
      <div className="flex col space-x-6 pt-14 ">
        <div>
          <h1 className="text-2xl text-white my-2"> PAYMENT METHOD</h1>
          <div className="bg-slate-800 flex h-[800px] w-[700px]">
            <VisapayForm />
          </div>
        </div>

        <div className=" mx-4  ">
          <div className=" bg-slate-800 flex h-[300px] w-[450px]">
            <div className=" h-full w-full">
              <h1 className="  text-white  my-2 mx-2 text-xl">
                {" "}
                PAYMENT METHODS
              </h1>
              <h3 className="">
                We accept the following secure payment methods:
              </h3>
              <img src={visaImage} alt="Visa" className="px" />
              <h3>
                When you submit your payment information your data is protected
                by Secure Socket Laver (SSL) technology certified by a digital
                certificate.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
