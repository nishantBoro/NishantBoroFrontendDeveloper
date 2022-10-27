import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import capitalizeFirstLetter from '../../../../utils/capitalizeFirstLetter';

import styles from './style.module.css';
import { fieldNames } from '../../constants/searchBar';
function ResultsGrid(props) {
  const {
    list,
    handleCardClick
  } = props;
  
  return (
    <div className={classnames(styles.resultsGrid,'mt-12 grid')}>
      {
        Object.values(list).map(item => {
          const { status, type, serial } = item;
          const capitializedStatusName = capitalizeFirstLetter({ string: status });

          return (
            <div onClick={handleCardClick} className='bg-white-1 rounded-xl drop-shadow-md'>
              <div className='flex justify-between font-bold py-12 px-16 bg-blue-2 rounded-t-xl'>
                <p>{ capitalizeFirstLetter({ string: fieldNames.type }) }</p>
                <p>{ type }</p>
              </div>
              <div className='flex border-b-1 justify-between py-8 px-16'>
                <p>{ capitalizeFirstLetter({ string: fieldNames.status }) }</p>
                <p>{ capitializedStatusName }</p>
              </div>
              <div className='flex justify-between py-8 px-16'>
                <p>{ capitalizeFirstLetter({ string: fieldNames.serial }) }</p>
                <p>{ serial }</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

ResultsGrid.propTypes = {
  list: PropTypes.array,
  handleCardClick: PropTypes.func
};

export default ResultsGrid;
