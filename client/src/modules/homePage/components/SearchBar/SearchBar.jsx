import React from 'react';
import PropTypes from 'prop-types';

import pageData from '../../constants/pageData';
import { fieldNames } from '../../constants/searchBar';

import SearchBoxContainer from './SearchBoxContainer';

import { Button } from '../../../components-library';

function SearchBar(props) {
  const { handleSearch } = props;

  return (
    <div className="mx-16 bg-white-1 rounded-xl drop-shadow-md">
      <h2 className="font-bold text-20 pb-8 p-16">
        {pageData.searchBar.header}
      </h2>
      <form onSubmit={handleSearch} className="desktop:flex desktop:pb-16 desktop:pr-16">
        <SearchBoxContainer id={fieldNames.type} isMandatory />
        <SearchBoxContainer id={fieldNames.status} />
        <SearchBoxContainer id={fieldNames.serial} />
        <div className="p-16 desktop:pb-4 desktop:p-0 desktop:self-end">
          <Button className="font-bold w-full">
            {pageData.searchBar.button}
          </Button>
        </div>
      </form>
    </div>
  );
}
SearchBar.propTypes = {
  handleSearch: PropTypes.func
};

export default SearchBar;
