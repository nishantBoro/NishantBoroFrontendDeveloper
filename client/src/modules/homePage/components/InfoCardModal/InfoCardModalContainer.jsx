
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { closeInfoModal, selectSearchResultData, selectSearchResultMetaData } from '../../slices/pageData';

import InfoCardModal from './InfoCardModal';

function InfoCardModalContainer() {

  const dispatch = useDispatch();
  
  const { infoModal: { isOpen, selectedId } } = useSelector(state => selectSearchResultMetaData(state));
  const searchResData = useSelector(state => selectSearchResultData(state)) || {};
  const { status, type, reuse_count: reuseCount, water_landings: waterLandings, land_landings: landLandings, last_update: lastUpdate, serial } = searchResData[selectedId] || {};

  const handleModalClose = () => {
    dispatch(closeInfoModal());
  }

  return <InfoCardModal isOpen={isOpen} status={status} type={type} reuseCount={reuseCount} waterLandings={waterLandings} landLandings={landLandings} lastUpdate={lastUpdate} serial={serial} handleModalClose={handleModalClose} />;
}

export default InfoCardModalContainer;
