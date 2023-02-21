import React from 'react';
import PaymentForm from '../features/auth/PaymentForm';

export default function PaymentLayout() {
  return (
    <div className=" bg-black bg-opacity-20 backdrop-blur-sm flex justify-center  border-2 border-solid border-red h-screen w-screen">
      <div className="   ">
        <h1 className="  text-white  my-2"> PAYMENT METHOD</h1>
        <div className=" bg-slate-800 flex h-[400px] w-[700px]">
          <PaymentForm />
        </div>
        <div className=" bg-slate-800 flex h-[300px] w-[450px]"></div>
      </div>
    </div>
  );
}
