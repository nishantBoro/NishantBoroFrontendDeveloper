import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Image from 'next/image';

function DropdownItem(props) {
  const { id, text, isSelected, handleItemClick } = props;

  return (
    <div
      className={classnames(
        {
          'bg-blue-2 text-white-1': isSelected
        },
        'border-t-1 border-gray-3 flex justify-between p-12 items-center'
      )}
      onClick={handleItemClick.bind(null, { value: id })}
    >
      <span>{text}</span>
      {isSelected && (
        <span className="bg-blue-2">
          <Image
            src="/images/white_tick.png"
            layout="fixed"
            width="18"
            height="15"
          />
        </span>
      )}
    </div>
  );
}

DropdownItem.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  isSelected: PropTypes.bool,
  handleItemClick: PropTypes.func
}

export default DropdownItem;
