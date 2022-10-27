import React from 'react';

import capitalizeFirstLetter from '../../../../utils/capitalizeFirstLetter';
import getSpacedCamelCase from '../../../../utils/getSpacedCamelCase';

function InfoField(props) {  
  const { fieldVal, fieldName } = props;

  const capitializedFieldName = capitalizeFirstLetter({ string: String(fieldName) });
  const capitializedFieldVal = capitalizeFirstLetter({ string: String(fieldVal) });
  const spacedFieldName = getSpacedCamelCase({ string: capitializedFieldName });

  return (
    <div className='flex border-b-1 justify-between py-8 px-16'>
      <p>{ spacedFieldName }</p>
      <p className='text-right'>{ capitializedFieldVal }</p>
    </div>
  )
}

export default InfoField;
