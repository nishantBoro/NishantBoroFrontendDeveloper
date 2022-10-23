import React from 'react';
import { useDispatch } from 'react-redux';

import { postSearch } from '../../slices/searchBar';

import SearchBar from './SearchBar';

function SearchBarContainer() {

  const dispatch = useDispatch();

  const handleSearch = ({ query }) => {
    dispatch(postSearch({
      query
    }));
  }

  return <SearchBar handleSearch={handleSearch} />;
}

export default SearchBarContainer;
