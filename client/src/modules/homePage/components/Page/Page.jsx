import React from 'react';

import { HeroBanner } from '../HeroBanner';
import { SearchBarContainer } from '../SearchBar';
import { SearchResultsContainer } from '../SearchResults';

function Page() {  
  return (
    <>
      <HeroBanner />
      <div className='bg-gray-2'>
        <div className='max-w-[1200px] m-auto'>
          <SearchBarContainer />
          <SearchResultsContainer />
        </div>
      </div>
    </>
  )
}

export default Page;
