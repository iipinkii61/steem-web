import React from 'react';
import Modal from '../components/Modal';
import LoginLayout from '../layouts/LoginLayout';
import backgroundImage from '../assets/login.jpg';

export default function Loginpage() {
  return (
    <>
      <div style={{ backgroundImage: `url(${backgroundImage})` }}>
        <LoginLayout />
      </div>
    </>
  );
}
