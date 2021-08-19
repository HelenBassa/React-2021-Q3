import React from 'react';
import CardsField from '../cards-field/cardsField';
import SearchPanel from '../search-panel/searchPanel';

const App: React.FC = () => {
  return (
    <div className="container">
      <SearchPanel />
      <CardsField />
    </div>
  );
};

export default App;
