import React from 'react';

export default function LoginForm() {
  return (
    <div className=" flex  ">
      <div className="   w-96 flex justify-center ">
        <form className="  h-full space-y-4 p-8 ">
          <div className="flex flex-col">
            <div className="mb-6 grid gap-2 ">
              <label className="text-sky-400 text-sm">
                SIGN IN WITH ACCOUNT NAME
              </label>
              <input className="bg-white w-80" type=" email" />
            </div>
            <div className="mb-6 grid gap-2">
              <label className="text-neutral-400 text-sm"> PASSWORD</label>
              <input className="bg-white w-80" type="password" />
            </div>
            <div class="form-control">
              <label class="">
                <input
                  type="checkbox"
                  checked="checked"
                  className="checkbox rounded "
                />
                <span class="label-text text-neutral-400">Remember me</span>
              </label>
            </div>
            <button class="btn bg-sky-400 rounded-none w-60 place-self-center normal-case ">
              Sign In
            </button>
          </div>
        </form>
      </div>
      <div className=" flex justify-center border-r-blue-600 w-96 content-center py-28 ">
        <button class="btn btn-outline text-white ">Join Steam</button>
      </div>
    </div>
  );
}
