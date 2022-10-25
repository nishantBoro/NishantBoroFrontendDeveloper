import React from 'react';
import PropTypes from 'prop-types';

import { fieldPlaceholders } from '../../constants/searchBar';

function SearchBox(props) {
  const {
    id,
    fieldValue,
    handleInputChange
  } = props;
  
  return (
    <div className=''>
      <input onChange={handleInputChange} placeholder={fieldPlaceholders[id]} value={fieldValue}/>
    </div>
  )
}

SearchBox.propTypes = {
  id: PropTypes.string,
  fieldValue: PropTypes.string,
  handleInputChange: PropTypes.func
};

export default SearchBox;
