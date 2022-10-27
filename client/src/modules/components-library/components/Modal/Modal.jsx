import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './style.module.css';

const Modal = (props) => {
  const {
    isOpen,
    handleModalClose,
    overlayClassname,
    contentClassname,
    children
  } = props;

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);

  const handleModalContentClick = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
  };

  return (
      <div
        className={classnames(
          styles.overlay,
          {
            [styles.overlayOpen]: isOpen,
            [styles.overlayClose]: !isOpen
          },
          overlayClassname
        )}
        onClick={handleModalClose}
      >
        <div
          className={classnames(styles.content, {
            [styles.contentClose]: !isOpen,
            [styles.contentOpen]: isOpen
          }, contentClassname)}
          onClick={handleModalContentClick}
        >
          {children}
        </div>
      </div>
  );
};

Modal.defaultProps = {
  isOpen: false
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  handleCloseModal: PropTypes.func,
  contentClassname: PropTypes.string,
  overlayClassname: PropTypes.string,
  children: PropTypes.node
};

export default Modal;
