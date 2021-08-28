import React, { ChangeEvent, FC } from 'react';
import { IPagination } from '../../types';

export const Pagination: FC<IPagination> = ({
  page,
  setPage,
  pageSize,
  setPageSize,
  totalResults,
  pageCounter,
}) => {
  const pageHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPage(+value);
  };

  const pageSizeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setPageSize(+value);
  };

  return (
    <div className="page">
      <div className="page-nav">
        <div className="page-item">
          <label className="result-label" htmlFor="pages">
            Result per page:
          </label>
          <select
            className="result-input"
            id="pages"
            name="pages"
            onChange={pageSizeHandler}
            value={pageSize}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </div>
        <div className="page-item">
          <label className="page-label" htmlFor="page">
            Page:
          </label>
          <input
            className="page-input"
            type="number"
            name="page"
            onChange={pageHandler}
            value={page}
          />
        </div>
      </div>
      {totalResults ? (
        <div className="page-info">
          <p className="page-info-text">
            Current page:{' '}
            <span>
              {pageCounter}/{Math.ceil(totalResults / pageSize)}
            </span>
          </p>
          <p className="page-info-text">
            Total Results: <span>{totalResults}</span>
          </p>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
