import React from 'react';

import pageData from '../../constants/pageData';

import ResultsGridContainer from './ResultsGridContainer';
import PageNavigatorContainer from './PageNavigatorContainer';

function SearchResults() {
  return (
    <div className='m-16'>
      <span className='text-20 font-bold'>{ pageData.searchResults.header }</span>
      <ResultsGridContainer />
      <PageNavigatorContainer />
    </div>
  )
}

export default React.memo(SearchResults);
