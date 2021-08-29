import React, { ChangeEvent, FC } from 'react';
import { ISearchLine } from '../../types';

export const SearchLine: FC<ISearchLine> = ({
  isLoading,
  searchValue,
  setSearchValue,
}) => {
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
