import React from "react";
import PaymentInfoForm from "../features/auth/PaymentInfoForm";
import visaImage from "../assets/visa.png";
import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import PageMainLayout from "../layouts/PageMainLayout";
import HeaderLogo from "../assets/header_logo.png";

export default function PaymentInfoLayout() {
  return (
    <>
      <Header />
      <PageMainLayout>
        <div className="w-full m-10 flex justify-end opacity-80">
          <img className="w-96" src={HeaderLogo} />
        </div>
        <div className="relative">
          <h1 className="  text-white text-2xl mb-5">
            Thank you for your purchase!
          </h1>
          <div className=" flex h-[140px] w-[660px] backdrop-blur-md backdrop-brightness-90">
            <div className="py-8 px-4 w-full text-s space-y-4">
              <p> An email confirmationhas been sent to you.</p>
              <p>
                Any digital items in this order are now registered to your
                account on Steam. To access your items, simply visit your
                library in Steam whenever you're ready.
              </p>
            </div>
          </div>

          <div className="absolute h-40 w-64 -right-24 top-0 space-y-6  px-2 backdrop-blur-md backdrop-brightness-90">
            <h1 className="  text-white text-xl">NEED ASSISTANCE?</h1>
            <h3 className="">
              For help or product support. please visit Steam Support online.
            </h3>
          </div>
          <h1 className="  text-[#6b94af] text-2xl ">Install your new games</h1>
          <div className="absolute h-40 w-96 left-0 top-60 space-y-6  px-2 backdrop-blur-md backdrop-brightness-90">
            <p>
              You'll find your new games in your library, or you can click the
              button below to install them now.
            </p>
            <h1 className="  text-white text-2xl underline ">Install games</h1>
          </div>
        </div>
        <Link to="/">
          <button
            className="w-60 h-10 absolute bottom-40
                bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#287bff] via-[#07bcff] to-indigo-500 rounded-sm hover:bg-[radial-gradient(at_right_top,_#287bff,_#2cc6ff,_#287bff)]"
          >
            Return to the store
          </button>
        </Link>
      </PageMainLayout>
    </>
  );
}
