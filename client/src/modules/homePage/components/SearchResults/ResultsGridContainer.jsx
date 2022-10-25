import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectSearchResultData } from '../../slices/pageData';

import ResultsGrid from './ResultsGrid';

function ResultsGridContainer() {

  const dispatch = useDispatch();

  const list = useSelector(state => selectSearchResultData(state));

  const handleCardClick = () => {
    // dispatch(postSearch());
  }

  return <ResultsGrid list={list} handleCardClick={handleCardClick} />;
}

export default ResultsGridContainer;
