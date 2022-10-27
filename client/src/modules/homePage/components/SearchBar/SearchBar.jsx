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
    <div className='m-16 bg-white-1 rounded-xl drop-shadow-md'>
      <h2 className='font-bold text-20 pb-8 p-16'>
        {
          pageData.searchBar.header
        }
      </h2>
      <div className=''>
        <SearchBoxContainer id={fieldNames.type} />
        <SearchBoxContainer id={fieldNames.status} />
        <SearchBoxContainer id={fieldNames.serial} />
      </div>
      <div className='p-16'>
        <Button className='font-bold w-full' onClick={handleSearch}>{ pageData.searchBar.button }</Button>
      </div>
    </div>
  )
}
SearchBar.propTypes = {
  handleSearch: PropTypes.func
};

export default SearchBar;
