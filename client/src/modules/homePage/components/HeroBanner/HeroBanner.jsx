import Image from 'next/image';
import React from 'react';

import pageData from '../../constants/pageData';

function HeroBanner() {
  return (
    <div className="bg-gray-5">
      <div className="max-w-[1200px] m-auto flex justify-between items-center">
        <div className="text-white-1 ml-16 w-1/2">
          <h1 className="text-20 desktop:text-40">
            {pageData.heroBanner.header}
          </h1>
          <h2 className="text-16 desktop:text-20">
            {pageData.heroBanner.subtitle}
          </h2>
        </div>
        <div className="py-24 w-1/2">
          <Image src="/images/heroBanner.png" width="460" height="460" alt='SpaceX' />
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
