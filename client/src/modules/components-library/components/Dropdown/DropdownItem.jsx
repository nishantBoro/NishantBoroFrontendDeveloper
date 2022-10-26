import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const DropdownItem = props => {
  const {
    id,
    text,
    isSelected,
    handleItemClick
  } = props;

  return (
    <div
      className=''
      onClick={handleItemClick.bind(null, { value: id })}
    >
      <span>{ text }</span>
      {
        isSelected && (
          <img src='https://w7.pngwing.com/pngs/80/808/png-transparent-verified-right-tick-ok-blue-icon-thumbnail.png' width='10' height='10' />
        )
      }
    </div>
  );
};

DropdownItem.propTypes = {

}

export default DropdownItem;
