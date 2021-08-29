import React, { FC } from 'react';
import { IRadioBtns, SortType } from '../../types';
import { RadioBtn } from '../radio-btn/radio-btn';

export const RadioBtns: FC<IRadioBtns> = ({ sortBy, setSortBy }) => {
  return (
    <div className="sorting">
      <RadioBtn
        sortBy={sortBy}
        sorting={SortType.relevancy}
        setSortBy={setSortBy}
      />
      <RadioBtn
        sortBy={sortBy}
        sorting={SortType.popularity}
        setSortBy={setSortBy}
      />
      <RadioBtn
        sortBy={sortBy}
        sorting={SortType.publishedAt}
        setSortBy={setSortBy}
      />
    </div>
  );
};
