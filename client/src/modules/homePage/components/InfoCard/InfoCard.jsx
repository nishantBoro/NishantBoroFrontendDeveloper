import React from 'react';
import PropTypes from 'prop-types';

import { fieldNames } from '../../constants/searchBar';

import InfoField from './InfoField';

function InfoCard(props) {
  const {
    status,
    reuseCount,
    waterLandings,
    landLandings,
    lastUpdate,
    serial
  } = props;

  return (
    <>
      <InfoField
        fieldVal={status}
        fieldName={fieldNames.status}
        isBorderEnabled={false}
      />
      <InfoField fieldVal={reuseCount} fieldName={fieldNames.reuseCount} />
      <InfoField
        fieldVal={waterLandings}
        fieldName={fieldNames.waterLandings}
      />
      <InfoField fieldVal={landLandings} fieldName={fieldNames.landLandings} />
      <InfoField fieldVal={lastUpdate} fieldName={fieldNames.lastUpdate} />
      <InfoField fieldVal={serial} fieldName={fieldNames.serial} />
    </>
  );
}

InfoCard.propTypes = {
  status: PropTypes.string,
  reuseCount: PropTypes.string,
  waterLandings: PropTypes.string,
  landLandings: PropTypes.string,
  lastUpdate: PropTypes.string,
  serial: PropTypes.string
}

export default InfoCard;
