import React from 'react';
import Image from 'next/image';

import { fieldNames } from '../../constants/searchBar';

import capitalizeFirstLetter from '../../../../utils/capitalizeFirstLetter';

import InfoField from './InfoField';
import { Modal } from '../../../components-library';

function InfoCardModal(props) {  
  const { isOpen, status, type, reuseCount, waterLandings, landLandings, lastUpdate, serial, handleModalClose } = props;

  return (
    <div>
      <Modal isOpen={isOpen} handleModalClose={handleModalClose}>
        <div className='bg-white-1 rounded-xl drop-shadow-md'>
          <div className='flex items-center justify-between font-bold py-12 px-16 bg-blue-2 text-gray-2 rounded-t-xl'>
            <div>
              <p>{ `${capitalizeFirstLetter({ string: fieldNames.type })}:` }</p>
              <p>{ type }</p>
            </div>
            <Image src='/images/crossIcon.png' layout='fixed' width='24' height='24' onClick={handleModalClose} />
          </div>
          <InfoField fieldVal={status} fieldName={fieldNames.status} />
          <InfoField fieldVal={reuseCount} fieldName={fieldNames.reuseCount} />
          <InfoField fieldVal={waterLandings} fieldName={fieldNames.waterLandings}/>
          <InfoField fieldVal={landLandings} fieldName={fieldNames.landLandings}/>
          <InfoField fieldVal={lastUpdate} fieldName={fieldNames.lastUpdate}/>
          <InfoField fieldVal={serial} fieldName={fieldNames.serial}/>
        </div>
      </Modal>
    </div>
  )
}

export default InfoCardModal;
