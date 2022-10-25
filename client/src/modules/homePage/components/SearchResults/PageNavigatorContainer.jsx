import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { postSearch } from '../../slices/searchBar';
import { selectSearchResultMetaData, updateMetaData } from '../../slices/pageData';

import { Pagination } from '../../../components-library';

function PageNavigatorContainer() {

  const dispatch = useDispatch();

  const { currentPage, totalPages } = useSelector(state => selectSearchResultMetaData(state));

  const onPageChange = ({ updatedPageNo }) => {
    dispatch(updateMetaData({ currentPage: updatedPageNo }));
    dispatch(postSearch({ pageNo: updatedPageNo }));
  }

  return (
    <Pagination
      onPageChange={onPageChange}
      totalPages={totalPages}
      siblingCount={2}
      currentPage={currentPage} 
    />
  )
}

export default PageNavigatorContainer;
