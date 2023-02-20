import React from 'react';

import backgroundRegister from '../Asset/image/register.jpg';
import CreateAccountLayout from '../layouts/CreateAccountLayout';

export default function CreateAccountPage() {
  return (
    <>
      <div style={{ backgroundImage: `url(${backgroundRegister})` }}>
        <CreateAccountLayout />
      </div>
    </>
  );
}
