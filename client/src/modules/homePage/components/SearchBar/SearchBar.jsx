import React from 'react';
import PropTypes from 'prop-types';

import pageData from '../../constants/pageData';
import { fieldNames } from '../../constants/searchBar';

import SearchBoxContainer from './SearchBoxContainer';

import { Button } from '../../../components-library';

function SearchBar(props) {
  const {
    handleSearch
  } = props;
  
  return (
    <div>
      <h2>
        {
          pageData.searchBar.header
        }
      </h2>
      <div className='p-8 bg-gray-1'>
        <SearchBoxContainer id={fieldNames.type} />
        <SearchBoxContainer id={fieldNames.status} />
        <SearchBoxContainer id={fieldNames.originalLaunch} />
      </div>
      <Button onClick={handleSearch}>{ pageData.searchBar.button }</Button>
    </div>
  )
}
SearchBar.propTypes = {
  str: PropTypes.string
};

export default SearchBar;
