import React from 'react';
import classnames from 'classnames';

import { NEXT_TEXT, PREV_TEXT } from '../../constants/pagination';

import { usePagination, DOTS } from '../../hooks/usePagination';

import { Button } from '../Button';

const Pagination = props => {
  const {
    onPageChange,
    totalPages,
    siblingCount = 1,
    currentPage,
    className
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalPages,
    siblingCount
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange({ updatedPageNo: currentPage + 1 });
  };

  const onPrevious = () => {
    onPageChange({ updatedPageNo: currentPage - 1 });
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div
      className={className}
    >
      {
        currentPage !== 1 && (
          <Button onClick={onPrevious} variant='secondary'>{ PREV_TEXT }</Button>
        )
      }
      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <span>...</span>;
        }

        return (
          <span className={classnames({
            selected: pageNumber === currentPage
          })} onClick={() => onPageChange({ updatedPageNo: pageNumber })}>{pageNumber}</span>
        );
      })}
      { currentPage !== lastPage && (
        <Button onClick={onNext} variant='secondary'>{ NEXT_TEXT }</Button>
      )}
    </div>
  );
};

export default Pagination;
