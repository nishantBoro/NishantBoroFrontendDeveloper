import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import DropdownItem from './DropdownItem';

const Dropdown = props => {
  const {
    selectedText,
    items,
    handleItemClick
  } = props;

  return (
    <div
      className=''
    >
      <p>{ selectedText }</p>
      {
        Object.keys(items).map(key => {
          const { text, isSelected } = items[key];

          return <DropdownItem id={key} handleItemClick={handleItemClick} text={text} isSelected={isSelected} />
        })
      }
    </div>
  );
};

Dropdown.propTypes = {

}

export default Dropdown;
