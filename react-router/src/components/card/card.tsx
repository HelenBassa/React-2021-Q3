import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ICard } from '../../types';

const Card: FC<ICard> = ({ cardData, index }) => {
  const { title, author, description, publishedAt, urlToImage } = cardData;

  return (
    <Link
      style={{ textDecoration: 'none' }}
      key={index.toString()}
      to={{
        pathname: `/details/${index}`,
        state: { cardData },
      }}
    >
      <div className="card">
        <div className="card__img">
          <img src={urlToImage} alt={title} />
        </div>
        <div className="card__description">
          <p className="description__title">{title}</p>
          <p className="description__author">Author: {author}</p>
          <p className="description__category">Published at: {publishedAt}</p>
          <p className="description__text">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
