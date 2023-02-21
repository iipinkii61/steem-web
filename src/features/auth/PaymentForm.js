import React from 'react';

export default function PaymentForm() {
  return (
    <div className="mx-8 my-3">
      <div className="space-y-2">
        <h5 className="text-xs"> Please select a payment method</h5>
        <select class="select select-ghost w-full max-w-xs">
          <option disabled selected className="bg-sky-500">
            Mobile Banking
          </option>
          <option>Mobile Banking</option>
          <option>Visa</option>
        </select>
        <h5 className="text-sm ">
          If your billing address is not in Thailand, please set your store
          region preference
          <div class="form-control my-2">
            <label class="">
              <input
                type="checkbox"
                checked="checked"
                className="checkbox rounded "
              />
              <span class="label-text text-white">
                {' '}
                I am 13 years of age or older and agree to the terms of the
                Steam Subscriber Agreement and the Valve Privacy Policy.
              </span>
            </label>
          </div>
        </h5>
        <h5 className="text-sm">
          You'll have a chance to review your order before it's placed.
        </h5>
      </div>
      <div className="flex justify-end my-24">
        <button class="btn rounded bg-greenButton border-black normal-case box-border h-3 w-24">
          Continue
        </button>
      </div>
    </div>
  );
}
