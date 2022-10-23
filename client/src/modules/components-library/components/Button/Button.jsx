import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { variants } from '../../constants/button';

import styles from './style.module.css';

function Button(props) {
  const {
    variant,
    children,
    className,
    onClick
  } = props;
  
  return (
    <button className={
      classnames({
        [styles.primary]: variant === variants.primary,
        [styles.secondary]: variant === variants.secondary
      }, styles.size, className)
    } onClick={onClick}>
      { children }
    </button>
  )
}

Button.defaultProps = {
  variant: variants.primary,
  onClick: () => {
    /* noop */
  }
}

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node
};

export default Button;
