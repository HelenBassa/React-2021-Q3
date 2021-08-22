import React, { FC } from 'react';
import { ICard } from '../../types';

const Card: FC<ICard> = ({ cardData }) => {
  return (
    <div className="card">
      <div className="card__description">
        <h3 className="description__title">
          {cardData.firstName} {cardData.lastName}
        </h3>
        <p className="description__category">
          {cardData.gender ? 'Female' : 'Male'}
        </p>
        <p className="description__text">Birth Date: {cardData.birthDate}</p>
        <p className="description__text">Country: {cardData.country}</p>
      </div>
    </div>
  );
};

export default Card;
