import React, { FC } from 'react';
import { SearchPanel } from '../../components/search-panel/searchPanel';
import CardsField from '../../components/cards-field/cardsField';
import useTypedSelector from '../../hooks/useTypedSelector';

export const Home: FC = () => {
  const { page, pageSize, pageCounter } = useTypedSelector(
    (state) => state.page
  );

  const { sortBy } = useTypedSelector((state) => state.articles);

  return (
    <div className="container">
      <SearchPanel
        sortBy={sortBy}
        page={page}
        pageSize={pageSize}
        pageCounter={pageCounter}
      />
      <CardsField />
    </div>
  );
};
