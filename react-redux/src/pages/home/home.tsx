import React, { FC, useState } from 'react';
import { ICardData, SortType } from '../../types';
import { SearchPanel } from '../../components/search-panel/searchPanel';
import CardsField from '../../components/cards-field/cardsField';

export const Home: FC = () => {
  const [state, setState] = useState<ICardData[]>([]);
  const [sortBy, setSortBy] = useState<SortType>(SortType.publishedAt);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [pageCounter, setPageCounter] = useState<number>(0);
  const [totalResults, setTotalResults] = useState<number>(0);

  return (
    <div className="container">
      <SearchPanel
        setState={setState}
        sortBy={sortBy}
        setSortBy={setSortBy}
        page={page}
        setPage={setPage}
        pageSize={pageSize}
        setPageSize={setPageSize}
        pageCounter={pageCounter}
        setPageCounter={setPageCounter}
        totalResults={totalResults}
        setTotalResults={setTotalResults}
      />
      <CardsField state={state} />
    </div>
  );
};
