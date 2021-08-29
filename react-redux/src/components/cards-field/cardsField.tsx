import React, { FC } from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';
import Card from '../card/card';

const CardsField: FC = () => {
  const { articles } = useTypedSelector((state) => state.articles);

  return (
    <ul className="cards-field">
      {articles.map((cardData, index) => {
        return (
          <Card key={index.toString()} cardData={cardData} index={index + 1} />
        );
      })}
    </ul>
  );
};

export default CardsField;
