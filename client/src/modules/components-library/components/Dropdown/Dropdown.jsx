import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Image from 'next/image';

import DropdownItem from './DropdownItem';

const Dropdown = props => {
  const {
    selectedText,
    items,
    handleItemClick,
    className
  } = props;
  const { text, id } = selectedText;

  const [isDropDownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropDownOpen);
  }

  const handleItemSelectClick = ({ key, text }) => {
    setIsDropdownOpen(false);
    handleItemClick({ id: key, value: text });
  }

  return (
    <div
      className={classnames('relative', className)}
    >
      <div 
        className={classnames(
          {
            'border-b-1': !isDropDownOpen,
            'rounded-b-none': isDropDownOpen
          },
          'border-t-1 border-l-1 border-r-1 border-gray-4 p-12 rounded-lg text-black font-semibold flex justify-between items-center text-14')
          }  
          onClick={handleDropdownClick}>
        <p>
          { text }
        </p>
        <span className={
          classnames({
            'rotate-180 transition-transform': isDropDownOpen
          })
        }>
          <Image src='/images/black_dropdown.png' layout='fixed' width='18' height='10'/>
        </span>
      </div>
      {
        isDropDownOpen && (
          <div className='border-l-1 border-r-1 border-b-1 rounded-t-none border-gray-4 w-full rounded-lg text-black min-h-[100px] absolute bg-white-1 z-40'>
            {
              Object.keys(items).map(key => {
                const { text } = items[key];
                const isSelected = key === id;

                return <DropdownItem id={key} handleItemClick={handleItemSelectClick.bind(null, { key, text })} text={text} isSelected={isSelected} />
              })
            }
          </div>
        )
      }
    </div>
  );
};

Dropdown.propTypes = {

}

export default Dropdown;
