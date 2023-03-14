import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth-slice";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [emailOrUserName, setEmailOrUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ emailOrUserName, password }));
  };

  const handleEmailOrUserName = (e) => setEmailOrUserName(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  return (
    <div className=" flex w-full ">
      <div className="w-1/2">
        <form className="  h-full space-y-4 p-8 " onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <div className="mb-6 grid gap-2 ">
              <label className="text-sky-400 text-sm">
                SIGN IN WITH ACCOUNT NAME
              </label>
              <input
                className="bg-white w-72 text-black pl-2"
                type=" text"
                value={emailOrUserName}
                onChange={handleEmailOrUserName}
              />
            </div>
            <div className="mb-6 grid gap-2">
              <label className="text-neutral-400 text-sm"> PASSWORD</label>
              <input
                className="bg-white w-72 text-black pl-2"
                type="password"
                value={password}
                onChange={handlePassword}
              />
            </div>
            {/* <div className="form-control">
              <label className="relative">
                <input type="checkbox" className="checkbox rounded-sm" />
                <span className="label-text absolute top- text-neutral-400 ml-2">
                  Remember me
                </span>
              </label>
            </div> */}
            <div className="place-self-center my-4">
              <button
                className="w-60 h-10 
                bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#287bff] via-[#07bcff] to-indigo-500 rounded-sm hover:bg-[radial-gradient(at_right_top,_#287bff,_#2cc6ff,_#287bff)]"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="w-1/2">
        <Link
          to="/register"
          className="relative w-52 h-52 top-14 left-16 inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
        >
          <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-10 bg-gradient-to-br from-[#287bff] via-[#07bcff] to-indigo-500 group-hover:opacity-100"></span>
          <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
          <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
          <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
          <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
          <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
          <span className="relative">Join Steam</span>
        </Link>
      </div>
    </div>
  );
}

{
  /* <form className="  h-full space-y-4 p-8 " onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <div className="mb-6 grid gap-2 ">
              <label className="text-sky-400 text-sm">
                SIGN IN WITH ACCOUNT NAME
              </label>
              <input
                className="bg-white w-80 text-black pl-2"
                type=" text"
                value={emailOrUserName}
                onChange={handleEmailOrUserName}
              />
            </div>
            <div className="mb-6 grid gap-2">
              <label className="text-neutral-400 text-sm"> PASSWORD</label>
              <input
                className="bg-white w-80 text-black pl-2"
                type="password"
                value={password}
                onChange={handlePassword}
              />
            </div>
            <div className="form-control">
              <label className="relative">
                <input type="checkbox" className="checkbox rounded-sm" />
                <span className="label-text absolute top- text-neutral-400 ml-2">
                  Remember me
                </span>
              </label>
            </div>
            <div className="place-self-center my-4">
              <button
                className="w-60 h-10 
                bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#287bff] via-[#07bcff] to-indigo-500 rounded-sm hover:bg-[radial-gradient(at_right_top,_#287bff,_#2cc6ff,_#287bff)]"
                type="submit"
                onClick={handleSubmit}
              >
                Sign In
              </button>
            </div>
          </div>
        </form>

        <div className=" flex justify-center border-r-blue-600 content-center py-28 ">
          <Link to="/register">
            <button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
              <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
              <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
              <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
              <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
              <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
              <span className="relative">Button Text</span>
            </button>
          </Link>
        </div> */
}
