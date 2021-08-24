import React, { FC } from 'react';
import { ICardField } from '../../types';
import Card from '../card/card';

const CardsField: FC<ICardField> = ({ state }) => {
  return (
    <div className="cards-field">
      {state.map((cardData, index) => {
        return <Card key={index.toString()} cardData={cardData} />;
      })}
    </div>
  );
};

export default CardsField;
