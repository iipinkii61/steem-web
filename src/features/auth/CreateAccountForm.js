import validateRegister from "../../validator/validate-register";
import { useLocation } from "react-router-dom";
import * as authApi from "../../apis/auth-api";
import { toast } from "react-toastify";
import { useState } from "react";

export default function CreateAccountForm() {
  const location = useLocation();
  console.log(location);

  const [inputRegister, setInputRegister] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({});
  // inputRegister.email= location.state.email
  // console.log(inputRegister);
  const handleChangeInputRegister = (e) => {
    setInputRegister({ ...inputRegister, [e.target.name]: e.target.value });
  };

  const handleSubmitFormRegister = async (e) => {
    try {
      e.preventDefault();
      const addEmail = { ...inputRegister, email: location.state.state.email };
      const result = validateRegister(addEmail);
      console.log(result);
      if (result) {
        setError(result);
      } else {
        setError({});
        // inputRegister.email= location.state.email
        await authApi.registerApi(addEmail);
        setInputRegister({ userName: "", password: "", confirmPassword: "" });
        toast.success("Register success");
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    }
  };

  return (
    <div className=" flex w-full ">
      <div className="h-full mx-96">
        <form
          className="h-full space-y-4 p-8"
          onSubmit={handleSubmitFormRegister}
        >
          <div className="flex flex-col">
            <div className="mb-6 grid gap-2 ">
              <label className="text-neutral-400 text-sm">
                Steam Account Name
              </label>
              <input
                className="bg-zinc-700 w-80"
                type="text"
                name="userName"
                value={inputRegister.userName}
                error={error.userName}
                onChange={handleChangeInputRegister}
              />
            </div>
            <div className="mb-6 grid gap-2">
              <label className="text-neutral-400 text-sm">
                {" "}
                Choose Password
              </label>
              <input
                className="bg-zinc-700 w-80"
                type="password"
                name="password"
                value={inputRegister.password}
                error={error.password}
                onChange={handleChangeInputRegister}
              />
            </div>

            <div className="mb-6 grid gap-2">
              <label className="text-neutral-400 text-sm">
                {" "}
                Confirm Password
              </label>
              <input
                className="bg-zinc-700 w-80"
                type="password"
                name="confirmPassword"
                value={inputRegister.confirmPassword}
                error={error.confirmPassword}
                onChange={handleChangeInputRegister}
              />
            </div>

            <button
              className="btn bg-sky-500 border-slate-900 rounded-none w-60  my-8 normal-case"
              type="submit"
            >
              Done
            </button>
          </div>
        </form>
      </div>
      <div className=" -mx-96 my-6  ">
        <button className="btn bg-red-900  border-slate-900 rounded w-34 my-6 normal-case  text-xs ">
          Not Avaliable
        </button>
      </div>
    </div>
  );
}
