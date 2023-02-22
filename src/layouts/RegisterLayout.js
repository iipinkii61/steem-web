import React from "react";
import RegisterForm from "../features/auth/RegisterForm";

export default function RegisterLayout() {
  return (
<<<<<<< HEAD
    <div className=" bg-black bg-opacity-20 backdrop-blur-sm border-2 border-solid border-red h-screen w-screen ">
      <div className=" w-full flex-col  my-40 ">
=======
    <div className=" bg-black bg-opacity-20 backdrop-blur-sm border-2 border-transparent h-screen w-screen">
      <div className=" w-full flex-col h-full my-40 ">
>>>>>>> dev
        <h1 className="text-2xl text-white mx-96"> CREATE YOUR ACCOUNT</h1>
        <RegisterForm />
        {/* <div className="bg-black flex h-80 w-[700px]"></div> */}
      </div>
    </div>
  );
}
