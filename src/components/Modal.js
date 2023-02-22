import React from "react";
import LoginForm from "../features/auth/LoginForm";

export default function modal() {
  return (
    <>
      <div className=" bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center border-2 border-solid border-red h-screen w-screen">
        <div className="grid gap-10  ">
          <h1 className="text-2xl text-white"> SIGN IN</h1>
          <div className="bg-black flex h-80 w-[700px]">
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
}
