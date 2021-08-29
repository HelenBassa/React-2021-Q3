import React, { FC } from 'react';
import { IRadioBtn } from '../../types';

export const RadioBtn: FC<IRadioBtn> = ({ sortBy, sorting, setSortBy }) => {
  return (
    <div className="sorting-item">
      <input
        className="sorting-input"
        type="radio"
        name={sorting}
        id={sorting}
        value={sorting}
        checked={sortBy === sorting}
        onChange={() => setSortBy(sorting)}
      />
      <label className="sorting-label" htmlFor={sorting}>
        {sorting}
      </label>
    </div>
  );
};
