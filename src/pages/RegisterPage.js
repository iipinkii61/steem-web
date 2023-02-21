import React from "react";

import backgroundRegister from "../assets/register.jpg";
import RegisterLayout from "../layouts/RegisterLayout";

export default function Registerpage() {
  return (
    <>
      <div style={{ backgroundImage: `url(${backgroundRegister})` }}>
        <RegisterLayout />
      </div>
    </>
  );
}
