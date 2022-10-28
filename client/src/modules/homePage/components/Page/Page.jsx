import React from 'react';

import { LoginModalContainer } from '../../../auth';
import { InfoCardModalContainer } from '../InfoCardModal';
import { SearchBarContainer } from '../SearchBar';
import { SearchResultsContainer } from '../SearchResults';

import { HeroBanner } from '../HeroBanner';

function Page() {  
  return (
    <>
      <LoginModalContainer />
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
