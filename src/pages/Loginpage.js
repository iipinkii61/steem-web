import React from 'react';
import Modal from '../components/Modal';
import LoginLayout from '../Layouts/LoginLayout';
import backgroundImage from '../Asset/image/login.jpg';

export default function Loginpage() {
  return (
    <>
      <div style={{ backgroundImage: `url(${backgroundImage})` }}>
        <LoginLayout />
      </div>
    </>
  );
}
