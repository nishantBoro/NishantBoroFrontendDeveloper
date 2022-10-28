import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import getSpacedCamelCase from '../../../../utils/getSpacedCamelCase';
import capitalizeFirstLetter from '../../../../utils/capitalizeFirstLetter';

function InfoField(props) {
  const { fieldVal, fieldName, isBorderEnabled } = props;

  if (!fieldVal) {
    return null;
  }

  const capitializedFieldName = capitalizeFirstLetter({
    string: String(fieldName)
  });
  const capitializedFieldVal = capitalizeFirstLetter({
    string: String(fieldVal)
  });
  const spacedFieldName = getSpacedCamelCase({ string: capitializedFieldName });

  return (
    <div
      className={classnames(
        { 'border-t-1': isBorderEnabled },
        'flex justify-between py-8 px-16'
      )}
    >
      <p className="w-[33%]">{`${spacedFieldName}:`}</p>
      <p className="text-right w-[50%]">{capitializedFieldVal}</p>
    </div>
  );
}

InfoField.defaultProps = {
  isBorderEnabled: true
};

InfoField.propTypes = {
  fieldVal: PropTypes.string,
  fieldName: PropTypes.string,
  isBorderEnabled: PropTypes.bool
}

export default InfoField;
