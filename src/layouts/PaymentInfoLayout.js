import React from "react";
import PaymentInfoForm from "../features/auth/PaymentInfoForm";
import visaImage from "../assets/visa.png";

export default function PaymentInfoLayout() {
  return (
    <div className=" bg-black bg-opacity-20 backdrop-blur-sm flex justify-center  h-screen w-screen">
      <div className=" flex col space-x-6 pt-40  ">
        <div>
          <h1 className="  text-white text-2xl my-2"> PAYMENT METHOD</h1>
          <div className=" bg-slate-800 flex h-[400px] w-[700px]">
            <PaymentInfoForm />
          </div>
        </div>

        <div className="  ">
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
