import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth-slice";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [emailOrUserName, setEmailOrUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   console.log(e)
  //   dispatch(login({ emailOrUserName, password }));
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ emailOrUserName, password }));
  };

  const handleEmailOrUserName = (e) => setEmailOrUserName(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  return (
    <div className=" flex  ">
      <div className="   w-96 flex justify-center ">
        <form className="  h-full space-y-4 p-8 " onSubmit={handleSubmit}>
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
                <span className="label-text text-neutral-400 mx-2">
                  Remember me
                </span>
              </label>
            </div>
            <div className="place-self-center my-4">
              <button
                className="btn  bg-sky-500 border-slate-900 rounded-none w-60 normal-case"
                type="submit"
                onClick={handleSubmit}
              >
                Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className=" flex justify-center border-r-blue-600 w-96 content-center py-28 ">
        <Link to="/register">
          <button className="btn btn-outline text-white ">Join Steam</button>
        </Link>
      </div>
    </div>
  );
}
