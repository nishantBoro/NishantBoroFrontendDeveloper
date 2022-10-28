import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

import { Button, Modal } from '../../components-library';

function LoginModal(props) {
  const {
    isOpen,
    handleModalClose,
    handleInputChange,
    handleInitLogin,
    values
  } = props;

  return (
    <Modal isOpen={isOpen} handleModalClose={handleModalClose}>
      <form className="bg-white-1 rounded-[16px] desktop:rounded-[8px] drop-shadow-md desktop:min-w-[500px]">
        <div className="flex items-center justify-between font-bold py-12 px-16 bg-blue-2 text-gray-2 rounded-t-[16px] desktop:rounded-t-[8px]">
          <h1>Login</h1>
          <Image
            className='desktop:cursor-pointer'
            src="/images/crossIcon.png"
            layout="fixed"
            width="24"
            height="24"
            onClick={handleModalClose}
          />
        </div>
        <div className="py-4 px-16">
          <p className="text-gray-4 text-14 pb-4">Username</p>
          <input
            className="text-black min-h-[47px] placeholder:text-black px-12 py-4 w-full border-1 border-gray-4 rounded-lg text-14"
            value={values.username}
            onChange={handleInputChange.bind(null, { id: 'username' })}
          />
        </div>
        <div className="py-4 px-16">
          <p className="text-gray-4 text-14 pb-4">Password</p>
          <input
            type='password'
            className="text-black min-h-[47px] placeholder:text-black px-12 py-4 w-full border-1 border-gray-4 rounded-lg text-14"
            value={values.password}
            onChange={handleInputChange.bind(null, { id: 'password' })}
          />
        </div>
        <div className="p-16">
          <Button onClick={handleInitLogin} className="font-bold w-full">
            Login
          </Button>
        </div>
      </form>
    </Modal>
  );
}

LoginModal.propTypes = {
  isOpen: PropTypes.bool,
  handleInputChange: PropTypes.func,
  handleInitLogin: PropTypes.func,
  values: PropTypes.object,
  handleModalClose: PropTypes.func
};

export default LoginModal;
