import React from 'react';

export default function RegisterForm() {
  return (
    <div className="   h-full mx-96 ">
      <form className="  h-full space-y-4 p-8 ">
        <div className="flex flex-col">
          <div className="mb-6 grid gap-2 ">
            <label className="text-neutral-400 text-sm">Email Address</label>
            <input className="bg-zinc-700 w-80" type=" email" />
          </div>
          <div className="mb-6 grid gap-2">
            <label className="text-neutral-400 text-sm">
              {' '}
              Confirm Your Address
            </label>
            <input className="bg-zinc-700 w-80" type="password" />
          </div>
          <div class="form-control">
            <label class="">
              <input
                type="checkbox"
                checked="checked"
                className="checkbox rounded "
              />
              <span class="label-text text-neutral-400">
                {' '}
                I am 13 years of age or older and agree to the terms of the
                Steam Subscriber Agreement and the Valve Privacy Policy.
              </span>
            </label>
          </div>
          <button class="btn bg-sky-400 rounded-none w-60  my-8 normal-case">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
