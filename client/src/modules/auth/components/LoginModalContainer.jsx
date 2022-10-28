import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  initLogin,
  selectIsLoginModalOpen,
  selectUserFieldValues,
  toggleLoginModalVisibility,
  updateField
} from '../slices/auth';

import LoginModal from './LoginModal';

function LoginModalContainer() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => selectIsLoginModalOpen(state));
  const values = useSelector((state) => selectUserFieldValues(state));

  const handleModalClose = () => {
    dispatch(toggleLoginModalVisibility());
  };

  const handleInputChange = ({ id }, e) => {
    const { value } = e.target;

    dispatch(updateField({ id, value }));
  };

  const handleInitLogin = () => {
    dispatch(initLogin());
  };

  return (
    <LoginModal
      handleInitLogin={handleInitLogin}
      values={values}
      isOpen={isOpen}
      handleModalClose={handleModalClose}
      handleInputChange={handleInputChange}
    />
  );
}

export default LoginModalContainer;
