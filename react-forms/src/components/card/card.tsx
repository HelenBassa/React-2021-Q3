import React from 'react';

const Card: React.FC = () => {
  return (
    <div className="card">
      <div className="card__description">
        <h3 className="description__title">Cute Cat</h3>
        <p className="description__text">
          There are two means of refuge from the miseries of life: music and
          cats.
        </p>
        <p className="description__author">Albert Schweitzer</p>
        <p className="description__category">Cats</p>
        <button className="description__button">Read More</button>
      </div>
    </div>
  );
};
export default Card;
