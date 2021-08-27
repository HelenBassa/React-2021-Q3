import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import axiosInstance from '../../services/api';
import { IGet200Articles, ISearchPanel } from '../../types';
import { SearchLine } from '../search-line/search-line';
import { RadioBtns } from '../radio-btns/radioBnts';
import { Pagination } from '../pagination/pagination';

export const SearchPanel: FC<ISearchPanel> = ({
  setState,
  sortBy,
  setSortBy,
  page,
  setPage,
  pageSize,
  setPageSize,
  pageCounter,
  setPageCounter,
  totalResults,
  setTotalResults,
  // setIsDataStatus,
}) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const store = JSON.parse(sessionStorage.getItem('data') || '[]');
    setState(store);
  }, []);

  // const setErrorStatus = (status: number) => {
  //   if (status === StatusCode.BadRequest) {
  //     setIsDataStatus('Data not found. Try something else ..');
  //   }
  //   if (status === StatusCode.UpgradeRequired) {
  //     setIsDataStatus('Server side error. Enter other data..');
  //   }
  //   if (status === StatusCode.TooManyRequests) {
  //     setIsDataStatus('Limit of server requests. Try later..');
  //   }
  //   if (status === StatusCode.ServerErrorInternal) {
  //     setIsDataStatus('Server side error. Try later...');
  //   }
  // };

  const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response: AxiosResponse<IGet200Articles> = await axiosInstance.get(
        `v2/everything?qInTitle=${searchValue}&sortBy=${sortBy}&pageSize=${pageSize}&page=${page}`
      );

      setState(response.data.articles);
      sessionStorage.setItem('data', JSON.stringify(response.data.articles));
      setTotalResults(response.data.totalResults);
      // setIsDataStatus('');
    } catch (err) {
      setState([]);
      // setErrorStatus(err.response.status);
      throw new Error(err);
    } finally {
      setIsLoading(false);
      setPageCounter(page);
    }
  };

  return (
    <>
      <form className="search-panel" onSubmit={handleSubmit}>
        <SearchLine
          searchValue={searchValue}
          isLoading={isLoading}
          setSearchValue={setSearchValue}
        />
        <RadioBtns setSortBy={setSortBy} sortBy={sortBy} />
        <Pagination
          page={page}
          setPage={setPage}
          pageSize={pageSize}
          setPageSize={setPageSize}
          totalResults={totalResults}
          pageCounter={pageCounter}
        />
      </form>
    </>
  );
};
