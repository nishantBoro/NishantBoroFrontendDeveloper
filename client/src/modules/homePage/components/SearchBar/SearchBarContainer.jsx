import React from 'react';
import { useDispatch } from 'react-redux';

import { postSearch, resetFieldValues } from '../../slices/searchBar';
import { toggleLoginModalVisibility } from '../../../auth/slices/auth';

import SearchBar from './SearchBar';

function SearchBarContainer() {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    
    if (!localStorage.getItem('jwtToken')) {
      dispatch(toggleLoginModalVisibility());
      return;
    }
    dispatch(postSearch());
  };

  const handleReset = (e) => {
    e.preventDefault();
    
    dispatch(resetFieldValues());
  }

  return <SearchBar handleReset={handleReset} handleSearch={handleSearch} />;
}

export default SearchBarContainer;
