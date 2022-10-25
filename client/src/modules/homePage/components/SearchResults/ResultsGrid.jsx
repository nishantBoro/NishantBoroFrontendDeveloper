import React from 'react';
import PropTypes from 'prop-types';

function ResultsGrid(props) {
  const {
    list,
    handleCardClick
  } = props;
  
  return (
    <div>
      {
        Object.values(list).map(item => {
          const { status, type, serial } = item;

          return (
            <div onClick={handleCardClick}>
              <h1>{ type }</h1>
              <span>{ status }</span>
              <span>{ serial }</span>
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
