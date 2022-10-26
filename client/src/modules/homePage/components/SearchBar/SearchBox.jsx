import React from 'react';
import PropTypes from 'prop-types';

import { dropdownItems, fieldNames, fieldPlaceholders } from '../../constants/searchBar';

import { Dropdown } from '../../../components-library';

function SearchBox(props) {
  const {
    id,
    fieldValue,
    handleDropdownClick,
    handleInputChange
  } = props;

  let selectedComponent = '';

  switch(id) {
    case fieldNames.serial: {
      selectedComponent = <input className='text-black placeholder:text-black px-16' value={fieldValue} onChange={handleInputChange} />
      break;
    }
    case fieldNames.type:
    case fieldNames.status: {
      selectedComponent = <Dropdown selectedText={fieldValue} items={dropdownItems[id]} handleItemClick={handleDropdownClick} />
      break;
    }
  }
  
  return (
    <div className='py-4 border-b-1 border-gray-3'>
      <p className='text-gray-4 text-14 px-16'>{ fieldPlaceholders[id] }</p>
      { selectedComponent }
    </div>
  )
}

SearchBox.propTypes = {
  id: PropTypes.string,
  fieldValue: PropTypes.string,
  handleSelectClick: PropTypes.func
};

export default SearchBox;
