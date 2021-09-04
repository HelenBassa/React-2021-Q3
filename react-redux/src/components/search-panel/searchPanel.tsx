import React, { ChangeEvent, FC, useState } from 'react';
import { AxiosResponse } from 'axios';
import { useDispatch } from 'react-redux';
import axiosInstance from '../../services/api';
import { ActionTypes, IGet200Articles, ISearchPanel } from '../../types';
import { SearchLine } from '../search-line/search-line';
import { RadioBtns } from '../radio-btns/radioBnts';
import { Pagination } from '../pagination/pagination';
import useTypedSelector from '../../hooks/useTypedSelector';

export const SearchPanel: FC<ISearchPanel> = ({
  sortBy,
  page,
  pageSize,
  pageCounter,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useDispatch();
  const { searchValue } = useTypedSelector((state) => state.articles);

  const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response: AxiosResponse<IGet200Articles> = await axiosInstance.get(
        `v2/everything?qInTitle=${searchValue}&sortBy=${sortBy}&pageSize=${pageSize}&page=${page}`
      );

      const { articles, totalResults } = response.data;
      dispatch({ type: ActionTypes.ADD_ARTICLE, payload: articles });
      dispatch({ type: ActionTypes.TOTAL_RESULTS, payload: totalResults });
    } catch (err) {
      dispatch({ type: ActionTypes.ADD_ARTICLE, payload: [] });
      throw new Error(err);
    } finally {
      setIsLoading(false);
      dispatch({ type: ActionTypes.PAGE_COUNTER, payload: page });
    }
  };

  return (
    <>
      <form className="search-panel" onSubmit={handleSubmit}>
        <SearchLine searchValue={searchValue} isLoading={isLoading} />
        <RadioBtns sortBy={sortBy} />
        <Pagination page={page} pageSize={pageSize} pageCounter={pageCounter} />
      </form>
    </>
  );
};
