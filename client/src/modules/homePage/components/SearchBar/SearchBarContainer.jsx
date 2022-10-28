import React from 'react';
import { useDispatch } from 'react-redux';

import { postSearch } from '../../slices/searchBar';
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

  return <SearchBar handleSearch={handleSearch} />;
}

export default SearchBarContainer;
