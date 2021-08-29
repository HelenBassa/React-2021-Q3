import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { ActionTypes, IRadioBtns, SortType } from '../../types';
import { RadioBtn } from '../radio-btn/radio-btn';

export const RadioBtns: FC<IRadioBtns> = ({ sortBy }) => {
  const dispatch = useDispatch();

  const setSortBy = (value: string) => {
    dispatch({ type: ActionTypes.SORT_BY, payload: value });
  };

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
