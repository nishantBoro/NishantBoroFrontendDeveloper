import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import pageData from '../../constants/pageData';
import { fieldNames } from '../../constants/searchBar';

import capitalizeFirstLetter from '../../../../utils/capitalizeFirstLetter';

import styles from './style.module.css';

import { InfoCard } from '../InfoCard';

function ResultsGrid(props) {
  const { list, handleCardClick } = props;

  if (!Object.keys(list).length) {
    return <h2 className='text-16 font-bold pt-16 text-blue-3'>{ pageData.searchResults.noResults }</h2>
  }

  return (
    <div className={classnames(styles.resultsGrid, 'mt-12 grid')}>
      {Object.values(list).map((item) => {
        const { id, status, type, serial } = item;

        return (
          <div
            key={id}
            onClick={handleCardClick.bind(null, { selectedId: id })}
            className="bg-white-1 rounded-xl drop-shadow-md desktop:cursor-pointer"
          >
            <div className="font-bold py-12 px-16 bg-blue-2 text-gray-2 rounded-t-xl">
              <p>{`${capitalizeFirstLetter({ string: fieldNames.type })}:`}</p>
              <p>{type}</p>
            </div>
            <InfoCard status={status} serial={serial} />
          </div>
        );
      })}
    </div>
  );
}

ResultsGrid.propTypes = {
  list: PropTypes.array,
  handleCardClick: PropTypes.func
};

ResultsGrid.defaultProps = {
  list: []
}

export default ResultsGrid;
