import React from 'react';
import { Button } from '../../../components-library';

import { SearchBarContainer } from '../SearchBar';
import { SearchResultsContainer } from '../SearchResults';

function Page(props) {
  const {
    
  } = props;
  
  return (
    <div className='bg-gray-2'>
      <SearchBarContainer />
      <SearchResultsContainer />
    </div>
  )
}

export default Page;
