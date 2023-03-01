import React from "react";
import { Link } from "react-router-dom";

export default function VisapayForm() {
  return (
    <div className="">
      <div className="mx-4 my-6 space-y-2">
        <div className="space-y-3">
          <h5 className="text-xs"> Please select a payment method</h5>
          <select class=" h-8 w-60 bg-black rounded">
            <option disabled selected>
              Visa
            </option>
            <option>Visa</option>
          </select>
        </div>

        <div className="  ">
          <div className="flex col space-x-10 ">
            <div className="space-y-2">
              <h5 className="text-xs sp"> Card number</h5>
              <input
                type="text"
                className="input-sm w-60 max-w-xs h-8 text-white bg-black rounded"
              />
            </div>

            <div className="   flex col">
              <div className="space-y-2 space-x-6">
                <h5 className="text-xs mx-6 w-full"> Expiration date</h5>
                <select class=" w-[48px] h-8 max-w-xs bg-black rounded">
                  <option disabled selected className="">
                    --
                  </option>
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                  <option>04</option>
                  <option>05</option>
                  <option>06</option>
                  <option>07</option>
                  <option>08</option>
                  <option>09</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
              </div>

              <div className=" my-6 -mx-8">
                <select class=" w-20 h-8  max-w-xs bg-black rounded">
                  <option disabled selected className="">
                    ---
                  </option>
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                  <option>2026</option>
                  <option>2027</option>
                  <option>2028</option>
                  <option>2029</option>
                  <option>2030</option>
                  <option>2031</option>
                  <option>2032</option>
                  <option>2033</option>
                  <option>2034</option>
                  <option>2035</option>
                  <option>2036</option>
                  <option>2037</option>
                  <option>2038</option>
                  <option>2039</option>
                  <option>2040</option>
                  <option>2041</option>
                  <option>2042</option>
                </select>
              </div>

              <div className=" space-x-10 space-y-2">
                <h5 className="text-xs mx-8 w-full "> Security code</h5>
                <input
                  type="text"
                  className="input-sm w-12  h-8 text-white bg-black rounded"
                />{" "}
                ?
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-4 space-y-2">
        <h1 className="text-2xl ">BILLING INFORMATION</h1>

        <div className="flex col space-x-20">
          <div className="flex col space-x-1">
            <div className="space-y-2">
              <h5 className="text-xs sp"> First name</h5>
              <input
                type="text"
                className="input-sm w-28 h-8 text-white bg-black rounded "
              />
            </div>

            <div className="space-y-2">
              <h5 className="text-xs sp"> Last name</h5>
              <input
                type="text"
                className="input-sm w-28 h-8 text-white bg-black  rounded"
              />
            </div>
          </div>

          <div>
            <div className="space-y-2">
              <h5 className="text-xs sp"> City</h5>
              <input
                type="text"
                className="input-sm w-60 h-8 text-white bg-black rounded"
              />
            </div>
          </div>
        </div>

        <div className="flex col space-x-16">
          <div className="space-y-2">
            <h5 className="text-xs sp"> Billing address</h5>
            <input
              type="text"
              className="input-sm w-60 h-8 text-white bg-black rounded "
            />
          </div>
          <div className="space-y-2">
            <h5 className="text-xs sp"> Zip or postal code</h5>
            <input
              type="text"
              className="input-sm w-60 h-8 text-white bg-black rounded"
            />
          </div>
        </div>

        <div className="space-y-2">
          <h5 className="text-xs sp"> Billing address, line2</h5>
          <input
            type="text"
            className="input-sm w-60 h-8 text-white bg-black rounded"
          />
        </div>

        <div className="flex col space-x-16">
          <div className="space-y-2">
            <h5 className="text-xs"> County</h5>
            <select class=" w-60 h-8 bg-black rounded">
              <option disabled selected>
                Thailand
              </option>
              <option>Thailand</option>
            </select>
          </div>

          <div className="space-y-2">
            <h5 className="text-xs sp"> Phone number</h5>
            <input
              type="text"
              className="input-sm w-60 h-8 text-white bg-black rounded "
            />
          </div>
        </div>
      </div>

      <div className="mx-4 space-y-4">
        <div className="form-control my-6">
          <label className="">
            <input type="checkbox" className="checkbox rounded " />
            <span className="label-text text-white mx-2 ">
              Save my payment information so checkout is easy next time
            </span>
          </label>
        </div>
        <p className="text-sm">
          You'll have a chance to review your order before it's placed.
        </p>

        <div className="flex justify-end mt-10">
          <Link>
            <button class="btn-sm rounded bg-greenButton border-black normal-case box-border  w-24">
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
