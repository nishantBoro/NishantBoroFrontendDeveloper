import React from 'react';

import { HeroBanner } from '../HeroBanner';
import { InfoCardModalContainer } from '../InfoCardModal';
import { SearchBarContainer } from '../SearchBar';
import { SearchResultsContainer } from '../SearchResults';

function Page() {  
  return (
    <>
      <HeroBanner />
      <div className='pt-24'>
        <div className='max-w-[1200px] m-auto'>
          <SearchBarContainer />
          <SearchResultsContainer />
          <InfoCardModalContainer />
        </div>
      </div>
    </>
  )
}

export default Page;
