import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import validateCheckEmail from "../../validator/validate-checkEmail";
import * as authApi from "../../apis/auth-api";
import { useNavigate } from "react-router-dom";
import CreateAccountForm from "./CreateAccountForm";

export default function RegisterForm() {
  const [isEmail, setIsEmail] = useState({
    email: "",
    confirmEmail: "",
  });
  const [error, setError] = useState({});

  const navigate = useNavigate();

  const handleInputEmail = (e) => {
    setIsEmail({ ...isEmail, [e.target.name]: e.target.value });
  };

  const handleSubmitEmailForm = async (e) => {
    try {
      e.preventDefault();
      const checkEmail = validateCheckEmail(isEmail);
      if (checkEmail) {
        setError(checkEmail);
      } else {
        setError({});
        const result = await authApi.checkEmailApi(isEmail);
        if (result.data) {
          const err = new Error();
          throw err;
        }
        // navigate("/createaccount", { state: isEmail });
        toast.success("Please verify your email");
      }
    } catch (err) {
      toast.error(err.response?.data.message);
    }
  };

  return (
    <div className="h-full mx-96 ">
      <form className="h-full space-y-4 p-8 " onSubmit={handleSubmitEmailForm}>
        <div className="flex flex-col">
          <div className="mb-6 grid gap-2 ">
            <label className="text-neutral-400 text-sm">Email Address</label>
            <input
              className="bg-zinc-700 w-80"
              type="email"
              name="email"
              value={isEmail.email}
              error={error.email}
              onChange={handleInputEmail}
            />
          </div>
          <div className="mb-6 grid gap-2">
            <label className="text-neutral-400 text-sm">
              {" "}
              Confirm Your Email Address
            </label>
            <input
              className="bg-zinc-700 w-80"
              type="email"
              name="confirmEmail"
              value={isEmail.confirmEmail}
              error={error.email}
              onChange={handleInputEmail}
            />
          </div>
          <div className="form-control">
            <label className="relative">
              <input
                type="checkbox"
                checked="checked"
                className="checkbox rounded "
              />
              <span className="absolute label-text text-neutral-400 left-8 top-1">
                {" "}
                I am 13 years of age or older and agree to the terms of the
                Steam Subscriber Agreement and the Valve Privacy Policy.
              </span>
            </label>
          </div>
          <Link to="/createaccount">
            <button
              className="w-60 h-10 mt-6
                bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#287bff] via-[#07bcff] to-indigo-500 rounded-sm hover:bg-[radial-gradient(at_right_top,_#287bff,_#2cc6ff,_#287bff)]"
              type="submit"
            >
              Continue
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
