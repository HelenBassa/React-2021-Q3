import React, { FC } from 'react';
import { ICardField } from '../../types';
import Card from '../card/card';

const CardsField: FC<ICardField> = ({ state }) => {
  return (
    <ul className="cards-field">
      {state.map((cardData, index) => {
        return (
          <Card key={index.toString()} cardData={cardData} index={index + 1} />
        );
      })}
    </ul>
  );
};

export default CardsField;
