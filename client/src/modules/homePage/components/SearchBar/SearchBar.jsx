import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import pageData from '../../constants/pageData';
import { fieldNames } from '../../constants/searchBar';

import style from './style.module.css';

import SearchBoxContainer from './SearchBoxContainer';

import { Button } from '../../../components-library';

function SearchBar(props) {
  const { handleSearch, handleReset } = props;

  return (
    <div className={classNames(style.searchBar, "mx-16 bg-white-1 rounded-xl")}>
      <h2 className="font-bold text-20 pb-8 p-16">
        {pageData.searchBar.header}
      </h2>
      <form onReset={handleReset} onSubmit={handleSearch} className="desktop:flex desktop:pb-16 desktop:pr-16">
        <SearchBoxContainer id={fieldNames.type} isMandatory />
        <SearchBoxContainer id={fieldNames.status} />
        <SearchBoxContainer id={fieldNames.serial} />
        <div className="px-16 pt-16 desktop:mr-8 desktop:w-1/5 desktop:pb-4 desktop:p-0 desktop:self-end">
          <Button className="min-h-[48px] font-bold w-full">
            {pageData.searchBar.button}
          </Button>
        </div>
        <div className="px-16 pb-16 pt-8 desktop:w-1/5 desktop:pb-4 desktop:p-0 desktop:self-end">
          <Button variant='secondary' className="min-h-[48px] font-bold w-full" type='reset'>
            {pageData.searchBar.resetCta}
          </Button>
        </div>
      </form>
    </div>
  );
}
SearchBar.propTypes = {
  handleSearch: PropTypes.func,
  handleReset: PropTypes.func
};

export default SearchBar;
