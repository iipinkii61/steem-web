import React from "react";
import CreateAccountForm from "../features/auth/CreateAccountForm";

export default function CreateAccountLayout() {
  return (
    <div className=" bg-black bg-opacity-20 backdrop-blur-sm  border-2 border-transparent h-screen w-screen">
      <div className=" w-full flex-col  my-40 ">
        <h1 className="text-2xl text-white mx-96"> CREATE YOUR ACCOUNT</h1>
        <CreateAccountForm />
        {/* <div className="bg-black flex h-80 w-[700px]"></div> */}
      </div>
    </div>
  );
}
