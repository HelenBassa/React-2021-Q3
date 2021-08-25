import React, { FC } from 'react';
import { ICard } from '../../types';

const Card: FC<ICard> = ({ cardData }) => {
  return (
    <div className="card">
      <div className="card__img">
        <img src={cardData.urlToImage} alt={cardData.title} />
      </div>
      <div className="card__description">
        <a className="description__title" href={cardData.url}>
          {cardData.title}
        </a>
        <p className="description__author">Author: {cardData.author}</p>
        <p className="description__category">
          Published at: {cardData.publishedAt}
        </p>
        <p className="description__text">{cardData.description}</p>
      </div>
    </div>
  );
};

export default Card;
