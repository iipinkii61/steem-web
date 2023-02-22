import React from "react";

export default function VisapayForm() {
  return (
    <div className="mx-8 my-3">
      <div className="space-y-4">
        <h5 className="text-xs"> Please select a payment method</h5>
        <select class="select select-ghost w-full max-w-xs">
          <option disabled selected className="bg-sky-500">
            Mobile Banking
          </option>
          <option>Mobile Banking</option>

          <option>Visa</option>
        </select>
      </div>
    </div>
  );
}
