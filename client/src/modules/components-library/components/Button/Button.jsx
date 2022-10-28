import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { variants } from '../../constants/button';

import styles from './style.module.css';

function Button(props) {
  const { variant, children, className, onClick, ...otherProps } = props;

  return (
    <button
      className={classnames(
        {
          [styles.primary]: variant === variants.primary,
          [styles.secondary]: variant === variants.secondary
        },
        styles.size,
        className
      )}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  variant: variants.primary,
  onClick: () => {
    /* noop */
  }
};

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
