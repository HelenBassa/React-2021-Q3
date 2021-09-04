import React, { FC } from 'react';
import img from '../../assets/404-cat.jpg';

export const PageNotFound: FC = () => {
  return (
    <div className="container">
      <div className="card full">
        <div className="card__description">
          <p className="description__title full">Oooops!!! Page not found</p>
        </div>
        <div className="card__img full">
          <img className="img" src={img} alt="Cat" />
        </div>
      </div>
    </div>
  );
};
