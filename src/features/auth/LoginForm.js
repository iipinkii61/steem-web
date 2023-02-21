import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth-slice";

export default function LoginForm() {
  const [emailOrUserName, setEmailOrUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(login({ emailOrUserName, password }));
  };

  const handleEmailOrUserName = (e) => setEmailOrUserName(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  return (
    <div className=" flex  ">
      <div className="   w-96 flex justify-center ">
        <form className="  h-full space-y-4 p-8 ">
          <div className="flex flex-col">
            <div className="mb-6 grid gap-2 ">
              <label className="text-sky-400 text-sm">
                SIGN IN WITH ACCOUNT NAME
              </label>
              <input
                className="bg-white w-80 text-black"
                type=" text"
                value={emailOrUserName}
                onChange={handleEmailOrUserName}
              />
            </div>
            <div className="mb-6 grid gap-2">
              <label className="text-neutral-400 text-sm"> PASSWORD</label>
              <input
                className="bg-white w-80 text-black"
                type="password"
                value={password}
                onChange={handlePassword}
              />
            </div>
            <div className="form-control">
              <label className="">
                <input
                  type="checkbox"
                  // checked="checked"
                  className="checkbox rounded "
                />
                <span className="label-text text-neutral-400">Remember me</span>
              </label>
            </div>
            <button
              className="btn bg-sky-400 rounded-none w-60 place-self-center normal-case "
              onClick={handleClick}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
      <div className=" flex justify-center border-r-blue-600 w-96 content-center py-28 ">
        <button className="btn btn-outline text-white ">Join Steam</button>
      </div>
    </div>
  );
}
