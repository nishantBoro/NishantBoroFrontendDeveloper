import React from 'react';
import Image from 'next/image';

import { fieldNames } from '../../constants/searchBar';

import capitalizeFirstLetter from '../../../../utils/capitalizeFirstLetter';

import { InfoCard } from '../InfoCard';
import { Modal } from '../../../components-library';

function InfoCardModal(props) {  
  const { isOpen, status, type, reuseCount, waterLandings, landLandings, lastUpdate, serial, handleModalClose } = props;

  return (
    <Modal isOpen={isOpen} handleModalClose={handleModalClose}>
      <div className='bg-white-1 rounded-[16px] desktop:rounded-[8px] drop-shadow-md'>
        <div className='flex items-center justify-between font-bold py-12 px-16 bg-blue-2 text-gray-2 rounded-t-[16px] desktop:rounded-t-[8px]'>
          <div>
            <p>{ `${capitalizeFirstLetter({ string: fieldNames.type })}:` }</p>
            <p>{ type }</p>
          </div>
          <Image src='/images/crossIcon.png' layout='fixed' width='24' height='24' onClick={handleModalClose} />
        </div>
        <InfoCard status={status} reuseCount={reuseCount} waterLandings={waterLandings} landLandings={landLandings} lastUpdate={lastUpdate} serial={serial} />
      </div>
    </Modal>
  )
}

export default InfoCardModal;
