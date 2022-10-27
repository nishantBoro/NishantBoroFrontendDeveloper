import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { fieldNames } from '../../constants/searchBar';

import capitalizeFirstLetter from '../../../../utils/capitalizeFirstLetter';

import styles from './style.module.css';

import { InfoCard } from '../InfoCard';
function ResultsGrid(props) {
  const {
    list,
    handleCardClick
  } = props;
  
  return (
    <div className={classnames(styles.resultsGrid,'mt-12 grid')}>
      {
        Object.values(list).map(item => {
          const { id, status, type, serial } = item;

          return (
            <div onClick={handleCardClick.bind(null, { selectedId: id })} className='bg-white-1 rounded-xl drop-shadow-md'>
              <div className='font-bold py-12 px-16 bg-blue-2 text-gray-2 rounded-t-xl'>
                <p>{ `${capitalizeFirstLetter({ string: fieldNames.type })}:` }</p>
                <p>{ type }</p>
              </div>
              <InfoCard status={status} serial={serial} />
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
