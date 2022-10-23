import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectSearchBarFieldValues, updateField } from '../../slices/searchBar';

import SearchBox from './searchBox';

function SearchBoxContainer(props) {
  const { id } = props;

  const dispatch = useDispatch();
  const fieldValue = useSelector(state => selectSearchBarFieldValues(state))[id];

  const handleInputChange = (e) => {
    const value = e.target.value;

    dispatch(updateField({ id, value }));
  }

  return <SearchBox id={id} fieldValue={fieldValue} handleInputChange={handleInputChange} />;
}

export default SearchBoxContainer;
