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
            <label className="">
              <input
                type="checkbox"
                checked="checked"
                className="checkbox rounded "
              />
              <span className="label-text text-neutral-400">
                {" "}
                I am 13 years of age or older and agree to the terms of the
                Steam Subscriber Agreement and the Valve Privacy Policy.
              </span>
            </label>
          </div>
          <Link to="/createaccount" state={{ state: isEmail }}>
            <button className="btn bg-sky-500 border-slate-900 rounded-none w-60 my-8 normal-case">
              Continue
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
