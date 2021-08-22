import React, { FC, useState } from 'react';
import Form from '../form/form';
import Card from '../card/card';
import { ICardData } from '../../types';

const App: FC = () => {
  const [formValues, setFormValues] = useState<ICardData[]>([]);
  return (
    <div className="container">
      <Form setFormValues={setFormValues} />
      <div className="cards-field">
        {formValues.map((cardData, index) => {
          return <Card cardData={cardData} key={index} />;
        })}
      </div>
    </div>
  );
};

export default App;
