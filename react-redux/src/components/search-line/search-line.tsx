import React, { ChangeEvent, FC } from 'react';
import { useDispatch } from 'react-redux';
import { ActionTypes, ISearchLine } from '../../types';

export const SearchLine: FC<ISearchLine> = ({ isLoading, searchValue }) => {
  const dispatch = useDispatch();

  const setSearchValue = (value: string) => {
    dispatch({ type: ActionTypes.SEARCH_VALUE, payload: value });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  return (
    <div>
      <label htmlFor="search"></label>
      <input
        id="search"
        type="text"
        value={searchValue}
        onChange={handleChange}
        disabled={isLoading}
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Searching ...' : 'Search'}
      </button>
    </div>
  );
};
