import React from 'react';

import { SearchBarContainer } from '../SearchBar';
import { SearchResultsContainer } from '../SearchResults';

function Page(props) {
  const {
    
  } = props;
  
  return (
    <div>
      <SearchBarContainer />
      <SearchResultsContainer />
    </div>
  )
}

export default Page;
