import React, { FC } from 'react';
import img from '../../assets/cute-cat.jpg';

export const About: FC = () => {
  return (
    <div className="container">
      <div className="card full">
        <div className="card__description">
          <p className="description__title full">
            There are two means of refuge from the miseries of life: music and
            cats.
          </p>
        </div>
        <div className="card__img full">
          <img className="img" src={img} alt="Cat" />
        </div>
      </div>
    </div>
  );
};
