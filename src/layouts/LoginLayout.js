import React from 'react';
import Modal from '../components/Modal';
import LoginForm from '../features/auth/LoginForm';

export default function LoginLayout() {
  return (
    <Modal>
      <LoginForm />
    </Modal>
  );
}
